import { untrack } from 'svelte'

/**
 * A reactive fold-over-time. The `update` function is re-run whenever any
 * reactive source it reads changes; it receives the previous accumulator
 * value as its parameter and returns the next one.
 */
export function accumulator<T>(initial: T, update: (prev: T) => T): { readonly value: T } {
  let value = $state.raw(initial)
  $effect(() => {
    const prev = untrack(() => value)
    value = update(prev)
  })
  return {
    get value() { return value }
  }
}
