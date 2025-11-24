export type Memo<T> = {
  get: () => T
  set: (newValue: T) => void
}

export function createMemo<T>(init: T, eq: (a: T, b: T) => boolean): Memo<T> {
  let value = $state.raw(init)
  return {
    get() {
      return value
    },
    set(newValue: T) {
      if (!eq(value, newValue)) {
        value = newValue
      }
    }
  }
}