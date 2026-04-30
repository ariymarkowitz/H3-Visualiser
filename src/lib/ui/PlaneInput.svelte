<script lang="ts">
  import { onMount } from 'svelte'
  import { getTheme, type Theme } from '../../style/themes/themes.svelte'
  import { cadd, cEqualOpt, cequal, complex, cnormsq, crmul, csub, type Complex } from '../math/math'
  import { useAnimationTimer } from '../utils/useAnimationTimer.svelte'
  import { useDrag } from '../utils/useDrag.svelte'
  import { useShiftKey } from '../utils/useShiftKey.svelte'
  import { echoGuard } from '../utils/echoGuard.svelte'

  type Props = {
    value?: Complex
    onchange?: (c: Complex) => void
  }

  let { value, onchange }: Props = $props()

  let width: number = $state(0)
  let height: number = $state(0)

  let pos: Complex = $state(complex(0))
  let target: Complex = $state(complex(0))

  let canvas: HTMLCanvasElement

  function syncCanvasSize() {
    const dpr = window.devicePixelRatio || 1
    width = canvas.clientWidth * dpr
    height = canvas.clientHeight * dpr
    canvas.width = width
    canvas.height = height
  }

  const ctrl = echoGuard({
    read: () => value,
    write: v => { if (v !== undefined) onchange?.(v) },
    equal: cEqualOpt,
    sync: v => {
      pos = v ?? complex(0)
      target = v ?? complex(0)
    },
  })

  // World coordinates span [-RANGE, RANGE] in both axes.
  const RANGE = 3

  function worldToScreen(c: Complex, width: number, height: number) {
    return {
      x: ((c.re + RANGE) / (2 * RANGE)) * width,
      y: height - ((c.im + RANGE) / (2 * RANGE)) * height,
    }
  }

  function screenToWorld(x: number, y: number, width: number, height: number): Complex {
    return complex(
      (x / width) * 2 * RANGE - RANGE,
      ((height - y) / height) * 2 * RANGE - RANGE,
    )
  }

  // Animation loop to smoothly interpolate pos towards target
  let dz: Complex = $derived(csub(target, pos))

  const anim = useAnimationTimer(dt => {
    const factor = 1 - Math.exp(-dt / 90) // 90ms decay

    if (!cequal(pos, target)) ctrl.emit(pos)

    if (cnormsq(dz) < 1e-4) {
      pos = target
      anim.stop()
    } else {
      pos = cadd(pos, crmul(dz, factor))
    }

    draw(canvas, width, height, getTheme())
  })
  $effect(() => {
    // Touch reactive deps so the timer wakes when they change.
    void [canvas, width, height, getTheme(), target, dz]
    anim.start()
  })

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
    const screen = worldToScreen(pos, width, height)
    ctx.beginPath()
    ctx.fillStyle = theme.ui.textColor
    ctx.arc(screen.x, screen.y, 3 * window.devicePixelRatio, 0, 2 * Math.PI)
    ctx.fill()
  }

  const shift = useShiftKey()
  const drag = useDrag<{ startValue: Complex }>({
    onStart: () => ({ startValue: pos }),
  })

  // With shift held, the larger-magnitude axis is followed; the other is
  // pinned to its drag-start value. snapAxis persists across re-runs of the
  // effect so a shift-drag stays locked once committed.
  let snapAxis: 'x' | 'y' | undefined
  $effect(() => {
    if (!drag.state.dragging) {
      snapAxis = undefined
      return
    }
    const d = drag.state
    const rect = canvas.getBoundingClientRect()
    const x = (d.mouse.x - rect.left) * window.devicePixelRatio
    const y = (d.mouse.y - rect.top) * window.devicePixelRatio
    const freeTarget = screenToWorld(x, y, canvas.width, canvas.height)

    if (!shift.down) {
      snapAxis = undefined
      target = freeTarget
      return
    }

    const dx = Math.abs(freeTarget.re - d.data.startValue.re)
    const dy = Math.abs(freeTarget.im - d.data.startValue.im)
    if (snapAxis === 'x' && dy > 0.3) snapAxis = undefined
    if (snapAxis === 'y' && dx > 0.3) snapAxis = undefined
    if (!snapAxis) snapAxis = dx > dy ? 'x' : 'y'

    target = snapAxis === 'x'
      ? complex(freeTarget.re, d.data.startValue.im)
      : complex(d.data.startValue.re, freeTarget.im)
  })

  onMount(() => {
    syncCanvasSize()
    const resizeObserver = new ResizeObserver(syncCanvasSize)
    resizeObserver.observe(canvas, {box: 'device-pixel-content-box'})
    return () => resizeObserver.disconnect()
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
