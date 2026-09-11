import * as THREE from 'three'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js'
import { mEqualPSL, mId, minv, mnormalize, type CMat } from './math/math'
import { ballIsometry, geodesic } from './math/h3-math'
import { FloatBuffer } from './utils/floatBuffer'
import { MAT_EPSILON, packMatrix, VertexTable } from './vertexTable'

export interface TreeUniforms {
  fadeColor: number[]
  fadeNear: number
  fadeFar: number
  fadeStrength: number
}

// Each segment is 6 values in both the position and color buffers.
const INITIAL_SEGMENTS = 1 << 14

// Queues the first `length` values of a buffer for upload to the GPU.
function markWritten(buffer: THREE.InterleavedBuffer, length: number) {
  if (length === 0) return
  buffer.addUpdateRange(0, length)
  buffer.needsUpdate = true
}

interface Generator {
  // Packed as in VertexTable.
  matrix: Float64Array
  // Pre-extracted [r, g, b] so the traversal never allocates a THREE.Color per step.
  color: [number, number, number]
  // Index of the generator equal to this one's inverse.
  inverse: number
}

export class CayleyTree {
  mesh: LineSegments2
  geometry: LineSegmentsGeometry
  material: LineMaterial
  generators: Generator[] = []
  depth = 0
  minSize = 0.015

  // Kept across rebuilds so they reuse their memory. The geometry's GPU buffers
  // are built on the position and color arrays.
  #vertices = new VertexTable()
  #positions = new FloatBuffer(6 * INITIAL_SEGMENTS)
  #colors = new FloatBuffer(6 * INITIAL_SEGMENTS)

  constructor(width: number, height: number) {
    this.material = new LineMaterial({
      vertexColors: true,
      linewidth: 2, // px
      resolution: new THREE.Vector2(width, height),
      worldUnits: false
    })
    this.material.onBeforeCompile = (shader) => {
      // Moves each segment endpoint x to t ⊕ Rx, where R and t come from
      // ballIsometry and a ⊕ y is the hyperbolic translation taking the origin
      // to a, applied to y.
      shader.vertexShader = shader.vertexShader
        .replace(
          'void main() {',
          `
        uniform mat3 ballRotation;
        uniform vec3 ballTranslation;

        vec3 ballIsometry( vec3 x ) {
          vec3 y = ballRotation * x;
          vec3 a = ballTranslation;
          float ay = dot( a, y );
          float aa = dot( a, a );
          float yy = dot( y, y );
          return ( ( 1.0 + 2.0 * ay + yy ) * a + ( 1.0 - aa ) * y ) / ( 1.0 + 2.0 * ay + aa * yy );
        }

        void main() {`
        )
        .replace('vec4( instanceStart, 1.0 )', 'vec4( ballIsometry( instanceStart ), 1.0 )')
        .replace('vec4( instanceEnd, 1.0 )', 'vec4( ballIsometry( instanceEnd ), 1.0 )')

      const i = shader.fragmentShader.indexOf('#include <premultiplied_alpha_fragment>')
      const first = shader.fragmentShader.slice(0, i)
      const last = shader.fragmentShader.slice(i)
      shader.fragmentShader =
        `
        uniform vec3 fadeColor;
        uniform float fadeNear;
        uniform float fadeFar;
        uniform float fadeStrength;
      ` +
        first +
        `
          float blend = (gl_FragCoord.z / gl_FragCoord.w - fadeNear)/(fadeFar - fadeNear) * fadeStrength;
          gl_FragColor = mix(gl_FragColor, vec4(fadeColor, alpha), blend);
      ` +
        last
    }
    Object.assign(this.material.uniforms, {
      fadeColor: { value: [0, 0, 0] },
      fadeNear: { value: 0 },
      fadeFar: { value: 0 },
      fadeStrength: { value: 0 },
      ballRotation: { value: new THREE.Matrix3() },
      ballTranslation: { value: new THREE.Vector3() },
    })
    this.geometry = this.#createGeometry()
    this.mesh = new LineSegments2(this.geometry, this.material)
    // The vertex shader moves points, so the geometry's bounding sphere doesn't
    // bound what is drawn.
    this.mesh.frustumCulled = false
  }

  // Moves the tree by the isometry m in the vertex shader, without rebuilding it.
  setTransform(m: CMat) {
    const { rotation, translation } = ballIsometry(m)
    this.material.uniforms.ballRotation.value.set(...rotation)
    this.material.uniforms.ballTranslation.value.set(translation.x, translation.y, translation.z)
  }

  setUniforms(u: TreeUniforms) {
    for (const [k, v] of Object.entries(u)) {
      this.material.uniforms[k].value = v
    }
  }

  setGeometry(baseGens: CMat[], colors: THREE.Color[][], depth: number) {
    // Each generator g is paired with g^-1 so the traversal can step in either
    // direction. Scaling to det 1 lets vertex matrices be compared up to sign.
    // A generator equal in PSL(2, ℂ) to an earlier one (e.g. g^-1 for an
    // involution g) would draw the same edges again, so it is dropped.
    const matrices: CMat[] = []
    this.generators = []
    baseGens.forEach((g, k) => {
      const m = mnormalize(g)
      const [c, ci] = colors[k]
      for (const [matrix, color] of [[m, c], [minv(m), ci]] as const) {
        if (matrices.some(h => mEqualPSL(h, matrix, MAT_EPSILON))) continue
        matrices.push(matrix)
        this.generators.push({ matrix: packMatrix(matrix), color: [color.r, color.g, color.b], inverse: -1 })
      }
    })
    this.generators.forEach((gen, i) => {
      const inv = minv(matrices[i])
      gen.inverse = matrices.findIndex(h => mEqualPSL(h, inv, MAT_EPSILON))
    })
    this.depth = depth

    this.#positions.clear()
    this.#colors.clear()
    this.#traverse()

    // A GPU buffer can't be resized, so if either array grew, the geometry is
    // recreated on the new arrays. Otherwise only the written part is uploaded.
    const positionBuffer = this.#interleavedBuffer('instanceStart')
    const colorBuffer = this.#interleavedBuffer('instanceColorStart')
    if (positionBuffer.array !== this.#positions.data || colorBuffer.array !== this.#colors.data) {
      this.geometry.dispose()
      this.geometry = this.#createGeometry()
      this.mesh.geometry = this.geometry
    } else {
      markWritten(positionBuffer, this.#positions.length)
      markWritten(colorBuffer, this.#colors.length)
    }
    this.geometry.instanceCount = this.#positions.length / 6
  }

  // A geometry whose GPU buffers are built on the whole position and color arrays.
  #createGeometry(): LineSegmentsGeometry {
    const geometry = new LineSegmentsGeometry()
    for (const [data, start, end] of [
      [this.#positions.data, 'instanceStart', 'instanceEnd'],
      [this.#colors.data, 'instanceColorStart', 'instanceColorEnd'],
    ] as const) {
      const buffer = new THREE.InstancedInterleavedBuffer(data, 6, 1).setUsage(THREE.DynamicDrawUsage)
      geometry.setAttribute(start, new THREE.InterleavedBufferAttribute(buffer, 3, 0))
      geometry.setAttribute(end, new THREE.InterleavedBufferAttribute(buffer, 3, 3))
    }
    geometry.instanceCount = 0
    return geometry
  }

  #interleavedBuffer(name: string): THREE.InterleavedBuffer {
    return (this.geometry.getAttribute(name) as THREE.InterleavedBufferAttribute).data
  }

  // Breadth-first search over group elements, so each element is first reached
  // by a shortest word. Each element is visited once and each edge drawn once.
  // Vertex ids are assigned in discovery order, so each level is a contiguous
  // range of ids and vertices are expanded in id order.
  #traverse() {
    const vertices = this.#vertices
    const gens = this.generators
    vertices.clear()

    const root = vertices.setCandidate(mId())
    vertices.findOrAdd()
    vertices.gens[root] = -1
    vertices.sizes[root] = 1

    let levelStart = 0
    for (let d = 0; d < this.depth && levelStart < vertices.count; d++) {
      const levelEnd = vertices.count
      for (let v = levelStart; v < levelEnd; v++) {
        if (vertices.sizes[v] < this.minSize) continue
        const parentGen = vertices.gens[v]

        for (let gi = 0; gi < gens.length; gi++) {
          // Stepping back to the parent would find it already expanded.
          if (parentGen >= 0 && gens[parentGen].inverse === gi) continue

          const n = vertices.setCandidateProduct(v, gens[gi].matrix)
          const size = vertices.distance(v, n)
          const w = vertices.findOrAdd()
          if (w === n) {
            vertices.gens[n] = gi
            vertices.sizes[n] = size
          } else if (w <= v) {
            // w was expanded before v and drew this edge then.
            continue
          } else {
            // w is not expanded yet, so a longer edge can still save it from pruning.
            vertices.sizes[w] = Math.max(vertices.sizes[w], size)
          }

          // The candidate at n is still intact, whether or not it was kept.
          this.#pushEdge(v, n, size, gens[gi].color)
        }
      }
      levelStart = levelEnd
    }
  }

  #pushEdge(from: number, to: number, size: number, [r, g, b]: Generator['color']) {
    const subdivisions = Math.floor(Math.min(Math.max(size * 100, 2), 10))
    const count = 6 * (subdivisions - 1)
    const colors = this.#colors
    const arr = colors.reserve(count)
    for (let i = colors.length; i < colors.length + count; i += 3) {
      arr[i] = r
      arr[i + 1] = g
      arr[i + 2] = b
    }
    colors.length += count
    geodesic(this.#vertices.quat(from), this.#vertices.quat(to), subdivisions, this.#positions)
  }

  dispose() {
    this.geometry.dispose()
    this.material.dispose()
  }
}
