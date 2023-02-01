<script lang='ts'>
import type { CMat, Complex } from "$lib/math/complex"
import RealInput from "./ComplexInput.svelte";

export let state: CMat | undefined = undefined
let state00: Complex | undefined
let state01: Complex | undefined
let state10: Complex | undefined
let state11: Complex | undefined

$: if (state00 && state01 && state10 && state11) {
  state = [state00, state01, state10, state11]
} else {
  state = undefined
}
</script>

<div class='matrix-input-container'>
  <div class="matrix-input">
    <RealInput bind:state={state00}/>
    <RealInput bind:state={state01}/>
    <RealInput bind:state={state10}/>
    <RealInput bind:state={state11}/>
  </div>
</div>