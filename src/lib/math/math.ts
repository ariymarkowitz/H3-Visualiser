export interface Complex {
  re: number
  im: number
}

export function cmplx(re: number, im: number): Complex {
  return { re, im }
}

export function cmul(a: Complex, b: Complex): Complex {
  return cmplx(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re)
}

export function conj(z: Complex): Complex {
  return cmplx(z.re, -z.im)
}

export function cadd(a: Complex, b: Complex): Complex {
  return cmplx(a.re + b.re, a.im + b.im)
}

export function cradd(a: Complex, b: number): Complex {
  return cmplx(a.re + b, a.im)
}

export function csub(a: Complex, b: Complex): Complex {
  return cmplx(a.re - b.re, a.im - b.im)
}

export function crsub(a: Complex, b: number): Complex {
  return cmplx(a.re - b, a.im)
}

export function cneg(a: Complex): Complex {
  return cmplx(-a.re, -a.im)
}

export function cnorm(a: Complex): number {
  return Math.sqrt(a.re * a.re + a.im * a.im)
}

export function cnormsq(a: Complex): number {
  return a.re * a.re + a.im * a.im
}

export function cdot(a: Complex, b: Complex): number {
  return a.re * b.re + a.im * b.im
}

export function cdiv(a: Complex, b: Complex): Complex {
  const n = cnormsq(b)
  return cmplx((a.re * b.re + a.im * b.im) / n, (b.re * a.im - b.im * a.re) / n)
}

export function crmul(a: Complex, b: number): Complex {
  return cmplx(a.re * b, a.im * b)
}

export function crdiv(a: Complex, b: number): Complex {
  return cmplx(a.re / b, a.im / b)
}

export function cinv(a: Complex): Complex {
  const n = cnorm(a)
  return cmplx(a.re / n, a.im / n)
}

export function cexp(a: Complex): Complex {
  const r = Math.exp(a.re)
  return cmplx(r * Math.cos(a.im), r * Math.sin(a.im))
}

export function csqr(a: Complex): Complex {
  return cmul(a, a)
}

export function csqrt(z: Complex): Complex {
  if (z.im === 0 && z.re <= 0) {
    return cmplx(0, Math.sqrt(-z.re))
  }
  const r = cnorm(z)
  const mul = Math.sqrt(r/((z.re+r)**2 + z.im**2))
  return cmplx((z.re+r)*mul, z.im*mul)
}

export function cIsOne(a: Complex, e = 0) {
  return Math.abs(a.re - 1) <= e && Math.abs(a.im) <= e
}

export function cIsZero(a: Complex, e = 0) {
  return Math.abs(a.re) <= e && Math.abs(a.im) <= e
}

export function cequal(a: Complex, b: Complex) {
  return a.re === b.re && a.im === b.im
}

export function cclone(a: Complex) {
  return cmplx(a.re, a.im)
}

export function cpow(z: Complex, exp: number) {
  const r = cnorm(z)
  const newtheta = Math.atan2(z.im, z.re)*exp
  const newr = r**exp
  return cmplx(newr * Math.cos(newtheta), newr * Math.sin(newtheta))
}

export type CMat = [Complex, Complex, Complex, Complex]

export function cmatrix(a: Complex, b: Complex, c: Complex, d: Complex) {
  return [a, b, c, d]
}

export function madd(a: CMat, b: CMat): CMat {
  return [cadd(a[0], b[0]), cadd(a[1], b[1]), cadd(a[2], b[2]), cadd(a[3], b[3])]
}

export function msub(a: CMat, b: CMat): CMat {
  return [csub(a[0], b[0]), csub(a[1], b[1]), csub(a[2], b[2]), csub(a[3], b[3])]
}

export function mneg(a: CMat): CMat {
  return [cneg(a[0]), cneg(a[1]), cneg(a[2]), cneg(a[3])]
}

export function mmul(a: CMat, b: CMat): CMat {
  return [
    cadd(cmul(a[0], b[0]), cmul(a[1], b[2])),
    cadd(cmul(a[0], b[1]), cmul(a[1], b[3])),
    cadd(cmul(a[2], b[0]), cmul(a[3], b[2])),
    cadd(cmul(a[2], b[1]), cmul(a[3], b[3]))
  ]
}

export function mcmul(a: CMat, b: Complex): CMat {
  return [cmul(a[0], b), cmul(a[1], b), cmul(a[2], b), cmul(a[3], b)]
}

export function mcdiv(a: CMat, b: Complex): CMat {
  return [cdiv(a[0], b), cdiv(a[1], b), cdiv(a[2], b), cdiv(a[3], b)]
}

export function mrmul(a: CMat, b: number): CMat {
  return [crmul(a[0], b), crmul(a[1], b), crmul(a[2], b), crmul(a[3], b)]
}

export function mrdiv(a: CMat, b: number): CMat {
  return [crdiv(a[0], b), crdiv(a[1], b), crdiv(a[2], b), crdiv(a[3], b)]
}

export function det(a: CMat): Complex {
  return csub(cmul(a[0], a[3]), cmul(a[1], a[2]))
}

export function tr(a: CMat): Complex {
  return cadd(a[0], a[3])
}

export function mIsSingular(a: CMat): boolean {
  return cnorm(det(a)) < 1e-10
}

export function minv(a: CMat): CMat {
  const d = det(a)
  return [cdiv(a[3], d), cdiv(cneg(a[1]), d), cdiv(cneg(a[2]), d), cdiv(a[0], d)]
}

export function mdiv(a: CMat, b: CMat): CMat {
  const d = det(a)
  return [
    cdiv(cadd(cmul(a[0], b[3]), cmul(a[1], cneg(b[1]))), d),
    cdiv(cadd(cmul(a[0], cneg(b[1])), cmul(a[1], b[0])), d),
    cdiv(cadd(cmul(a[2], b[3]), cmul(a[3], cneg(b[1]))), d),
    cdiv(cadd(cmul(a[2], cneg(b[1])), cmul(a[1], b[0])), d)
  ]
}

export function mId(): CMat {
  return [cmplx(1, 0), cmplx(0, 0), cmplx(0, 0), cmplx(1, 0)]
}

export function mclone(m: CMat): CMat {
  return [cclone(m[0]), cclone(m[1]), cclone(m[2]), cclone(m[3])]
}

/**
 * Finds U, V = diag(eig1, eig2) such that m = U^-1 V U.
 * @param m The matrix to diagonalise
 */
export function mdecomp(m: CMat): {U: CMat, eig1: Complex, eig2: Complex} {
  // Dirty hack. Shift the values slightly if it is parabolic.
  if (cnormsq(tr(m))-4*cnorm(det(m)) < 1e-8) {
    m = mclone(m)
    m[3].re += 1e-4
  }
  const Delta = crdiv(csub(m[0], m[3]), 2)
  const d = csqrt(cadd(csqr(Delta), cmul(m[1], m[2])))
  if (cnormsq(cadd(Delta, d)) < cnormsq(csub(Delta, d))) {
    d.re = -d.re
    d.im = -d.im
  }
  const t1 = cdiv(m[1], cadd(Delta, d))
  const t2 = cdiv(m[2], cadd(Delta, d))

  const delta = cdiv(cmul(m[1], m[2]), cadd(Delta, d))
  const eig1 = cadd(m[0], delta)
  const eig2 = csub(m[3], delta)

  const den = csqrt(cradd(cmul(t1, t2), 1))

  const c = cinv(den)
  const U: CMat = [c, cmul(c, t1), cmul(c, cneg(t2)), c]

  return {U, eig1, eig2}
}

export function mpow(m: CMat, n: number): CMat {
  const {U, eig1, eig2} = mdecomp(m)
  return mmul(minv(U), mmul(diag(cpow(eig1, n), cpow(eig2, n)), U))
}

export function diag(a: Complex, b: Complex): CMat {
  return [a, cmplx(0, 0), cmplx(0, 0), b]
}

export type ComplexConvert = number | Complex

export function complex(n: ComplexConvert | number[], m?: number) {
  if (m !== undefined) {
    if (typeof n !== 'number') {
      throw new Error("Can't convert to complex number")
    }
    return cmplx(n, m)
  } else if (typeof n === 'object') {
    if (Array.isArray(n)) {
      return cmplx(n[0], n[1])
    } else if ('re' in n && 'im' in n) {
      return n
    }
  } else if (typeof n === 'number') {
    return cmplx(n, 0)
  }
  throw new Error("Can't convert to complex number")
}

export function cMatrix(
  a1: ComplexConvert,
  a2: ComplexConvert,
  a3: ComplexConvert,
  a4: ComplexConvert
): CMat {
  return [complex(a1), complex(a2), complex(a3), complex(a4)]
}

export function mIsId(a: CMat, e = 0) {
  return cIsOne(a[0], e) && cIsZero(a[1], e) && cIsZero(a[2], e) && cIsOne(a[3], e)
}

export function mequal(a: CMat, b: CMat) {
  return cequal(a[0], b[0])
    && cequal(a[1], b[1])
    && cequal(a[2], b[2])
    && cequal(a[3], b[3])
}

export function makedet1(m: CMat, i: number): Complex | undefined {
  if (cIsZero(m[3-i])) return undefined
  if (i === 0) {
    return cdiv(cradd(cmul(m[1], m[2]), 1), m[3])
  } else if (i === 1) {
    return cdiv(crsub(cmul(m[0], m[3]), 1), m[2])
  } else if (i === 2) {
    return cdiv(crsub(cmul(m[0], m[3]), 1), m[1])
  } else if (i === 3) {
    return cdiv(cradd(cmul(m[1], m[2]), 1), m[0])
  }
  throw new Error("Index is out of range");
  
}

export interface Vec3 {
  x: number
  y: number
  z: number
}

export function vec3(x: number, y: number, z: number) {
  return { x, y, z }
}

export function vadd_(a: Vec3, b: Vec3): void {
  a.x += b.x
  a.y += b.y
  a.z += b.z
}

export function vadd(a: Vec3, b: Vec3): Vec3 {
  return vec3(a.x + b.x, a.y + b.y, a.z + b.z)
}

export function vsub(a: Vec3, b: Vec3): Vec3 {
  return vec3(a.x - b.x, a.y - b.y, a.z - b.z)
}

export function vrmul(a: Vec3, b: number): Vec3 {
  return vec3(a.x * b, a.y * b, a.z * b)
}

export function vrdiv_(a: Vec3, b: number): Vec3 {
  a.x /= b
  a.y /= b
  a.z /= b
  return a
}

export function vrdiv(a: Vec3, b: number): Vec3 {
  return vec3(a.x / b, a.y / b, a.z / b)
}

export function vnorm(v: Vec3): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
}

export function vnormsq(v: Vec3): number {
  return v.x * v.x + v.y * v.y + v.z * v.z
}

export function vnormalize(v: Vec3): Vec3 {
  const n = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
  return vec3(v.x / n, v.y / n, v.z / n)
}

export function vdist(a: Vec3, b: Vec3): number {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2)
}

export function vdistsq(a: Vec3, b: Vec3): number {
  return (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2
}

export function vsumsq(a: Vec3, b: Vec3): number {
  return (a.x + b.x) ** 2 + (a.y + b.y) ** 2 + (a.z + b.z) ** 2
}

export function vclone(v: Vec3): Vec3 {
  return vec3(v.x, v.y, v.z)
}

export function vdot(a: Vec3, b: Vec3) {
  return a.x * b.x + a.y * b.y + a.z * b.z
}

export function vcross(a: Vec3, b: Vec3) {
  return vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x)
}

export interface Quaternion {
  r: number
  i: number
  j: number
  k: number
}

export function quat(re: number, i: number, j: number, k: number): Quaternion {
  return { r: re, i, j, k }
}

export function qset(q: Quaternion, re: number, i: number, j: number, k: number): void {
  q.r = re
  q.i = i
  q.j = j
  q.k = k
}

export function cqadd(a: Complex, b: Quaternion) {
  return quat(a.re + b.r, a.im + b.i, b.j, b.k)
}

export function qnormsq(a: Quaternion) {
  return a.r * a.r + a.i * a.i + a.j * a.j + a.k * a.k
}

export function qnorm(a: Quaternion) {
  return Math.sqrt(a.r * a.r + a.i * a.i + a.j * a.j + a.k * a.k)
}

export function qnormalize_(q: Quaternion): void {
  qrdiv_(q, qnorm(q))
}

export function qmul(a: Quaternion, b: Quaternion) {
  return quat(
    a.r * b.r - a.i * b.i - a.j * b.j - a.k * b.k,
    a.r * b.i + a.i * b.r + a.j * b.k - a.k * b.j,
    a.r * b.j - a.i * b.k + a.j * b.r + a.k * b.i,
    a.r * b.k + a.i * b.j - a.j * b.i + a.k * b.r
  )
}

export function qrmul(a: Quaternion, b: number): Quaternion {
  return quat(a.r * b, a.i * b, a.j * b, a.k * b)
}

export function qrdiv_(a: Quaternion, b: number): void {
  a.r /= b
  a.i /= b
  a.j /= b
  a.k /= b
}

export function qdiv(a: Quaternion, b: Quaternion) {
  const n = qnormsq(b)
  return quat(
    (a.r * b.r + a.i * b.i + a.j * b.j + a.k * b.k) / n,
    (-a.r * b.i + a.i * b.r - a.j * b.k + a.k * b.j) / n,
    (-a.r * b.j + a.i * b.k + a.j * b.r - a.k * b.i) / n,
    (-a.r * b.k - a.i * b.j + a.j * b.i + a.k * b.r) / n
  )
}

export function qlerp(a: Vec3, b: Vec3, t: number): Quaternion {
  // Get the quaternion that rotates a to b.
  const d = vdot(a, b)
  if (d === 1) return quat(1, 0, 0, 0)
  const v = vcross(a, b)
  const q = quat(vnorm(a) * vnorm(b) + vdot(a, b), v.x, v.y, v.z)
  qnormalize_(q)

  const theta = Math.acos(q.r) * t
  const norm = vnorm(v)
  const s = Math.sin(theta) / norm
  qset(q, Math.cos(theta), v.x * s, v.y * s, v.z * s)
  return q
}

export function rotate(a: Vec3, q: Quaternion): Vec3 {
  const qii = q.i * q.i
  const qjj = q.j * q.j
  const qkk = q.k * q.k
  const qri = q.r * q.i
  const qrj = q.r * q.j
  const qrk = q.r * q.k
  const qik = q.i * q.k
  const qij = q.i * q.j
  const qjk = q.j * q.k
  return vec3(
    a.x * (1 - 2 * (qjj + qkk)) + a.y * 2 * (qij - qrk) + a.z * 2 * (qik + qrj),
    a.x * 2 * (qij + qrk) + a.y * (1 - 2 * (qii + qkk)) + a.z * 2 * (qjk - qri),
    a.x * 2 * (qik - qrj) + a.y * 2 * (qjk + qri) + a.z * (1 - 2 * (qii + qjj))
  )
}
