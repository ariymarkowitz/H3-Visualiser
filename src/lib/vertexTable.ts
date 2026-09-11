import { quat, type CMat, type Quaternion } from './math/math'

// Matrices that agree to within this, up to sign, are the same element of PSL(2, ℂ).
export const MAT_EPSILON = 1e-6

// Grid spacing in the ball for bucketing vertices. Matrix comparison decides
// equality, so this only sets bucket size. If float noise puts an element in a
// neighbouring cell, its subtree is drawn twice.
const CELL_SIZE = 1e-3
// Generators with simple entries put many points exactly on half-cells, where
// rounding is unstable. An irrational offset moves the cell boundaries off them.
const CELL_OFFSET = Math.SQRT2

// Packs a matrix as [a.re, a.im, b.re, b.im, c.re, c.im, d.re, d.im].
export function packMatrix(m: CMat): Float64Array {
  return Float64Array.from(m.flatMap(z => [z.re, z.im]))
}

function grow<T extends Float64Array | Int32Array>(arr: T, length: number, Ctor: new (length: number) => T): T {
  const next = new Ctor(length)
  next.set(arr)
  return next
}

// The distinct group elements found by a traversal. Everything is kept in flat
// typed arrays, so a large traversal creates no objects per vertex. Vertex i
// has its packed matrix at mats[8i], its upper half-space point at quats[4i]
// and its ball point at points[3i].
//
// A step writes a candidate vertex at index `count`. findOrAdd() then either
// matches it to an existing vertex or keeps it.
export class VertexTable {
  count = 0
  // Longest edge reaching each vertex.
  sizes = new Float64Array(0)
  // Generator that first reached each vertex, or -1 for the start.
  gens = new Int32Array(0)

  #capacity = 0
  #mats = new Float64Array(0)
  #quats = new Float64Array(0)
  #points = new Float64Array(0)
  #cells = new Int32Array(0)
  // Open-addressing hash table of vertex ids, keyed by cell. -1 marks an empty slot.
  #table = new Int32Array(1 << 10).fill(-1)
  #tableBits = 10

  clear() {
    this.count = 0
    this.#table.fill(-1)
  }

  // Writes m as the candidate and returns its index.
  setCandidate(m: CMat): number {
    const n = this.#reserve()
    this.#mats.set(packMatrix(m), 8 * n)
    this.#computePoint(n)
    return n
  }

  // Writes vertex v's matrix times gen (packed) as the candidate and returns its index.
  setCandidateProduct(v: number, gen: Float64Array): number {
    const n = this.#reserve()
    const M = this.#mats
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 2; col++) {
        // out[row][col] = v[row][0] · gen[0][col] + v[row][1] · gen[1][col]
        const x0 = 8 * v + 4 * row
        const x1 = x0 + 2
        const y0 = 2 * col
        const y1 = y0 + 4
        const out = 8 * n + 4 * row + 2 * col
        M[out] = (M[x0] * gen[y0] - M[x0 + 1] * gen[y0 + 1]) + (M[x1] * gen[y1] - M[x1 + 1] * gen[y1 + 1])
        M[out + 1] = (M[x0] * gen[y0 + 1] + M[x0 + 1] * gen[y0]) + (M[x1] * gen[y1 + 1] + M[x1 + 1] * gen[y1])
      }
    }
    this.#computePoint(n)
    return n
  }

  // Euclidean distance between the ball points of vertices a and b.
  distance(a: number, b: number): number {
    const P = this.#points
    return Math.sqrt((P[3 * a] - P[3 * b]) ** 2 + (P[3 * a + 1] - P[3 * b + 1]) ** 2 + (P[3 * a + 2] - P[3 * b + 2]) ** 2)
  }

  quat(i: number): Quaternion {
    const Q = this.#quats
    return quat(Q[4 * i], Q[4 * i + 1], Q[4 * i + 2], Q[4 * i + 3])
  }

  // If the candidate equals an existing vertex, returns that vertex. Otherwise
  // keeps the candidate as a new vertex and returns its index.
  findOrAdd(): number {
    const n = this.count
    const cell = this.#cellKey(n)
    const table = this.#table
    const mask = table.length - 1
    let slot = this.#slot(cell)
    for (let id = table[slot]; id >= 0; id = table[slot]) {
      if (this.#cells[id] === cell && this.#sameElement(id, n)) return id
      slot = (slot + 1) & mask
    }
    table[slot] = n
    this.#cells[n] = cell
    this.count++
    if (2 * this.count > table.length) this.#rehash()
    return n
  }

  #slot(cell: number): number {
    return Math.imul(cell, 0x9e3779b1) >>> (32 - this.#tableBits)
  }

  #rehash() {
    this.#tableBits++
    const table = (this.#table = new Int32Array(1 << this.#tableBits).fill(-1))
    const mask = table.length - 1
    for (let id = 0; id < this.count; id++) {
      let slot = this.#slot(this.#cells[id])
      while (table[slot] >= 0) slot = (slot + 1) & mask
      table[slot] = id
    }
  }

  // Makes room for a candidate at index count and returns that index.
  #reserve(): number {
    const n = this.count
    if (n === this.#capacity) {
      const capacity = Math.max(1024, 2 * n)
      this.#mats = grow(this.#mats, 8 * capacity, Float64Array)
      this.#quats = grow(this.#quats, 4 * capacity, Float64Array)
      this.#points = grow(this.#points, 3 * capacity, Float64Array)
      this.#cells = grow(this.#cells, capacity, Int32Array)
      this.sizes = grow(this.sizes, capacity, Float64Array)
      this.gens = grow(this.gens, capacity, Int32Array)
      this.#capacity = capacity
    }
    return n
  }

  // Same as toBall(mobius(m)) for vertex i's matrix m, without allocating.
  #computePoint(i: number) {
    const M = this.#mats
    const m = 8 * i
    // mobius(m) = x / y for the quaternions x = b + a·j and y = d + c·j.
    const xr = M[m + 2], xi = M[m + 3], xj = M[m], xk = M[m + 1]
    const yr = M[m + 6], yi = M[m + 7], yj = M[m + 4], yk = M[m + 5]
    const ny = yr * yr + yi * yi + yj * yj + yk * yk
    const r = (xr * yr + xi * yi + xj * yj + xk * yk) / ny
    const qi = (-xr * yi + xi * yr - xj * yk + xk * yj) / ny
    const qj = (-xr * yj + xi * yk + xj * yr - xk * yi) / ny
    const qk = (-xr * yk - xi * yj + xj * yi + xk * yr) / ny
    const Q = this.#quats
    Q[4 * i] = r
    Q[4 * i + 1] = qi
    Q[4 * i + 2] = qj
    Q[4 * i + 3] = qk

    const n = r * r + qi * qi
    const t = qj * qj + qk * qk
    const norm = n + t + 2 * Math.sqrt(t) + 1
    const P = this.#points
    P[3 * i] = (r * 2) / norm
    P[3 * i + 1] = (-qi * 2) / norm
    P[3 * i + 2] = (n + t - 1) / norm
  }

  #cellKey(i: number): number {
    const P = this.#points
    const x = Math.round(P[3 * i] / CELL_SIZE + CELL_OFFSET)
    const y = Math.round(P[3 * i + 1] / CELL_SIZE + CELL_OFFSET)
    const z = Math.round(P[3 * i + 2] / CELL_SIZE + CELL_OFFSET)
    return (x * 73856093) ^ (y * 19349663) ^ (z * 83492791)
  }

  // Whether the matrices of vertices a and b agree up to sign.
  #sameElement(a: number, b: number): boolean {
    const M = this.#mats
    let plus = true
    let minus = true
    for (let k = 0; k < 8; k++) {
      const x = M[8 * a + k]
      const y = M[8 * b + k]
      plus &&= Math.abs(x - y) <= MAT_EPSILON
      minus &&= Math.abs(x + y) <= MAT_EPSILON
      if (!plus && !minus) return false
    }
    return true
  }
}
