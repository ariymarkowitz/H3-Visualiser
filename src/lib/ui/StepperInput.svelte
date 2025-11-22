<script lang='ts'>
  export type StepperInputEvent = CustomEvent<number>
  
  type StepperInputProps = Partial<{
    min: number
    max: number
    init: number
    valid: (n: number) => boolean
    onchange: (e: StepperInputEvent) => void
  }>

  let {
    min = 1,
    max = 100,
    init = min,
    valid = _ => true,
    onchange = _ => {}
  }: StepperInputProps = $props()

  let value: string = $state(init.toString())
  let prevInput: string = $state(init.toString())
  let numericValue: number = $state(init)

  export const set = (n: number): boolean => {
    if (n !== numericValue) {
      numericValue = n
      value = n.toString()
      return true
    }
    return false
  }

  function setInternal(n: number) {
    if (set(n)) {
      onchange(new CustomEvent('change', { detail: n }));
    }
  }
  
  function increment() {
    for (let i = numericValue + 1; i <= max; i++) {
      if (valid(i)) {
        setInternal(i)
        return
      }
    }
  }

  function decrement() {
    for (let i = numericValue - 1; i >= min; i--) {
      if (valid(i)) {
        setInternal(i)
        return
      }
    }
  }

  function onInput() {
    if (!isValidInput(value)) {
      value = prevInput
      return
    }
    prevInput = value
    if (isValidValue(value)) {
      numericValue = Number(value)
      onchange(new CustomEvent('change', { detail: numericValue }));
    }
  }

  function isValidInput(input: string) {
    if (input === '') return true
    if (/^(0|[1-9]\d*)$/.test(input)) {
      const intInput = Number(input)
      if ((min <= 0 || intInput > 0 ) && intInput <= max) return true
    }
    return false
  }

  function isValidValue(input: string) {
    if (input === '') return false
    const n = Number(input)
    return min <= n && max >= n && valid(n)
  }
</script>

<div class='number-input'>
  <input type='text' bind:value oninput={onInput}/>
  <div class='number-input-buttons'>
    <button type="button" aria-label="Increment" class='number-input-up' onclick={increment}><i></i></button>
    <button type="button" aria-label="Decrement" class='number-input-down' onclick={decrement}><i></i></button>
  </div>
</div>

<style>
  .number-input {
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

  .number-input-up {
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

  .number-input-down {
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

  .number-input-buttons {
    flex-shrink: 0;
    width: 20px;

    display: flex;
    flex-direction: column;

    button {
      padding: 0;
    }
  }
</style>