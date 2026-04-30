<script lang='ts'>
  type StepperInputProps = Partial<{
    min: number
    max: number
    init: number
    onchange: (value: number) => void
  }>

  let {
    min = 1,
    max = 100,
    init = min,
    onchange = _ => {}
  }: StepperInputProps = $props()

  let value: string = $state(init.toString())
  let prevInput: string = $state(init.toString())
  let numericValue: number = $state(init)

  function step(direction: 1 | -1) {
    const n = numericValue + direction
    if (n < min || n > max) return
    numericValue = n
    value = n.toString()
    onchange(n)
  }

  function onInput() {
    if (!isValidInput(value)) {
      value = prevInput
      return
    }
    prevInput = value
    if (value !== '') {
      const n = Number(value)
      if (n >= min && n <= max) {
        numericValue = n
        onchange(n)
      }
    }
  }

  function isValidInput(input: string) {
    if (input === '') return true
    if (!/^(0|[1-9]\d*)$/.test(input)) return false
    const n = Number(input)
    return n <= max
  }
</script>

<div class='number-input'>
  <input type='text' bind:value oninput={onInput}/>
  <div class='number-input-buttons'>
    <button type="button" aria-label="Increment" class='number-input-up' onclick={() => step(1)}><i></i></button>
    <button type="button" aria-label="Decrement" class='number-input-down' onclick={() => step(-1)}><i></i></button>
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