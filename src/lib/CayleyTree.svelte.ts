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
  generators: CMat[] = []
  depth = 0

  colors: THREE.Color[] = []
  minSize = 0.015
  
  uniforms: TreeUniforms | undefined = $state()
  ready: boolean = $state(false)

  constructor(width: number, height: number) {
    const material = new LineMaterial({
      vertexColors: true,
      linewidth: 2, // px
      resolution: new THREE.Vector2(width, height),
      worldUnits: false
    })
    material.onBeforeCompile = (shader) => {
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
    material.uniforms.fadeColor = { value: undefined }
    material.uniforms.fadeNear = { type: 'f', value: undefined } as any
    material.uniforms.fadeFar = { type: 'f', value: undefined } as any
    material.uniforms.fadeStrength = { type: 'f', value: undefined } as any
    $effect(() => {
      if (!this.uniforms) {
        this.ready = false
        return
      }
      material.uniforms.fadeColor.value = this.uniforms.fadeColor
      material.uniforms.fadeNear.value = this.uniforms.fadeNear
      material.uniforms.fadeFar.value = this.uniforms.fadeFar
      material.uniforms.fadeStrength.value = this.uniforms.fadeStrength
    })
    this.geometry = new LineSegmentsGeometry()
    $effect(() => {
      if (!this.uniforms || this.ready) return
      this.mesh = new LineSegments2(this.geometry, material)
      this.ready = true
    })
  }

  setGeometry(gens: CMat[], colors: THREE.Color[], depth: number, start: CMat = mId()) {
    this.generators = gens.map((g) => [g, minv(g)]).flat()
    this.depth = depth
    this.colors = colors

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
    size: number,
    genN: number | undefined,
    q: Quaternion,
    mat: CMat,
    p: Vec3,
    state: TreeData
  ) {
    if (depth >= this.depth || size < this.minSize) return
    if (depth > 0 && mIsId(mat, 1e-4)) return

    for (let i = 0; i < this.generators.length; i++) {
      if (this.inverse(i) === genN) continue

      const newMat = mmul(mat, this.generators[i])
      const newQuat = mobius(newMat)
      const newVertex = toBall(mobius(newMat))

      const size = vdist(p, newVertex)
      const subdivisions = Math.floor(Math.min(Math.max(size * 100, 2), 10))

      const c = new THREE.Color(this.colors[i]).toArray()
      state.vertexColors.push(c[0], c[1], c[2])
      state.vertices.push(newVertex.x, newVertex.y, newVertex.z)
      for (let i = 0; i < subdivisions * 2 - 2; i++) {
        state.lineColors.push(c[0], c[1], c[2])
      }
      geodesic(q, newQuat, subdivisions, state.lines)

      this._tree(depth + 1, size, i, newQuat, newMat, newVertex, state)
    }
  }

  inverse(n: number) {
    return n % 2 ? n - 1 : n + 1
  }
}
