<script lang="ts" module>
  import { type CMat } from '../math/math'
  import ComplexInput from './ComplexInput.svelte'
</script>

<script lang="ts">
  type MatrixInputProps = {
    value: CMat
    onfocus?: (index: number | undefined) => void
    onkeydown?: (e: { index: number, key: string }) => void
  }
  let { value = $bindable(), onfocus = _ => {}, onkeydown = _ => {} }: MatrixInputProps = $props()
</script>

<div class="matrix-input-container">
  <div class="matrix-bracket"></div>
  <div class="matrix-input">
    {#each [0, 1, 2, 3] as i}
      <ComplexInput
        bind:value={value[i]}
        onfocus={() => onfocus(i)}
        onkeydown={e => onkeydown({ index: i, key: e.key })}
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
