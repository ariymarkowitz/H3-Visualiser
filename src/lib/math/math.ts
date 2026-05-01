export interface Complex {
  re: number
  im: number
}

export function complex(re: number, im: number = 0): Complex {
  return { re, im }
}

export function cmul(a: Complex, b: Complex): Complex {
  return complex(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re)
}

export function cadd(a: Complex, b: Complex): Complex {
  return complex(a.re + b.re, a.im + b.im)
}

export function csub(a: Complex, b: Complex): Complex {
  return complex(a.re - b.re, a.im - b.im)
}

export function cneg(a: Complex): Complex {
  return complex(-a.re, -a.im)
}

export function cdot(a: Complex, b: Complex): number {
  return a.re * b.re + a.im * b.im
}

export function cnormsq(a: Complex): number {
  return cdot(a, a)
}

export function cnorm(a: Complex): number {
  return Math.sqrt(cnormsq(a))
}

export function cdiv(a: Complex, b: Complex): Complex {
  const n = cnormsq(b)
  return complex((a.re * b.re + a.im * b.im) / n, (b.re * a.im - b.im * a.re) / n)
}

export function crmul(a: Complex, b: number): Complex {
  return complex(a.re * b, a.im * b)
}

export function crdiv(a: Complex, b: number): Complex {
  return complex(a.re / b, a.im / b)
}

// csqrt has two branches: purely-imaginary axis (z.re≤0, z.im=0) avoids
// cancellation in the general formula.
export function csqrt(z: Complex): Complex {
  if (z.im === 0 && z.re <= 0) {
    return complex(0, Math.sqrt(-z.re))
  }
  const r = cnorm(z)
  const mul = Math.sqrt(r/((z.re+r)**2 + z.im**2))
  return complex((z.re+r)*mul, z.im*mul)
}

export function csqr(a: Complex): Complex {
  return cmul(a, a)
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

export function cEqualOpt(a: Complex | undefined, b: Complex | undefined) {
  if (a === undefined || b === undefined) return a === b
  return cequal(a, b)
}

export function cpow(z: Complex, exp: number) {
  const r = cnorm(z)
  const newtheta = Math.atan2(z.im, z.re)*exp
  const newr = r**exp
  return complex(newr * Math.cos(newtheta), newr * Math.sin(newtheta))
}

export type CMat = [Complex, Complex, Complex, Complex]

export function mmul(a: CMat, b: CMat): CMat {
  return [
    cadd(cmul(a[0], b[0]), cmul(a[1], b[2])),
    cadd(cmul(a[0], b[1]), cmul(a[1], b[3])),
    cadd(cmul(a[2], b[0]), cmul(a[3], b[2])),
    cadd(cmul(a[2], b[1]), cmul(a[3], b[3]))
  ]
}

export function det(a: CMat): Complex {
  return csub(cmul(a[0], a[3]), cmul(a[1], a[2]))
}

export function tr(a: CMat): Complex {
  return cadd(a[0], a[3])
}

export function mIsSingular(a: CMat): boolean {
  return cnormsq(det(a)) < 1e-20
}

export function minv(a: CMat): CMat {
  const d = det(a)
  return [cdiv(a[3], d), cdiv(cneg(a[1]), d), cdiv(cneg(a[2]), d), cdiv(a[0], d)]
}

export function mId(): CMat {
  return [complex(1, 0), complex(0, 0), complex(0, 0), complex(1, 0)]
}

// Raises a 2x2 matrix to a (possibly non-integer) power via Cayley-Hamilton:
// M^n = α·M + β·I, where with s = tr(M)/2 and μ = √(s² - det(M)) the
// eigenvalues are λ± = s ± μ and:
//   α = (λ+^n - λ-^n) / (2μ),   β = λ+^n - α·λ+
// At the parabolic limit μ → 0 the formula collapses to α = n·s^(n-1),
// β = (1−n)·s^n, handled directly to avoid 0/0.
export function mpow(m: CMat, n: number): CMat {
  const s = crdiv(tr(m), 2)
  const muSq = csub(csqr(s), det(m))
  const mu = csqrt(muSq)

  let alpha: Complex
  let beta: Complex
  if (cnormsq(mu) <= 1e-14 * cnormsq(s)) {
    alpha = crmul(cpow(s, n - 1), n)
    beta = crmul(cpow(s, n), 1 - n)
  } else {
    const lp = cpow(cadd(s, mu), n)
    const lm = cpow(csub(s, mu), n)
    alpha = cdiv(csub(lp, lm), crmul(mu, 2))
    beta = csub(lp, cmul(alpha, cadd(s, mu)))
  }

  return [
    cadd(cmul(alpha, m[0]), beta),
    cmul(alpha, m[1]),
    cmul(alpha, m[2]),
    cadd(cmul(alpha, m[3]), beta),
  ]
}

export function mIsId(a: CMat, e = 0) {
  return cIsOne(a[0], e) && cIsZero(a[1], e) && cIsZero(a[2], e) && cIsOne(a[3], e)
}

export function makedet1(m: CMat, i: number): Complex | undefined {
  if (cIsZero(m[3-i])) return undefined
  // Diagonal (i=0,3): m[i] = (m[1]*m[2] + 1) / m[3-i]
  // Anti-diagonal (i=1,2): m[i] = (m[0]*m[3] - 1) / m[3-i]
  const diag = i === 0 || i === 3
  const p = diag ? cmul(m[1], m[2]) : cmul(m[0], m[3])
  return cdiv(complex(p.re + (diag ? 1 : -1), p.im), m[3-i])
}

export interface Vec3 {
  x: number
  y: number
  z: number
}

export function vec3(x: number, y: number, z: number) {
  return { x, y, z }
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

export function vnormsq(v: Vec3): number {
  return v.x * v.x + v.y * v.y + v.z * v.z
}

export function vnorm(v: Vec3): number {
  return Math.sqrt(vnormsq(v))
}

export function vnormalize(v: Vec3): Vec3 {
  const n = vnorm(v)
  return vec3(v.x / n, v.y / n, v.z / n)
}

export function vdistsq(a: Vec3, b: Vec3): number {
  return (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2
}

export function vdist(a: Vec3, b: Vec3): number {
  return Math.sqrt(vdistsq(a, b))
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

export function quat(r: number, i: number, j: number, k: number): Quaternion {
  return { r, i, j, k }
}

export function qnormsq(a: Quaternion) {
  return a.r * a.r + a.i * a.i + a.j * a.j + a.k * a.k
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

// Returns the quaternion that rotates unit vector a to unit vector b, then
// slerped t of the way. a and b must be unit length.
export function qlerp(a: Vec3, b: Vec3, t: number): Quaternion {
  const d = vdot(a, b)
  if (d === 1) return quat(1, 0, 0, 0)
  const v = vcross(a, b)
  const half = Math.acos(d) * t / 2
  const s = Math.sin(half) / vnorm(v)
  return quat(Math.cos(half), v.x * s, v.y * s, v.z * s)
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
