<script lang="ts" context="module">
  export interface MatrixInputEvent {
    target: ComplexInput
    state?: Complex
  }
</script>

<script lang="ts">
  import { complex, makedet1, type CMat, type Complex } from '$lib/math/math'
  import { createEventDispatcher } from 'svelte'
  import ComplexInput from './ComplexInput.svelte'

  const entryElements: ComplexInput[] = new Array(4)
  const entries: (Complex | undefined)[] = new Array(4)

  export let state: CMat | undefined = undefined
  $: state = entries.every(Boolean) ? entries as CMat : undefined

  export function setEntries(entries: CMat) {
    entryElements.forEach((elt, i) => elt.setState(entries[i]))
  }

  const dispatch = createEventDispatcher()
  function focus(i: number) {
    dispatch('focus', {
      target: entryElements[i],
      state: state ? state[i] : undefined
    } as MatrixInputEvent)
  }

  function keydown(i: number, e: Event) {
    const key = (e as KeyboardEvent).key
    if (key === 'd') {
      fillWithDet1(i)
    }
  }

  function fillWithDet1(i: number) {
    const sanitised = entries.map(z => z || complex(0)) as CMat
    const result = makedet1(sanitised, i)
    if (result) entryElements[i].setState(result)
  }
</script>

<div class="matrix-input-container">
  <div class="matrix-input">
    {#each [0, 1, 2, 3] as i}
      <ComplexInput
      bind:this={entryElements[i]}
      bind:state={entries[i]}
      on:focus={() => focus(i)}
      on:keydown={(e) => keydown(i, e)}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .matrix-input-container {
    display: flex;
    gap: 0.5em;
    align-items: center;
  }
  
  .matrix-input {
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3px;
    width: 170px;
    height: 80px;

    :global(input) {
        background: none;
        color: inherit;
        border: 1px dashed var(--borderColor);
        padding: 2px;
        text-align: center;
      }

    :global(input:focus) {
      border-color: var(--focusBorderColor);
    }
  }
</style>