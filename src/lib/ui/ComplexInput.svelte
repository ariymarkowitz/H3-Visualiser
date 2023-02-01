<script lang="ts">
  import { complex, type Complex } from '$lib/math/complex'
  import { createEventDispatcher } from 'svelte'

  const partialMatch: RegExp =
    /^\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?)?\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?i?)?\s*$/
  const fullMatch: RegExp =
    /^\s*(((?<re_sign>[+-])?\s*(?<re>\d+(\.\d*)?|\.\d+))\s*((?<im_sign>[+-])\s*(?<im>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag>i))?|((?<im_sign2>[+-]?)?\s*(?<im2>\d+(\.\d*)?|\.\d+))?\s*(?<has_imag2>i))\s*$/

  // The value displayed in the field.
  export let value: string = ''
  // The numeric state of the field.
  export let state: Complex = parse(value)

  export function setState(z: Complex) {
    state = z
    value = `${z.re.toFixed(2)}${z.im >= 0 ? '+' : '-'}${Math.abs(z.im).toFixed(2)}i`
  }

  let input: string
  $: input = value

  function validateInput(e: any) {
    const newInput = e.target.value
    if (isValidInput(input)) {
      value = newInput
      state = parse(value)
    } else {
      input = value
    }
  }

  function isValidInput(input: string) {
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

  const dispatch = createEventDispatcher()
  function focus() {
    dispatch('focus')
  }
</script>

<input type="text" bind:value={input} on:input|preventDefault={validateInput} on:focus={focus} />
