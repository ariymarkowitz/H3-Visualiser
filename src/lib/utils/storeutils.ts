import type { Readable, Unsubscriber, Writable } from 'svelte/store'

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

export function onDefined<T>(store: Readable<T | undefined>, run: (value: T) => Unsubscriber | void) {
  const unsubscribe = store.subscribe((value: T | undefined) => {
    if (value !== undefined) {
      run(value)
      unsubscribe()
    }
  })
  return unsubscribe
}