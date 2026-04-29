<script lang="ts">
  import { onMount, untrack } from 'svelte'
  import { getTheme, type Theme } from '../../style/themes/themes.svelte'
  import { cadd, cequal, cnormsq, complex, crmul, csub, type Complex } from '../math/math'
  import { useAnimationTimer } from '../utils/useAnimationTimer.svelte'
  import { useDrag } from '../utils/useDrag.svelte'
  import { useShiftKey } from '../utils/useShiftKey.svelte'

  type Props = {
    onchange?: (c: Complex) => void
  }

  let { onchange = () => {} }: Props = $props()

  let width: number = $state(0)
  let height: number = $state(0)

  let value: Complex = $state(complex(0))
  let targetValue: Complex = $state(complex(0))

  let canvas: HTMLCanvasElement
  $effect(() => {
    const dpr = window.devicePixelRatio || 1
    width = canvas.clientWidth * dpr
    height = canvas.clientHeight * dpr
  })
  $effect(() => {
    canvas.width = width
    canvas.height = height
  })

  export function setValue(c: Complex) {
    value = c
    targetValue = c
  }

  const MIN_X = -3
  const MAX_X = 3
  const MIN_Y = -3
  const MAX_Y = 3

  function worldToScreen(c: Complex, width: number, height: number) {
    const x = ((c.re - MIN_X) / (MAX_X - MIN_X)) * width
    const y = height - ((c.im - MIN_Y) / (MAX_Y - MIN_Y)) * height
    return { x, y }
  }

  function screenToWorld(x: number, y: number, width: number, height: number): Complex {
    const re = (x / width) * (MAX_X - MIN_X) + MIN_X
    const im = ((height - y) / height) * (MAX_Y - MIN_Y) + MIN_Y
    return complex(re, im)
  }

  // Animation loop to smoothly interpolate value towards targetValue
  let params: [HTMLCanvasElement, number, number, Theme, Complex, Complex]
  let dz: Complex = $derived(csub(targetValue, value))

  const anim = useAnimationTimer(dt => update(dt, params))
  $effect(() => {
    params = [canvas, width, height, getTheme(), targetValue, dz]
    anim.start()
  })

  function update(
    dt: number,
    [canvas, width, height, theme, targetValue, dz]: typeof params
  ) {
    const decay = 90 // milliseconds
    const factor = 1 - Math.exp(-dt / decay)

    if (!cequal(value, targetValue)) {
      onchange(value)
    }

    if (cnormsq(dz) < 1e-4) {
      value = targetValue
      anim.stop()
    } else {
      value = cadd(value, crmul(dz, factor))
    }

    draw(canvas, width, height, theme)
  }

  function draw(canvas: HTMLCanvasElement, width: number, height: number, theme: Theme) {
    const ctx = canvas.getContext('2d')
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, width, height)

    // Draw axes
    const origin = worldToScreen(complex(0, 0), width, height)

    ctx.beginPath()
    ctx.strokeStyle = theme.ui.lightBorder
    ctx.lineWidth = 1 * window.devicePixelRatio

    // X axis
    ctx.moveTo(0, origin.y)
    ctx.lineTo(width, origin.y)

    // Y axis
    ctx.moveTo(origin.x, 0)
    ctx.lineTo(origin.x, height)
    ctx.stroke()

    // Draw dot
    const pos = worldToScreen(value, width, height)
    ctx.beginPath()
    ctx.fillStyle = theme.ui.textColor
    ctx.arc(pos.x, pos.y, 3 * window.devicePixelRatio, 0, 2 * Math.PI)
    ctx.fill()
  }

  const shift = useShiftKey()
  const drag = useDrag<{ startValue: Complex }>({
    onStart: () => ({ startValue: value }),
  })

  $effect(() => {
    if (!drag.state.dragging) return
    const d = drag.state // TypeScript type narrowing

    const freeTarget = $derived.by(() => {
      const rect = canvas.getBoundingClientRect()
      const x = (d.mouse.x - rect.left) * window.devicePixelRatio
      const y = (d.mouse.y - rect.top) * window.devicePixelRatio
      return screenToWorld(x, y, canvas.width, canvas.height)
    })

    // Which axis is locked during a shift-drag: updated by the effect below.
    let snapAxis: 'x' | 'y' | undefined = $state()

    $effect(() => {
      if (shift.down) {
        let oldSnap = untrack(() => snapAxis)
        const dx = Math.abs(freeTarget.re - d.data.startValue.re)
        const dy = Math.abs(freeTarget.im - d.data.startValue.im)

        if (oldSnap === 'x' && dx > 0.3) oldSnap = undefined
        if (oldSnap === 'y' && dy > 0.3) oldSnap = undefined
        if (!oldSnap) snapAxis = dx > dy ? 'x' : 'y'
      } else {
        snapAxis = undefined
      }
    })

    const newTarget = $derived.by(() => {
      if (shift.down) {
        if (snapAxis === 'x') {
          // Horizontal movement dominant -> keep Y same as start
          return complex(freeTarget.re, d.data.startValue.im)
        } else {
          // Vertical movement dominant -> keep X same as start
          return complex(d.data.startValue.re, freeTarget.im)
        }
      } else {
        return freeTarget
      }
    })

    $effect(() => {
      targetValue = newTarget
    })
  })

  onMount(() => {
    const resizeObserver = new ResizeObserver(() => {
      const dpr = window.devicePixelRatio || 1
      width = canvas.clientWidth * dpr
      height = canvas.clientHeight * dpr
    })

    resizeObserver.observe(canvas, {box: 'device-pixel-content-box'})

    return () => {
      resizeObserver.disconnect()
    }
  })
</script>

<div class="plane-input">
<canvas class="plane-input-canvas" bind:this={canvas} onmousedown={drag.start}></canvas>
</div>

<style>
  .plane-input {
    width: 270px;
    height: 270px;
    border: 2px solid var(--thickBorderColor);
  }
  .plane-input-canvas {
    width: 100%;
    height: 100%;
    cursor: crosshair;
    touch-action: none;
  }
</style>
