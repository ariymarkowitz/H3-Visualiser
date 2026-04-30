import { useEventListener } from 'runed'

export type Point = {
  x: number
  y: number
}

export type DragState<S> =
  | { dragging: false }
  | { dragging: true; mouse: Point; data: S }

export type UseDragOptions<S> = {
  onStart: (e: MouseEvent) => S
}

// `data: S` is treated as scoped storage, not a reactive surface: only the
// `state` reference itself is tracked, so callers may mutate fields inside
// `data` without forming read-write loops in their own effects.
export function useDrag<S>(opts: UseDragOptions<S>) {
  let state: DragState<S> = $state.raw({ dragging: false })

  useEventListener(window, 'mousemove', (e: MouseEvent) => {
    if (!state.dragging) return
    state = { ...state, mouse: { x: e.clientX, y: e.clientY } }
  })
  useEventListener(window, 'mouseup', () => {
    if (state.dragging) state = { dragging: false }
  })

  function start(e: MouseEvent) {
    state = {
      dragging: true,
      mouse: { x: e.clientX, y: e.clientY },
      data: opts.onStart(e),
    }
  }

  return {
    get state() { return state },
    start,
  }
}
