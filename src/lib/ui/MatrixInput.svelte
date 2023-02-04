<script lang="ts" context="module">
  export interface MatrixInputEvent {
    target: ComplexInput
    state?: Complex
  }
</script>

<script lang="ts">
  import type { CMat, Complex } from '$lib/math/complex'
  import { createEventDispatcher } from 'svelte'
  import ComplexInput from './ComplexInput.svelte'

  let state00Elt: ComplexInput
  let state01Elt: ComplexInput
  let state10Elt: ComplexInput
  let state11Elt: ComplexInput

  $: stateElts = [state00Elt, state01Elt, state10Elt, state11Elt]

  export let state: CMat | undefined = undefined
  let state00: Complex | undefined
  let state01: Complex | undefined
  let state10: Complex | undefined
  let state11: Complex | undefined

  export function setField(index: number, value: Complex) {
    stateElts[index].setState(value)
  }

  const dispatch = createEventDispatcher()
  function focus(i: number) {
    dispatch('focus', {
      target: stateElts[i],
      state: state ? state[i] : undefined
    } as MatrixInputEvent)
  }

  $: if (state00 && state01 && state10 && state11) {
    state = [state00, state01, state10, state11]
  } else {
    state = undefined
  }
</script>

<div class="matrix-input-container">
  <div class="matrix-input">
    <ComplexInput bind:this={state00Elt} bind:state={state00} on:focus={() => focus(0)} />
    <ComplexInput bind:this={state01Elt} bind:state={state01} on:focus={() => focus(1)} />
    <ComplexInput bind:this={state10Elt} bind:state={state10} on:focus={() => focus(2)} />
    <ComplexInput bind:this={state11Elt} bind:state={state11} on:focus={() => focus(3)} />
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