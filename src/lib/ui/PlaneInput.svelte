<script lang="ts">
  import { onMount } from 'svelte'
  import { getTheme, type Theme } from '../../style/themes/themes.svelte'
  import { cadd, cEqualOpt, cequal, complex, cnormsq, crmul, csub, type Complex } from '../math/math'
  import { useAnimationTimer } from '../utils/useAnimationTimer.svelte'
  import { useDrag } from '../utils/useDrag.svelte'
  import { useShiftKey } from '../utils/useShiftKey.svelte'
  import { echoGuard } from '../utils/echoGuard.svelte'
  import { accumulator } from '../utils/accumulator.svelte'

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
  // Exponential decay constant for pos -> target interpolation (ms).
  const DECAY_MS = 90
  // Distance the cursor can stray from the locked axis before unlock.
  const SNAP_LOCK_RANGE = 0.3

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
  const anim = useAnimationTimer(dt => {
    const factor = 1 - Math.exp(-dt / DECAY_MS)
    const dz = csub(target, pos)
    if (cnormsq(dz) < 1e-4) {
      pos = target
      anim.stop()
    } else {
      pos = cadd(pos, crmul(dz, factor))
      ctrl.emit(pos)
    }
  })

  $effect(() => {
    if (!cequal(pos, target)) anim.start()
  })

  $effect(() => {
    draw(canvas, width, height, pos, getTheme())
  })

  function draw(canvas: HTMLCanvasElement, width: number, height: number, pos: Complex, theme: Theme) {
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

  // The mouse-driven world-space target, undefined when no drag is active.
  const freeTarget: Complex | undefined = $derived.by(() => {
    if (!drag.state.dragging) return undefined
    const { mouse } = drag.state
    const rect = canvas.getBoundingClientRect()
    const x = (mouse.x - rect.left) * window.devicePixelRatio
    const y = (mouse.y - rect.top) * window.devicePixelRatio
    return screenToWorld(x, y, canvas.width, canvas.height)
  })

  // Follow the larger-magnitude axis when shift is held.
  // Hold the lock as long as the mouse doesn't stray too far from the locked axis.
  const snapAxis = accumulator<'x' | 'y' | undefined>(undefined, prev => {
    if (!drag.state.dragging || !shift.down || !freeTarget) return undefined
    const start = drag.state.data.startValue
    const dx = Math.abs(freeTarget.re - start.re)
    const dy = Math.abs(freeTarget.im - start.im)
    const stillLocked = (prev === 'x' && dy <= SNAP_LOCK_RANGE) || (prev === 'y' && dx <= SNAP_LOCK_RANGE)
    return stillLocked ? prev : (dx > dy ? 'x' : 'y')
  })

  $effect(() => {
    if (!freeTarget) return
    target = snapAxis.value === 'x' ? complex(freeTarget.re, freeTarget.im)
      : snapAxis.value === 'y' ? complex(freeTarget.re, freeTarget.im)
      : freeTarget
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
    border: 2px solid var(--ui-thickBorder);
  }
  .plane-input-canvas {
    width: 100%;
    height: 100%;
    cursor: crosshair;
    touch-action: none;
  }
</style>
