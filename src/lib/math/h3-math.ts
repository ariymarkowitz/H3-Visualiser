import Quaternion, { J } from 'quaternion'
import * as THREE from 'three'
import { cadd, cdiv, cmplx, cmul, crmul, csub, cnorm, type CMat, type Complex, cnormsq, cdot } from './complex'

export function quatToCmplx(c: Quaternion): [Complex, Complex] {
  return [cmplx(c.w, c.x), cmplx(c.y, c.z)]
}

export function cmplxToQuat(c: Complex): Quaternion {
  return new Quaternion(c.re, c.im, 0, 0)
}

export function applyMobius(z: Quaternion, matrix: CMat): Quaternion {
  const a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3]

  const quatA = cmplxToQuat(a), quatB = cmplxToQuat(b), quatC = cmplxToQuat(c), quatD = cmplxToQuat(d)
  return (quatA.mul(z).add(quatB).div(quatC.mul(z).add(quatD)))
}

export function applyMobiusComplex(z: Complex, matrix: CMat): Complex {
  const a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3]

  return cdiv(cadd(cmul(a, z), b), cadd(cmul(c, z), d))
}

export function toBall(z: Quaternion) {
  const w = new Quaternion(z.w, z.x, Math.sqrt(z.y**2+z.z**2), 0)
  return J.mul(w.sub(J)).div(w.add(J))
}

export function toBallCmplx(z: Complex) {
  const zsq = cnormsq(z)
  const n = zsq+1
  return new Quaternion(z.re*2/n, -z.im*2/n, (zsq-1)/n)
}

export function endsOfGeodesic(a: Quaternion, b: Quaternion): [Complex, Complex] {
  const m = (a.normSq() - b.normSq())/2
  const aCmplx = cmplx(a.w, a.x)
  const d = cmplx(a.w-b.w, a.x-b.x)
  const d_normsq = cnormsq(d)
  const d_dot_a = cdot(d, aCmplx)

  const t = (m - d_dot_a)/d_normsq
  const center = cadd(crmul(d, t), aCmplx)

  const radius = Math.sqrt((a.w - center.re)**2 + (a.x - center.im)**2 + a.y**2 + a.z**2)
  const endDif = crmul(d, radius / (cnorm(d)))
  const end1 = cadd(center, endDif)
  const end2 = csub(center, endDif)
  
  return [end1, end2]
}

export function quatToVec3(z: Quaternion): THREE.Vector3 {
  return new THREE.Vector3(z.w, z.x, z.y)
}

export function quatToVec3Norm(z: Quaternion): THREE.Vector3 {
  return new THREE.Vector3(z.w, z.x, Math.sqrt(z.y**2 + z.z**2))
}

export function geodesic(a: Quaternion, b: Quaternion, divisions: number, arr: number[]): void {
  // Find the center in the ball model.
  const [end1, end2] = endsOfGeodesic(a, b)
  const x = toBallCmplx(end1)
  const y = toBallCmplx(end2)

  const mid = x.add(y)
  if (mid.normSq() < 1e-10) {
    const p1 = quatToVec3(toBall(a))
    const p2 = quatToVec3(toBall(b))

    const dif = p2.clone().sub(p1).divideScalar(divisions-1)

    arr.push(p1.x, p1.y, p1.z)
    const current = p1.clone()
    for (let i = 1; i < divisions-1; i++) {
      current.add(dif)
      arr.push(current.x, current.y, current.z, current.x, current.y, current.z)
    }
    arr.push(p2.x, p2.y, p2.z)

    return
  }

  const diff = x.sub(y)
  const t = diff.div(mid).normSq()
  const center = mid.mul((1+t)/2)

  // Convert points to vectors.
  const p1 = quatToVec3(toBall(a))
  const p2 = quatToVec3(toBall(b))
  const c = quatToVec3(center)

  const rel1 = p1.clone().sub(c)
  const rel2 = p2.clone().sub(c)

  const interp = new THREE.Quaternion().setFromUnitVectors(rel1.clone().normalize(), rel2.clone().normalize())
  interp.slerp(new THREE.Quaternion().identity(), 1-(1 / (divisions - 1)))

  arr.push(p1.x, p1.y, p1.z)
  const current = rel1
  for (let i = 1; i < divisions-1; i++) {
    current.applyQuaternion(interp)
    const a = current.clone().add(c)
    arr.push(a.x, a.y, a.z, a.x, a.y, a.z)
  }
  arr.push(p2.x, p2.y, p2.z)
}