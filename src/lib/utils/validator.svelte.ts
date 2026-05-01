export type ParseResult<T> =
  | { kind: 'reject' }
  | { kind: 'accept' }
  | { kind: 'emit', value: T }

type ValidatorResults = typeof results

const results = {
  reject: { kind: 'reject' } as const,
  accept: { kind: 'accept' } as const,
  emit: <T>(value: T) => ({ kind: 'emit', value }) as const
}

/**
 * A reactive text input validator.
 * 
 * The `parse` function is called whenever `validate` is fired;
 * it receives the new text and `{ reject, accept, emit }` results to return.
 * 
 * Depending on the return value of `parse`, one of three things happens:
 * - `reject`: the change is rejected and the text reverts to the last accepted value.
 * - `accept`: the change is accepted but no value is emitted.
 * - `emit(value)`: the change is accepted and `opts.onEmit(value)` is called.
 */
export function validator<T>(opts: {
  parse: (text: string, results: ValidatorResults) => ParseResult<T>,
  onEmit: (value: T) => void,
}) {
  let text = $state('')
  let acceptedText = ''

  return {
    get text() { return text },
    set text(v: string) { text = v },
    set(v: string) { text = v; acceptedText = v },
    validate(): void {
      const r = opts.parse(text, results)
      if (r.kind === 'reject') { text = acceptedText; return }
      acceptedText = text
      if (r.kind === 'emit') {
        opts.onEmit(r.value)
      }
    },
  }
}
