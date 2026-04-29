import { useEventListener } from 'runed'

export function useShiftKey() {
  let down = $state(false)

  useEventListener(window, 'keydown', (e: KeyboardEvent) => {
    if (e.key === 'Shift') down = true
  })
  useEventListener(window, 'keyup', (e: KeyboardEvent) => {
    if (e.key === 'Shift') down = false
  })
  useEventListener(window, ['blur', 'visibilitychange'], () => {
    down = false
  })

  return {
    get down() { return down },
  }
}
