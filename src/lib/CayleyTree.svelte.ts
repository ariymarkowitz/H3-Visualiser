import * as THREE from 'three'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js'
import {
  mId,
  minv,
  mIsId,
  mmul,
  quat,
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

export class CayleyTree {
  origin = quat(0, 0, 1, 0)

  mesh: LineSegments2 | undefined
  geometry?: LineSegmentsGeometry
  material: LineMaterial
  generators: CMat[] = []
  depth = 0

  // Pre-extracted [r,g,b] triples per entry in `colors`, rebuilt in setGeometry
  // so _tree never allocates a THREE.Color per recursion step.
  colorArrays: [number, number, number][] = []
  colors: THREE.Color[] = []
  minSize = 0.015

  uniforms: TreeUniforms | undefined = $state()
  ready: boolean = $state(false)

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
    this.material.uniforms.fadeColor = { value: undefined }
    this.material.uniforms.fadeNear = { type: 'f', value: undefined } as any
    this.material.uniforms.fadeFar = { type: 'f', value: undefined } as any
    this.material.uniforms.fadeStrength = { type: 'f', value: undefined } as any
    $effect(() => {
      if (!this.uniforms) {
        this.ready = false
        return
      }
      this.material.uniforms.fadeColor.value = this.uniforms.fadeColor
      this.material.uniforms.fadeNear.value = this.uniforms.fadeNear
      this.material.uniforms.fadeFar.value = this.uniforms.fadeFar
      this.material.uniforms.fadeStrength.value = this.uniforms.fadeStrength
    })
    this.geometry = new LineSegmentsGeometry()
    $effect(() => {
      if (!this.uniforms || this.ready) return
      this.mesh = new LineSegments2(this.geometry, this.material)
      this.ready = true
    })
  }

  setGeometry(gens: CMat[], colors: THREE.Color[], depth: number, start: CMat = mId()) {
    this.generators = gens.flatMap((g) => [g, minv(g)])
    this.depth = depth
    this.colors = colors
    // Pre-extract RGB arrays once per generator so _tree doesn't allocate per step.
    this.colorArrays = colors.map((c) => [c.r, c.g, c.b])

    const data: TreeData = {
      vertexColors: [],
      vertices: [],
      lineColors: [],
      lines: []
    }
    const startQuat = mobius(start)
    this._tree(0, 1, undefined, startQuat, start, toBall(startQuat), data)

    if (this.geometry) this.geometry.dispose()
    this.geometry = new LineSegmentsGeometry()

    this.geometry.setPositions(data.lines)
    this.geometry.setColors(data.lineColors)
    if (this.mesh) this.mesh.geometry = this.geometry
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
      if ((gi ^ 1) === genN) continue

      const newMat = mmul(mat, this.generators[gi])
      const newQuat = mobius(newMat)
      const newVertex = toBall(newQuat)

      const childSize = vdist(p, newVertex)
      const subdivisions = Math.floor(Math.min(Math.max(childSize * 100, 2), 10))

      const [r, g, b] = this.colorArrays[gi]
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
    this.geometry?.dispose()
    this.material.dispose()
  }
}
