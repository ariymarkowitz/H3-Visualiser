<script lang="ts" module>
  const partialMatch = /^\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?)?\s*([+-]?\s*(\d+(\.\d*)?|\.\d+)?i?)?\s*$/
  const fullMatch = /^\s*(((?<re_sign>[+-])?\s*(?<re>\d+(\.\d*)?|\.\d+))\s*((?<im_sign>[+-])\s*(?<im>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag>i))?|(?<im_sign2>[+-]?)?\s*(?<im2>\d+(\.\d*)?|\.\d+)?\s*(?<has_imag2>i))\s*$/
</script>

<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import { cIsZero, cEqualOpt, complex, type Complex } from '../math/math'
  import { echoGuard } from '../utils/echoGuard.svelte'
  import { validator } from '../utils/validator.svelte'

  type ComplexInputProps = Omit<HTMLInputAttributes, 'value' | 'type'> & {
    value?: Complex
  }

  let { value = $bindable(complex(0)), ...rest }: ComplexInputProps = $props()

  // Apply optional sign to optional magnitude; missing magnitude means 1
  // (so e.g. "+i" parses as +1*i).
  function signed(sign: string | undefined, mag: string | undefined): number {
    const s = sign === '-' ? -1 : 1
    return mag ? s * parseFloat(mag) : s
  }

  function parse(input: string): Complex {
    if (input === '') return complex(0)
    const matches = fullMatch.exec(input)
    if (!matches || !matches.groups) return complex(0)
    const g = matches.groups
    if (g.re) {
      const re = signed(g.re_sign, g.re)
      return g.has_imag ? complex(re, signed(g.im_sign, g.im)) : complex(re)
    }
    if (g.has_imag2) return complex(0, signed(g.im_sign2, g.im2))
    return complex(0)
  }

  function formatShort(n: number) {
    const precision = Math.min(2, n.toString().split(".")[1]?.length || 0)
    return n.toFixed(precision);
  }

  function toString(z: Complex) {
    if (cIsZero(z)) return `0`
    if (z.re === 0) return `${formatShort(z.im)}i`
    if (z.im === 0) return formatShort(z.re)
    return `${formatShort(z.re)}${z.im >= 0 ? '+' : '-'}${formatShort(Math.abs(z.im))}i`
  }

  const input = validator<Complex>({
    parse: (s, { reject, emit }) => {
      if (s !== '' && !partialMatch.test(s)) return reject
      return emit(parse(s))
    },
    onEmit: c => ctrl.emit(c),
  })

  const ctrl = echoGuard({
    read: () => value,
    write: v => { value = v },
    equal: cEqualOpt,
    sync: v => input.set(v === undefined ? '' : toString(v)),
  })
</script>

<input type='text' bind:value={input.text} oninput={input.validate} {...rest} />
