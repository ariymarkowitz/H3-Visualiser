<script lang="ts" context="module">
  export interface Point {
    x: number
    y: number
  }
</script>

<script lang="ts">
  import { browser } from '$app/environment'
  import { createEventDispatcher, onMount } from 'svelte'
  import { writable, type Updater } from 'svelte/store'

  const dispatch = createEventDispatcher()

  let point: HTMLElement
  let container: HTMLElement

  function width() {
    return browser && container ? container.offsetWidth : 100
  }
  function height() {
    return browser && container ? container.offsetHeight : 100
  }

  let _pos = writable<Point>({ x: 0, y: 0 })
  let _target = writable<Point>({ x: 0, y: 0 })

  export const pos = {
    set(value: Point, smooth = false) {
      if (!smooth) $_pos = value
      $_target = value
    },
    subscribe: _pos.subscribe,
    update(updater: Updater<Point>, smooth = false) {
      _pos.update((value) => {
        const newValue = updater(value)
        if (!smooth) $_target = newValue
        return newValue
      })
    }
  }

  let _t: number | undefined
  let _f: number
  $: {
    if ($_pos.x == $_target.x && $_pos.y == $_target.y) {
      _t = undefined
    } else {
      cancelAnimationFrame(_f)
      _f = requestAnimationFrame((t) => updatePos(t))
    }
  }
  function updatePos(t: number) {
    if (_t === undefined) {
      requestAnimationFrame(updatePos)
      _t = t
      return
    }
    const s = Math.exp(-(t - _t) / 100)
    _pos.update(({ x, y }) => {
      const newPos = {
        x: s * x + (1 - s) * $_target.x,
        y: s * y + (1 - s) * $_target.y
      }
      if (Math.abs(newPos.x - $_target.x) < 1e-4) newPos.x = $_target.x
      if (Math.abs(newPos.y - $_target.y) < 1e-4) newPos.y = $_target.y
      dispatch('change', newPos)
      return newPos
    })
    _t = t
  }

  function posToRaw(p: Point) {
    return {
      x: (p.x / 6 + 1 / 2) * width(),
      y: (-p.y / 6 + 1 / 2) * height()
    }
  }

  function rawToPos(p: Point) {
    return {
      x: 6 * (p.x / width() - 1 / 2),
      y: -6 * (p.y / height() - 1 / 2)
    }
  }

  let mousedown = false

  function handlemousedown(e: MouseEvent) {
    mousedown = true
    handlemouse(e)
  }

  function handlemouseup() {
    mousedown = false
  }

  function handlemouse(e: MouseEvent) {
    if (!mousedown) return
    pos.set(rawToPos({ x: e.offsetX, y: e.offsetY }), true)
  }

  $: if (browser && point) {
    const { x, y } = posToRaw($pos)
    point.style.left = `${x - 2}px`
    point.style.top = `${y - 2}px`
  }

  onMount(() => {
    document.addEventListener('mouseup', handlemouseup)
    return () => {
      document.removeEventListener('mouseup', handlemouseup)
    }
  })
</script>

<div
  class="plane-input"
  bind:this={container}
  on:mousedown={handlemousedown}
  on:mousemove={handlemouse}
>
  <div class="plane-input-point" bind:this={point} />
</div>

<style lang="scss">
  .plane-input {
    width: 270px;
    height: 270px;

    border: 2px solid var(--thickBorderColor);
    position: relative;

    .plane-input-point {
      width: 4px;
      height: 4px;
      background-color: var(--thickBorderColor);
      position: absolute;
      pointer-events: none;
    }
  }
</style>
