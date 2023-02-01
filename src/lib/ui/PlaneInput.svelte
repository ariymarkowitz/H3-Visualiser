<script lang="ts" context="module">
  export interface Point {
    x: number
    y: number
  }
</script>
<script lang="ts">
  import { browser } from "$app/environment"
  import { createEventDispatcher, onMount } from "svelte"
  import { writable } from "svelte/store"
  import { writableDerived } from "../utils/writableDerived"

  let point:HTMLElement
  let container:HTMLElement

  function width() {
    return browser && container ? container.offsetWidth : 100
  }
  function height() {
    return browser && container ? container.offsetHeight : 100
  }

  const rawPos = writable<Point>({x: 0, y: 0})
  const target = writable<Point>({x: 0, y: 0})
  export const pos = writableDerived<Point, Point>(
    rawPos,
    (value: Point) => ({
      x: 6*(value.x/width() - 1/2),
      y: 6*(value.y/height() - 1/2)
    }),
    (value: Point) => ({
      x: (value.x/6 + 1/2)*width(),
      y: (value.y/6 + 1/2)*height()
    }),
  )

  let mousedown: boolean = false

  function handlemousedown(e: MouseEvent) {
    mousedown = true
  }

  function handlemouseup(e: MouseEvent) {
    mousedown = false
  }

  const dispatch = createEventDispatcher()
  function handlemouse(e: MouseEvent) {
    if (!mousedown) return
    $target = {x: e.offsetX, y: e.offsetY}
    $rawPos = {x: e.offsetX, y: e.offsetY}
    dispatch('change', {
      pos: $pos
    })
  }

  $: if (browser && point) {
    point.style.left=`${$rawPos.x-2}px`
    point.style.top=`${$rawPos.y-2}px`
  }

  onMount(() => {
    document.addEventListener('mouseup', handlemouseup)
    return () => {
      document.removeEventListener('mouseup', handlemouseup)
    }
  })
</script>

<div class="plane-input" bind:this={container} on:mousedown={handlemousedown} on:mousemove={handlemouse}>
  <div class="plane-input-point" bind:this={point}></div>
</div>

<style lang="scss">
  .plane-input {
    width: 270px;
    height: 270px;

    border: 2px solid var(--borderColor);
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