<script lang="ts" module>
  import { cequal, complex, type CMat, type Complex } from '../math/math';
  import ComplexInput from './ComplexInput.svelte'

  export type MatrixInputEvent = CustomEvent<{ index: number; value: Complex | undefined }>
  export type MatrixFocusEvent = CustomEvent<number | undefined>
  export type MatrixKeyEvent = CustomEvent<{ index: number; key: string }>
</script>

<script lang="ts">
  type MatrixInputProps = {
    oneltchange?: (e: MatrixInputEvent) => void
    onfocus?: (e: MatrixFocusEvent) => void
    onkeydown?: (e: MatrixKeyEvent) => void
  }
  let { oneltchange = _ => {}, onfocus = _ => {}, onkeydown = _ => {} }: MatrixInputProps = $props()
  let entryElts: ComplexInput[] = $state(new Array(4))
  let focus: number | undefined = $state()

  export const set = (mat: CMat) => {
    mat.forEach((z, i) => {
      entryElts[i].set(z)
    })
  }

  export const setEntry = (index: number, z: Complex) => {
    entryElts[index].set(z)
  }

  function keydown(i: number, e: KeyboardEvent) {
    onkeydown(new CustomEvent('keydown', { detail: { index: i, key: e.key } }))
  }
</script>

<div class="matrix-input-container">
  <div class="matrix-bracket"></div>
  <div class="matrix-input">
    {#each [0, 1, 2, 3] as _, i}
      <ComplexInput
      bind:this={entryElts[i]}
      onfocus={() => {
        focus = i
        onfocus(new CustomEvent('focus', { detail: i }))
      }}
      onblur={() => {
        if (focus === i) focus = undefined
      }}
      onchange= {e => {
        oneltchange(new CustomEvent('change', { detail: { index: i, value: e.detail } }))
      }}
      onkeydown={e => keydown(i, e)}
      />
    {/each}
  </div>
  <div class="matrix-bracket"></div>
</div>

<style>
  .matrix-input-container {
    display: flex;
    gap: 0.5em;
    align-items: center;

    /* math {
      font-size: 1.3em;
      mo[form="prefix"] {
        margin-right: -0.2em;
      }
      mo[form="postfix"] {
        margin-left: -0.2em;
      }
    } */
  }
  
  .matrix-input :global {
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3px;
    width: 170px;
    height: 80px;

    input {
        background: none;
        color: inherit;
        border: 1px dashed var(--borderColor);
        padding: 2px;
        text-align: center;
      }

    input:focus {
      border-color: var(--focusBorderColor);
    }
  }

  .matrix-bracket {
    width: 6px;
    height: 95px;
    border: 2px solid var(--thickBorderColor);
    border-radius: 1px;
    box-sizing: border-box;

    &:first-child {
      border-right: none;
      margin-right: -2px;
      margin-left: 2px;
    }
    &:last-child {
      border-left: none;
      margin-left: -2px;
      margin-right: 2px;
    }
  }
</style>