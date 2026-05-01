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
  quat,
  rotate,
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

// Polyline endpoint: emitted once.
function pushEndpoint(arr: number[], v: Vec3) {
  arr.push(v.x, v.y, v.z)
}

// Interior vertex shared by two line segments: emitted twice.
function pushJoint(arr: number[], v: Vec3) {
  arr.push(v.x, v.y, v.z, v.x, v.y, v.z)
}

export function geodesic(a: Quaternion, b: Quaternion, divisions: number, arr: number[]): void {
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

  pushEndpoint(arr, p1)
  if (isStraight) {
    const step = vrmul(vsub(p2, p1), 1 / (divisions - 1))
    let current = p1
    for (let i = 1; i < divisions - 1; i++) {
      current = vadd(current, step)
      pushJoint(arr, current)
    }
  } else {
    const center = vrmul(mid, (1 + vdistsq(x, y) / midNormSq) / 2)
    const interp = qlerp(vnormalize(vsub(p1, center)), vnormalize(vsub(p2, center)), 1 / (divisions - 1))
    let current = vsub(p1, center)
    for (let i = 1; i < divisions - 1; i++) {
      current = rotate(current, interp)
      pushJoint(arr, vadd(current, center))
    }
  }
  pushEndpoint(arr, p2)
}
