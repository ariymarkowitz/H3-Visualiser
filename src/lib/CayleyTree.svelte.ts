import * as THREE from 'three'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js'
import {
  mId,
  minv,
  mIsId,
  mmul,
  vdist,
  type CMat,
  type Quaternion,
  type Vec3
} from './math/math'
import { geodesic, mobius, toBall } from './math/h3-math'

interface TreeData {
  lineColors: number[]
  lines: number[]
}

export interface TreeUniforms {
  fadeColor: number[]
  fadeNear: number
  fadeFar: number
  fadeStrength: number
}

interface Generator {
  matrix: CMat
  // Pre-extracted [r, g, b] so _tree never allocates a THREE.Color per step.
  color: [number, number, number]
}

export class CayleyTree {
  mesh: LineSegments2
  geometry: LineSegmentsGeometry
  material: LineMaterial
  generators: Generator[] = []
  depth = 0
  minSize = 0.015

  constructor(width: number, height: number) {
    this.material = new LineMaterial({
      vertexColors: true,
      linewidth: 2, // px
      resolution: new THREE.Vector2(width, height),
      worldUnits: false
    })
    this.material.onBeforeCompile = (shader) => {
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
    })
    this.geometry = new LineSegmentsGeometry()
    this.mesh = new LineSegments2(this.geometry, this.material)
  }

  setUniforms(u: TreeUniforms) {
    for (const [k, v] of Object.entries(u)) {
      this.material.uniforms[k].value = v
    }
  }

  setGeometry(baseGens: CMat[], colors: THREE.Color[][], depth: number, start: CMat = mId()) {
    // Each generator g is paired with g^-1 so traverse can step in either direction.
    this.generators = baseGens.flatMap((g, k): Generator[] => {
      const [c, ci] = colors[k]
      return [
        { matrix: g, color: [c.r, c.g, c.b] },
        { matrix: minv(g), color: [ci.r, ci.g, ci.b] },
      ]
    })
    this.depth = depth

    const data: TreeData = {
      lineColors: [],
      lines: []
    }
    const startQuat = mobius(start)
    this.#traverse(0, 1, undefined, startQuat, start, toBall(startQuat), data)

    this.geometry.dispose()
    this.geometry = new LineSegmentsGeometry()

    this.geometry.setPositions(data.lines)
    this.geometry.setColors(data.lineColors)
    this.mesh.geometry = this.geometry
  }

  #traverse(
    depth: number,
    edgeSize: number,
    genN: number | undefined,
    q: Quaternion,
    mat: CMat,
    p: Vec3,
    state: TreeData
  ) {
    if (depth >= this.depth || edgeSize < this.minSize) return
    if (depth > 0 && mIsId(mat, 1e-4)) return

    for (let gi = 0; gi < this.generators.length; gi++) {
      // Skip g^-1 immediately after stepping along g.
      if ((gi ^ 1) === genN) continue

      const gen = this.generators[gi]
      const newMat = mmul(mat, gen.matrix)
      const newQuat = mobius(newMat)
      const newVertex = toBall(newQuat)

      const childSize = vdist(p, newVertex)
      const subdivisions = Math.floor(Math.min(Math.max(childSize * 100, 2), 10))

      const [r, g, b] = gen.color
      for (let li = 0; li < subdivisions * 2 - 2; li++) {
        state.lineColors.push(r, g, b)
      }
      geodesic(q, newQuat, subdivisions, state.lines)

      this.#traverse(depth + 1, childSize, gi, newQuat, newMat, newVertex, state)
    }
  }

  dispose() {
    this.geometry.dispose()
    this.material.dispose()
  }
}
