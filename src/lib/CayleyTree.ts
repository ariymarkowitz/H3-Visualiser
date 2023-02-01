import * as THREE from 'three'
import { mobius, geodesic, toBall } from './math/h3-math'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2'
import { mId, minv, mIsId, mmul, quat, vdist, vec3, type CMat, type Quaternion, type Vec3 } from './math/complex'

interface TreeData {
  vertexColors: number[]
  vertices: number[]
  lineColors: number[]
  lines: number[]
}

export class CayleyTree {
  width: number
  height: number
  generators: CMat[]
  depth: number

  colors: THREE.Color[] = []
  minSize = 0.015

  constructor(gens: CMat[], colors: THREE.Color[], depth: number, width: number, height: number) {
    this.width = width
    this.height = height
    this.generators = gens.map(g => [g, minv(g)]).flat()
    this.depth = depth
    this.colors = colors
  }

  mesh() {
    const data: TreeData = {
      vertexColors: [],
      vertices: [],
      lineColors: [],
      lines: []
    }
    this._tree(0, 1, undefined, quat(0, 0, 1, 0), mId(), vec3(0, 0, 1), data)

    const geometry = new LineSegmentsGeometry()
    geometry.setPositions(data.lines)
    geometry.setColors(data.lineColors)
    const material = new LineMaterial({
      vertexColors: true,
      linewidth: 2, // px
      resolution: new THREE.Vector2(this.width, this.height),
      worldUnits: false
    })
    const lineMesh = new LineSegments2(geometry, material)
    return lineMesh
  }

  _tree(depth: number, size: number, genN: number | undefined, q: Quaternion, mat: CMat, p: Vec3, state: TreeData) {
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