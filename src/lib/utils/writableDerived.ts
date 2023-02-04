import type { Writable } from 'svelte/store'

export function writableDerived<T, U>(
  store: Writable<T>,
  convertTo: (x: T) => U,
  convertFrom: (y: U) => T
): Writable<U> {
  return {
    set(value) {
      store.set(convertFrom(value))
    },
    update(updater) {
      store.update((n) => {
        const value = updater(convertTo(n))
        return convertFrom(value)
      })
    },
    subscribe(run, invalidate) {
      return store.subscribe((value) => {
        run(convertTo(value)), invalidate
      })
    }
  }
}
