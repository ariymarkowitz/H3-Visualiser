<script lang="ts" context="module">
  export interface MatrixInputEvent {
    target: RealInput
    state?: Complex
  }
</script>

<script lang="ts">
  import type { CMat, Complex } from '$lib/math/complex'
  import { createEventDispatcher } from 'svelte'
  import RealInput from './ComplexInput.svelte'

  let state00Elt: RealInput
  let state01Elt: RealInput
  let state10Elt: RealInput
  let state11Elt: RealInput

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
    <RealInput bind:this={state00Elt} bind:state={state00} on:focus={() => focus(0)} />
    <RealInput bind:this={state01Elt} bind:state={state01} on:focus={() => focus(1)} />
    <RealInput bind:this={state10Elt} bind:state={state10} on:focus={() => focus(2)} />
    <RealInput bind:this={state11Elt} bind:state={state11} on:focus={() => focus(3)} />
  </div>
</div>
