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
  vertexColors: number[]
  vertices: number[]
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

  uniforms: TreeUniforms | undefined = $state()

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
    $effect(() => {
      if (!this.uniforms) return
      for (const [k, v] of Object.entries(this.uniforms)) {
        this.material.uniforms[k].value = v
      }
    })
    this.geometry = new LineSegmentsGeometry()
    this.mesh = new LineSegments2(this.geometry, this.material)
  }

  setGeometry(baseGens: CMat[], colors: THREE.Color[], depth: number, start: CMat = mId()) {
    // Each generator g is paired with g^-1 so _tree can step in either direction.
    // `colors` is parallel to the expanded generator list — index 2k is g, 2k+1 is g^-1.
    this.generators = baseGens.flatMap((g, k): Generator[] => [
      { matrix: g, color: [colors[2*k].r, colors[2*k].g, colors[2*k].b] },
      { matrix: minv(g), color: [colors[2*k+1].r, colors[2*k+1].g, colors[2*k+1].b] },
    ])
    this.depth = depth

    const data: TreeData = {
      vertexColors: [],
      vertices: [],
      lineColors: [],
      lines: []
    }
    const startQuat = mobius(start)
    this._tree(0, 1, undefined, startQuat, start, toBall(startQuat), data)

    this.geometry.dispose()
    this.geometry = new LineSegmentsGeometry()

    this.geometry.setPositions(data.lines)
    this.geometry.setColors(data.lineColors)
    this.mesh.geometry = this.geometry
  }

  _tree(
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
      state.vertexColors.push(r, g, b)
      state.vertices.push(newVertex.x, newVertex.y, newVertex.z)
      for (let li = 0; li < subdivisions * 2 - 2; li++) {
        state.lineColors.push(r, g, b)
      }
      geodesic(q, newQuat, subdivisions, state.lines)

      this._tree(depth + 1, childSize, gi, newQuat, newMat, newVertex, state)
    }
  }

  dispose() {
    this.geometry.dispose()
    this.material.dispose()
  }
}
