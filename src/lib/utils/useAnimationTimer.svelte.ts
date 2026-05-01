import { onCleanup } from 'runed'

/**
 * A utility function to manage animation timing using requestAnimationFrame.
 * It calls a provided callback with the time delta between frames.
 * It self-cleans up when the effect scope is destroyed.
 */
export function useAnimationTimer(callback: (deltaTime: number) => void) {
  let lastFrameTime: number | undefined
  let frameRequestId: number | undefined

  const tick = (currentTime: number) => {
    frameRequestId = requestAnimationFrame(tick)

    const previousTime = lastFrameTime
    lastFrameTime = currentTime

    if (previousTime === undefined) return
    callback(currentTime - previousTime)
  }

  const stop = () => {
    if (frameRequestId === undefined) return
    cancelAnimationFrame(frameRequestId)
    frameRequestId = undefined
  }

  const start = () => {
    if (frameRequestId !== undefined) return
    lastFrameTime = undefined
    tick(performance.now())
  }

  onCleanup(stop)

  return { start, stop }
}
