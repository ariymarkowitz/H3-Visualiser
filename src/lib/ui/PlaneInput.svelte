<script lang="ts">
  import { onMount, untrack } from 'svelte'
  import { getTheme, type Theme } from '../../style/themes/themes.svelte'
  import { cadd, cEqualOpt, cequal, cnormsq, complex, crmul, csub, type Complex } from '../math/math'
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
  }
  $effect(() => syncCanvasSize())
  $effect(() => {
    canvas.width = width
    canvas.height = height
  })

  const ctrl = echoGuard({
    read: () => value,
    write: v => { if (v !== undefined) onchange?.(v) },
    equal: cEqualOpt,
    sync: v => {
      pos = v ?? complex(0)
      target = v ?? complex(0)
    },
  })

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
        let currentSnap = untrack(() => snapAxis)
        const dx = Math.abs(freeTarget.re - d.data.startValue.re)
        const dy = Math.abs(freeTarget.im - d.data.startValue.im)

        if (currentSnap === 'x' && dy > 0.3) currentSnap = undefined
        if (currentSnap === 'y' && dx > 0.3) currentSnap = undefined
        if (!currentSnap) snapAxis = dx > dy ? 'x' : 'y'
      } else {
        snapAxis = undefined
      }
    })

    // With shift held, the larger-magnitude axis is followed; the other is
    // pinned to its drag-start value.
    const newTarget = $derived(
      !shift.down ? freeTarget
        : snapAxis === 'x' ? complex(freeTarget.re, d.data.startValue.im)
        : complex(d.data.startValue.re, freeTarget.im)
    )

    $effect(() => {
      target = newTarget
    })
  })

  onMount(() => {
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
