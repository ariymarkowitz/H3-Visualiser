<script lang="ts">
    import { browser } from "$app/environment"
    import { onDestroy, onMount } from "svelte"


  let point:HTMLElement

  let x: number = 0
  let y: number = 0

  let mousedown: boolean = false

  function handlemousedown(e: MouseEvent) {
    mousedown = true
  }

  function handlemouseup(e: MouseEvent) {
    mousedown = false
  }

  function handlemouse(e: MouseEvent) {
    if (!mousedown) return
    x = e.offsetX
    y = e.offsetY
  }

  $: if (browser && point) {
    point.style.left=`${x-2}px`
    point.style.top=`${y-2}px`
  }

  onMount(() => {
    document.addEventListener('mouseup', handlemouseup)
    return () => {
      document.removeEventListener('mouseup', handlemouseup)
    }
  })
</script>

<div class="plane-input" on:mousedown={handlemousedown} on:mousemove={handlemouse}>
  <div class="plane-input-point" data-x={x} data-y={y} bind:this={point}></div>
</div>

<style lang="scss">
  .plane-input {
    width: 100px;
    height: 100px;

    border: 2px solid black;
    position: relative;

    .plane-input-point {
      width: 4px;
      height: 4px;
      background-color: black;
      position: absolute;
      pointer-events: none;
    }
  }
</style>