import {
  cadd,
  cdot,
  complex,
  cnorm,
  cnormsq,
  crmul,
  csub,
  qdiv,
  qlerp,
  qnormsq,
  qToMat3,
  quat,
  vadd,
  vdistsq,
  vec3,
  vnormalize,
  vnormsq,
  vrmul,
  vsub,
  type CMat,
  type Complex,
  type Quaternion,
  type Vec3
} from './math'
import type { FloatBuffer } from '../utils/floatBuffer'

export function mobius(m: CMat): Quaternion {
  return qdiv(quat(m[1].re, m[1].im, m[0].re, m[0].im), quat(m[3].re, m[3].im, m[2].re, m[2].im))
}

export function toBall(z: Quaternion): Vec3 {
  const n = z.r * z.r + z.i * z.i
  const t = z.j * z.j + z.k * z.k

  const norm = n + t + 2 * Math.sqrt(t) + 1
  return vec3((z.r * 2) / norm, (-z.i * 2) / norm, (n + t - 1) / norm)
}

export function toBallCmplx(z: Complex): Vec3 {
  const zsq = cnormsq(z)
  const n = zsq + 1
  return vec3((z.re * 2) / n, (-z.im * 2) / n, (zsq - 1) / n)
}

export function endsOfGeodesic(a: Quaternion, b: Quaternion): [Complex, Complex] {
  const m = (qnormsq(a) - qnormsq(b)) / 2
  const aCmplx = complex(a.r, a.i)
  const d = complex(a.r - b.r, a.i - b.i)
  const d_normsq = cnormsq(d)
  const d_dot_a = cdot(d, aCmplx)

  const t = (m - d_dot_a) / d_normsq
  const center = cadd(crmul(d, t), aCmplx)

  // Distance from `a` to (center, 0, 0) — the radius of the semicircle whose
  // ends on the boundary plane (j=k=0) define this geodesic.
  const radius = Math.sqrt((a.r - center.re) ** 2 + (a.i - center.im) ** 2 + a.j ** 2 + a.k ** 2)
  const endDif = crmul(d, radius / cnorm(d))
  const end1 = cadd(center, endDif)
  const end2 = csub(center, endDif)

  return [end1, end2]
}

function writePoint(arr: Float32Array, i: number, x: number, y: number, z: number): number {
  arr[i] = x
  arr[i + 1] = y
  arr[i + 2] = z
  return i + 3
}

// Appends the geodesic from a to b to `out` as divisions - 1 line segments,
// each written as its two endpoints.
export function geodesic(a: Quaternion, b: Quaternion, divisions: number, out: FloatBuffer): void {
  const p1 = toBall(a)
  const p2 = toBall(b)

  // Find the center in the ball model.
  const [end1, end2] = endsOfGeodesic(a, b)
  const x = toBallCmplx(end1)
  const y = toBallCmplx(end2)

  const mid = vadd(x, y)
  const midNormSq = vnormsq(mid)
  // Scale the threshold by the magnitude of x and y so the test is invariant
  // to the positions of the boundary points. NaN occurs when the boundary
  // points coincide (degenerate geodesic) — treat as a straight line.
  const scale = vnormsq(x) + vnormsq(y)
  const isStraight = isNaN(midNormSq) || midNormSq < 1e-10 * scale

  const segments = divisions - 1
  const arr = out.reserve(6 * segments)
  let i = out.length
  // End of the previous segment.
  let px = p1.x
  let py = p1.y
  let pz = p1.z
  if (isStraight) {
    const step = vrmul(vsub(p2, p1), 1 / segments)
    for (let s = 1; s < segments; s++) {
      i = writePoint(arr, i, px, py, pz)
      px += step.x
      py += step.y
      pz += step.z
      i = writePoint(arr, i, px, py, pz)
    }
  } else {
    const center = vrmul(mid, (1 + vdistsq(x, y) / midNormSq) / 2)
    const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = qToMat3(
      qlerp(vnormalize(vsub(p1, center)), vnormalize(vsub(p2, center)), 1 / segments)
    )
    // Offset from the center, rotated one step per segment.
    let ux = p1.x - center.x
    let uy = p1.y - center.y
    let uz = p1.z - center.z
    for (let s = 1; s < segments; s++) {
      i = writePoint(arr, i, px, py, pz)
      const rx = ux * m00 + uy * m01 + uz * m02
      const ry = ux * m10 + uy * m11 + uz * m12
      const rz = ux * m20 + uy * m21 + uz * m22
      ux = rx
      uy = ry
      uz = rz
      px = ux + center.x
      py = uy + center.y
      pz = uz + center.z
      i = writePoint(arr, i, px, py, pz)
    }
  }
  i = writePoint(arr, i, px, py, pz)
  i = writePoint(arr, i, p2.x, p2.y, p2.z)
  out.length = i
}
