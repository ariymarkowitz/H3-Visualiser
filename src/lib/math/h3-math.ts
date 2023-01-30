import * as THREE from 'three'
import { cadd, cdiv, cmplx, cmul, crmul, csub, cnorm, type CMat, type Complex, cnormsq, cdot, type Vec3, vadd2, vnormsq, vsub2, vclone, vsumsq, vdistsq, vrdiv, vadd, vrmult2, vnorm, vec3, type Quaternion, quat, qdiv, qnormsq } from './complex'

export function cmplxToQuat(c: Complex): Quaternion {
  return quat(c.re, c.im, 0, 0)
}

export function mobius(m: CMat): Quaternion {
  return qdiv(quat(m[1].re, m[1].im, m[0].re, m[0].im), quat(m[3].re, m[3].im, m[2].re, m[2].im))
}

export function toBall(z: Quaternion): Vec3 {
  const n = z.r*z.r + z.i*z.i
  const t = z.j*z.j + z.k*z.k

  const norm = n + t + 2*Math.sqrt(t) + 1
  return vec3(z.r*2/norm, -z.i*2/norm, (n + t - 1)/norm)
}

export function toBallCmplx(z: Complex): Vec3 {
  const zsq = cnormsq(z)
  const n = zsq+1
  return vec3(z.re*2/n, -z.im*2/n, (zsq-1)/n)
}

export function endsOfGeodesic(a: Quaternion, b: Quaternion): [Complex, Complex] {
  const m = (qnormsq(a) - qnormsq(b))/2
  const aCmplx = cmplx(a.r, a.i)
  const d = cmplx(a.r-b.r, a.i-b.i)
  const d_normsq = cnormsq(d)
  const d_dot_a = cdot(d, aCmplx)

  const t = (m - d_dot_a)/d_normsq
  const center = cadd(crmul(d, t), aCmplx)

  const radius = Math.sqrt((a.r - center.re)**2 + (a.i - center.im)**2 + a.j**2 + a.k**2)
  const endDif = crmul(d, radius / (cnorm(d)))
  const end1 = cadd(center, endDif)
  const end2 = csub(center, endDif)
  
  return [end1, end2]
}

export function quatToVec3Norm(z: Quaternion): Vec3 {
  return vec3(z.r, z.i, Math.sqrt(z.j**2 + z.k**2))
}

export function geodesic(a: Quaternion, b: Quaternion, divisions: number, arr: number[]): void {
  // Find the center in the ball model.
  const [end1, end2] = endsOfGeodesic(a, b)
  const x = toBallCmplx(end1)
  const y = toBallCmplx(end2)

  const mid = vadd2(x, y)
  if (vnormsq(mid) < 1e-10) {
    const p1 = toBall(a)
    const p2 = toBall(b)

    const dif = vrdiv(vsub2(p2,p1), divisions-1)

    arr.push(p1.x, p1.y, p1.z)
    const current = vclone(p1)
    for (let i = 1; i < divisions-1; i++) {
      vadd(current, dif)
      arr.push(current.x, current.y, current.z, current.x, current.y, current.z)
    }
    arr.push(p2.x, p2.y, p2.z)

    return
  }

  const t = vsumsq(x, y)/vdistsq(x, y)
  const center = vrmult2(mid, (1+t)/2)

  // Convert points to vectors.
  const p1 = toBall(a)
  const p2 = toBall(b)
  const c = center

  const rel1 = vsub2(p1, c)
  const rel2 = vsub2(p2, c)

  // Compute interpolation of points.
  const n1 = vnorm(rel1)
  const n2 = vnorm(rel2)
  const rn1 = new THREE.Vector3(rel1.x/n1, rel1.y/n1, rel1.z/n1)
  const rn2 = new THREE.Vector3(rel2.x/n2, rel2.y/n2, rel2.z/n2)

  const interp = new THREE.Quaternion().setFromUnitVectors(rn1, rn2)
  interp.slerp(new THREE.Quaternion().identity(), 1-(1 / (divisions - 1)))

  arr.push(p1.x, p1.y, p1.z)
  const current = new THREE.Vector3(rel1.x, rel1.y, rel1.z)
  for (let i = 1; i < divisions-1; i++) {
    current.applyQuaternion(interp)
    const x = current.x + c.x
    const y = current.y + c.y
    const z = current.z + c.z
    arr.push(x, y, z, x, y, z)
  }
  arr.push(p2.x, p2.y, p2.z)
}