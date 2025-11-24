<script lang="ts" module>
  export type ComplexInputEvent = CustomEvent<Complex | undefined>
  const partialMatch = /^\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?)?\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?i?)?\s*$/
  const fullMatch = /^\s*(((?<re_sign>[+-])?\s*(?<re>\d+(\.\d*)?|\.\d+))\s*((?<im_sign>[+-])\s*(?<im>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag>i))?|(?<im_sign2>[+-]?)?\s*(?<im2>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag2>i))\s*$/
</script>

<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { cIsZero, complex, type Complex } from '../math/math'

  type ComplexInputProps = Omit<HTMLInputAttributes, 'onchange' | 'onfocus' | 'type'> & Partial<{
    onchange: (event: ComplexInputEvent) => void
    onfocus: (event: FocusEvent) => void
  }>

  let { onchange = _ => {}, onfocus = () => {}, ...rest }: ComplexInputProps = $props()
  let value: string = $state('')
  let prevInput: string = $state('')

  function isValidInput(input: string) {
    if (input === '') return true
    return partialMatch.test(input)
  }

  function parse(input: string): Complex {
    if (input === '') return complex(0)
    const matches = fullMatch.exec(input)
    if (!matches || !matches.groups) return complex(0)
    const g = matches.groups
    if (g.re) {
      const re_sign = g.re_sign === '-' ? -1 : 1
      const re = re_sign * parseFloat(g.re) || 0
      if (!g.has_imag) return complex(re)
      const im_sign = g.im_sign === '-' ? -1 : 1
      if (!g.im) return complex(re, im_sign)
      const im = im_sign * parseFloat(g.im) || 0
      return complex(re, im)
    }
    if (g.has_imag2) {
      const im_sign = g.im_sign2 === '-' ? -1 : 1
      if (!g.im2) return complex(0, im_sign)
      const im = im_sign * parseFloat(g.im2) || 0
      return complex(0, im)
    }
    return complex(0)
  }

  function onInput() {
    if (!isValidInput(value)) {
      value = prevInput
      return
    }
    prevInput = value
    const parsed = parse(value)
    if (parsed) {
      onchange(new CustomEvent('change', { detail: parsed }))
    } else {
      onchange(new CustomEvent('change', { detail: undefined }))
    }
  }

  function parseFloatShort(n: number) {
    const precision = Math.min(2, n.toString().split(".")[1]?.length || 0)
    return n.toFixed(precision);
  }

  function toString(z: Complex, precise = false) {
    const parseNumber: (n: number) => string =
      precise ? n => n.toString() : parseFloatShort
    if (cIsZero(z)) return `0`
    if (z.re === 0) return `${parseNumber(z.im)}i`
    if (z.im === 0) return parseNumber(z.re)
    return `${parseNumber(z.re)}${z.im >= 0 ? '+' : '-'}${parseNumber(Math.abs(z.im))}i`
  }

  export function set(c: Complex) {
    value = toString(c)
    prevInput = value
  }
</script>

<input type='text' bind:value oninput={onInput} onfocus={onfocus} {...rest} />