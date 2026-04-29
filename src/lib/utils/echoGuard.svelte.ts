/**
 * Bridges a two-way binding between an external value and internal state
 * without echo loops.
 *
 * An `$effect` watches `read()` and forwards changes to `sync(v)`, which
 * applies them to internal state. When the internal state changes, callers
 * use `emit(v)` to push the new value out via `write(v)`.
 *
 * The guard records the last value it emitted; when that value flows back
 * through `read()`, `equal` recognises it and `sync` is skipped, so the
 * external write does not bounce back into internal state.
 *
 * @param opts.read   Getter for the external value (tracked reactively).
 * @param opts.write  Pushes a new value outward (e.g. fires an `onchange`).
 * @param opts.equal  Equality check used to detect echoes of `emit`.
 * @param opts.sync   Update the internal state from the external value.
 * @returns An object with `emit(v)`, called when internal state changes.
 */
export function echoGuard<T>(opts: {
  read: () => T
  write: (v: T) => void
  equal: (a: T, b: T) => boolean
  sync: (v: T) => void
}) {
  let lastEmitted: T
  let initialized = false

  $effect(() => {
    const v = opts.read()
    if (initialized && opts.equal(v, lastEmitted)) return
    lastEmitted = v
    initialized = true
    opts.sync(v)
  })

  return {
    emit(v: T) {
      lastEmitted = v
      opts.write(v)
    },
  }
}
