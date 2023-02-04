<script lang="ts">
  import { onMount } from 'svelte'
  export let text: string

  let katex: typeof import('katex').default

  onMount(async () => {
    katex = await (await import('katex')).default
  })

  let element: HTMLElement
  $: if (element && katex) katex.render(text, element)
</script>

<span class="latex" bind:this={element} />

<style lang="scss">
  .latex {
    color: var(--thickBorderColor);
  }
</style>