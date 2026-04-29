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

export function useDrag<S>(opts: UseDragOptions<S>) {
  let state: DragState<S> = $state({ dragging: false })

  useEventListener(window, 'mousemove', (e: MouseEvent) => {
    if (!state.dragging) return
    state.mouse = { x: e.clientX, y: e.clientY }
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
