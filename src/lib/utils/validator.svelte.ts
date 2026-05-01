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
 * When `text` changes, the value is either:
 * - rejected (revert to last accepted text)
 * - accepted (update text but emit nothing)
 * - emitted (update text and emit a value)
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
    onInput(): void {
      const r = opts.parse(text, results)
      if (r.kind === 'reject') { text = acceptedText; return }
      acceptedText = text
      if (r.kind === 'emit') {
        opts.onEmit(r.value)
      }
    },
  }
}
