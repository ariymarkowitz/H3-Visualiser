import { mId, type CMat } from './math/math'

const KEYS = [{ m: 'a', show: 'showa' }, { m: 'b', show: 'showb' }] as const

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
    const m = parseMatrixParam(params.get(KEYS[i].m))
    if (m) {
      matrices[i] = m
      showIso[i] = params.get(KEYS[i].show) === '1'
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
    params.append(KEYS[i].m, state.matrices[i].flatMap(z => [z.re, z.im]).join(' '))
    params.append(KEYS[i].show, '1')
  }
  const url = new URL(window.location.href)
  return `${url.origin}${url.pathname}?${params}`
}
