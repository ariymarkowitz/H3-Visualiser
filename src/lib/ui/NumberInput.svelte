<script lang="ts" context="module">
  export type ChangeEvent = CustomEvent<{ state: number }>
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let min = 1
  export let max = 100
  export let valid: (n: number) => boolean = () => true
  export let init = min

  // The numeric state of the field.
  export let state: number = init
  // The value displayed in the field.
  export let value: string = init.toString()

  // The value used by the increment buttons.
  let incrementState: number = state
  let input: string

  export const set = (n: number) => {
    if (state !== n) {
      dispatch('change', {
        state: n
      })
      state = n
      value = n.toString()
    }
  }

  function setRaw(v: string): boolean {
    if (isValidInput(v)) {
      value = v
      if (isValidValue(v)) {
        dispatch('change', {
          state: Number(v)
        })
        state = Number(v)
      }
      return true
    } else {
      return false
    }
  }

  $: input = value
  // Update `incrementvalue` if `display` is nonempty.
  // Update `value` if `incrementValue` is valid.
  $: if (value !== '') {
    incrementState = Number(value)
  }

  function increment() {
    for (let i = incrementState + 1; i <= max; i++) {
      if (valid(i)) {
        set(i)
        return
      }
    }
  }

  function decrement() {
    for (let i = incrementState - 1; i >= min; i--) {
      if (valid(i)) {
        set(i)
        return
      }
    }
  }

  function validateInput(e: any) {
    const input = e.target.value
    if (!setRaw(input)) {
      e.target.value = value
    }
  }

  function isValidInput(input: string) {
    if (input === '') return true
    if (/^(0|[1-9]\d*)$/.test(input)) {
      const intInput = Number(input)
      if ((min <= 0 || intInput > 0) && intInput <= max) return true
    }
    return false
  }

  function isValidValue(input: string) {
    if (input === '') return false
    const n = Number(input)
    return min <= n && max >= n && valid(n)
  }
</script>

<div class="input">
  <input type="text" bind:value={input} on:input|preventDefault={validateInput} />
  <div class="input-buttons">
    <div class="input-up" on:click={increment}><i /></div>
    <div class="input-down" on:click={decrement}><i /></div>
  </div>
</div>

<style lang="scss">
  .input {
    display: flex;
    width: 100%;
    flex-direction: row;

    input[type='text'] {
      border-radius: 4px 0 0 4px;
    }

    i {
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }

  .input-up {
    flex: 1;
    border: 1px solid var(--borderColor);
    border-left: none;

    border-radius: 0 4px 0 0;

    position: relative;

    i {
      border-width: 0 0.3em 0.3em;
      border-color: transparent transparent var(--borderColor);
      border-style: solid;
      margin: -0.2em 0 0 -0.3em;
    }

    &:hover i {
      border-color: transparent transparent var(--focusBorderColor);
    }
  }

  .input-down {
    flex: 1;
    border: 1px solid var(--borderColor);
    border-left: none;
    border-top: none;

    border-radius: 0 0 4px 0;

    position: relative;

    i {
      border-width: 0.3em 0.3em 0;
      border-color: var(--borderColor) transparent transparent;
      border-style: solid;
      margin: -0.1em 0 0 -0.3em;
    }

    &:hover i {
      border-color: var(--focusBorderColor) transparent transparent;
    }
  }

  .input-buttons {
    flex-shrink: 0;
    width: 20px;

    display: flex;
    flex-direction: column;
  }
</style>