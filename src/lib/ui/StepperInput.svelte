<script lang='ts'>
  type StepperInputProps = {
    min?: number
    max?: number
    value: number
  }

  let {
    min = 1,
    max = 100,
    value = $bindable()
  }: StepperInputProps = $props()

  let text: string = $state(value.toString())
  let acceptedText: string = value.toString()

  // Sync external value changes into the input text.
  $effect(() => {
    const s = value.toString()
    if (s !== text) {
      text = s
      acceptedText = s
    }
  })

  function step(direction: 1 | -1) {
    const n = value + direction
    if (n >= min && n <= max) value = n
  }

  // Allow an initial substring of a valid number within bounds.
  function parseInput(input: string): number | null {
    if (!/^(0|[1-9]\d*)$/.test(input)) return null
    const n = Number(input)
    return n <= max ? n : null
  }

  function onInput() {
    if (text === '') {
      acceptedText = text
      return
    }
    const n = parseInput(text)
    if (n === null) {
      text = acceptedText
      return
    }
    acceptedText = text
    if (n >= min) value = n
  }
</script>

<div class='number-input'>
  <input type='text' bind:value={text} oninput={onInput}/>
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
    border: 1px solid var(--ui-border);
    border-left: none;

    border-radius: 0 4px 0 0;

    position: relative;

    i {
      border-width: 0 0.3em 0.3em;
      border-color: transparent transparent var(--ui-border);
      border-style: solid;
      margin: -0.2em 0 0 -0.3em;
    }

    &:hover i {
      border-color: transparent transparent var(--ui-focusBorder);
    }
  }

  .number-input-down {
    flex: 1;
    border: 1px solid var(--ui-border);
    border-left: none;
    border-top: none;

    border-radius: 0 0 4px 0;

    position: relative;

    i {
      border-width: 0.3em 0.3em 0;
      border-color: var(--ui-border) transparent transparent;
      border-style: solid;
      margin: -0.1em 0 0 -0.3em;
    }

    &:hover i {
      border-color: var(--ui-focusBorder) transparent transparent;
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