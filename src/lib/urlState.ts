import { mId, type CMat } from './math/math'

const matrixKey = (i: number) => i === 0 ? 'a' : 'b'
const showKey = (i: number) => i === 0 ? 'showa' : 'showb'

export interface UrlState {
  depth: number
  matrices: [CMat, CMat]
  showIso: boolean[]
}

function parseMatrixParam(raw: string | null): CMat | undefined {
  if (!raw) return undefined
  const list = raw.split(' ').map(Number)
  if (list.length !== 8 || !list.every(Number.isFinite)) return undefined
  return Array.from({length: 4}, (_, i) => ({re: list[2*i], im: list[2*i+1]})) as CMat
}

export function parseInitialState(): UrlState {
  const params = new URLSearchParams(window.location.search)
  const d = Number(params.get('d'))
  const matrices: [CMat, CMat] = [mId(), mId()]
  const showIso = [false, false]
  for (let i = 0; i < 2; i++) {
    const m = parseMatrixParam(params.get(matrixKey(i)))
    if (m) {
      matrices[i] = m
      showIso[i] = params.get(showKey(i)) === '1'
    }
  }
  return {
    depth: Number.isInteger(d) && d >= 1 ? d : 10,
    matrices,
    showIso,
  }
}

export function serializeState(state: UrlState): string {
  const params = new URLSearchParams()
  params.append('d', state.depth.toString())
  for (let i = 0; i < 2; i++) {
    if (!state.showIso[i]) continue
    params.append(matrixKey(i), state.matrices[i].flatMap(z => [z.re, z.im]).join(' '))
    params.append(showKey(i), '1')
  }
  const url = new URL(window.location.href)
  return `${url.origin}${url.pathname}?${params}`
}
