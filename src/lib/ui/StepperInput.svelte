<script lang='ts'>
  import { echoGuard } from '../utils/echoGuard.svelte'
  import { validator } from '../utils/validator.svelte'

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

  const input = validator<number>({
    parse: (s, { accept, reject, emit }) => {
      if (s === '') return accept
      if (!/^(0|[1-9]\d*)$/.test(s)) return reject
      const n = Number(s)
      if (n > max) return reject
      return n >= min ? emit(n) : accept
    },
    onEmit: n => ctrl.emit(n),
  })

  const ctrl = echoGuard<number>({
    read: () => value,
    write: v => { value = v },
    equal: (a, b) => a === b,
    sync: v => input.set(v.toString()),
  })

  function step(direction: 1 | -1) {
    const n = value + direction
    if (n >= min && n <= max) ctrl.emit(n)
  }
</script>

<div class='number-input'>
  <input type='text' bind:value={input.text} oninput={input.onInput}/>
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