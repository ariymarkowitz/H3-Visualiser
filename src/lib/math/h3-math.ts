import {
  cadd,
  cdot,
  cmplx,
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
  vadd_,
  vclone,
  vdistsq,
  vec3,
  vnormalize,
  vnormsq,
  vrdiv_,
  vrmult,
  vsub,
  type CMat,
  type Complex,
  type Quaternion,
  type Vec3
} from './complex'

export function cmplxToQuat(c: Complex): Quaternion {
  return quat(c.re, c.im, 0, 0)
}

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
  const aCmplx = cmplx(a.r, a.i)
  const d = cmplx(a.r - b.r, a.i - b.i)
  const d_normsq = cnormsq(d)
  const d_dot_a = cdot(d, aCmplx)

  const t = (m - d_dot_a) / d_normsq
  const center = cadd(crmul(d, t), aCmplx)

  const radius = Math.sqrt((a.r - center.re) ** 2 + (a.i - center.im) ** 2 + a.j ** 2 + a.k ** 2)
  const endDif = crmul(d, radius / cnorm(d))
  const end1 = cadd(center, endDif)
  const end2 = csub(center, endDif)

  return [end1, end2]
}

export function quatToVec3Norm(z: Quaternion): Vec3 {
  return vec3(z.r, z.i, Math.sqrt(z.j ** 2 + z.k ** 2))
}

export function geodesic(a: Quaternion, b: Quaternion, divisions: number, arr: number[]): void {
  const p1 = toBall(a)
  const p2 = toBall(b)

  // Find the center in the ball model.
  const [end1, end2] = endsOfGeodesic(a, b)
  const x = toBallCmplx(end1)
  const y = toBallCmplx(end2)

  const mid = vadd(x, y)
  const midn = vnormsq(mid)
  if (isNaN(midn) || midn < 1e-10) {
    const step = vrdiv_(vsub(p2, p1), divisions - 1)

    arr.push(p1.x, p1.y, p1.z)
    const current = vclone(p1)
    for (let i = 1; i < divisions - 1; i++) {
      vadd_(current, step)
      arr.push(current.x, current.y, current.z, current.x, current.y, current.z)
    }
    arr.push(p2.x, p2.y, p2.z)

    return
  }

  const center = vrmult(mid, (1 + vdistsq(x, y) / midn) / 2)

  const rel1 = vsub(p1, center)
  const rel2 = vsub(p2, center)

  // Compute interpolation of points.
  const rn1 = vnormalize(rel1)
  const rn2 = vnormalize(rel2)

  const interp = qlerp(rn1, rn2, 1 / (divisions - 1))
  let current = rel1

  arr.push(p1.x, p1.y, p1.z)
  for (let i = 1; i < divisions - 1; i++) {
    current = rotate(current, interp)
    const x = current.x + center.x
    const y = current.y + center.y
    const z = current.z + center.z
    arr.push(x, y, z, x, y, z)
  }
  arr.push(p2.x, p2.y, p2.z)
}
