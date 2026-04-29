<script lang="ts" module>
  const partialMatch = /^\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?)?\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?i?)?\s*$/
  const fullMatch = /^\s*(((?<re_sign>[+-])?\s*(?<re>\d+(\.\d*)?|\.\d+))\s*((?<im_sign>[+-])\s*(?<im>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag>i))?|(?<im_sign2>[+-]?)?\s*(?<im2>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag2>i))\s*$/
</script>

<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import { cIsZero, cEqualOpt, complex, type Complex } from '../math/math'
  import { echoGuard } from '../utils/echoGuard.svelte'

  type ComplexInputProps = Omit<HTMLInputAttributes, 'value' | 'type'> & {
    value?: Complex
  }

  let { value = $bindable(complex(0)), ...rest }: ComplexInputProps = $props()
  let text: string = $state('')
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

  function parseFloatShort(n: number) {
    const precision = Math.min(2, n.toString().split(".")[1]?.length || 0)
    return n.toFixed(precision);
  }

  function toString(z: Complex) {
    if (cIsZero(z)) return `0`
    if (z.re === 0) return `${parseFloatShort(z.im)}i`
    if (z.im === 0) return parseFloatShort(z.re)
    return `${parseFloatShort(z.re)}${z.im >= 0 ? '+' : '-'}${parseFloatShort(Math.abs(z.im))}i`
  }

  const ctrl = echoGuard({
    read: () => value,
    write: v => { value = v },
    equal: cEqualOpt,
    sync: v => {
      text = v === undefined ? '' : toString(v)
      prevInput = text
    },
  })

  function onInput() {
    if (!isValidInput(text)) {
      text = prevInput
      return
    }
    prevInput = text
    ctrl.emit(parse(text))
  }
</script>

<input type='text' bind:value={text} oninput={onInput} {...rest} />
