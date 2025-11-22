import { onCleanup } from 'runed'

export type AnimationTimer = Readonly<{
    start: () => void;
    stop: () => void;
}>

/**
 * A utility function to manage animation timing using requestAnimationFrame.
 * It calls a provided callback with the time delta between frames.
 * It self-cleans up when the effect scope is destroyed.
 */

export function useAnimationTimer(callback: (deltaTime: number) => void = () => {}): AnimationTimer {
  let lastFrameTime: number | undefined
  let frameRequestId: number | undefined

  const tick = (currentTime: number) => {
    frameRequestId = requestAnimationFrame(tick)

    const previousTime = lastFrameTime
    lastFrameTime = currentTime
    
    if (previousTime === undefined) return
    const deltaTime = currentTime - previousTime
    if (deltaTime >= 0) {
      callback(deltaTime)
    }
  }

  const stop = () => {
    if (frameRequestId === undefined) return
    cancelAnimationFrame(frameRequestId)
    frameRequestId = undefined
    lastFrameTime = undefined
  }

  const start = () => {
    if (frameRequestId !== undefined) return
    tick(performance.now())
  }

  onCleanup(stop)

  return Object.freeze({ start, stop })
}
