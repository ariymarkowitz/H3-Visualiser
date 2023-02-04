<script lang="ts">
  import { browser } from '$app/environment'
  import { complex, mIsSingular, type CMat, type Complex } from '$lib/math/complex'
  import type ComplexInput from '$lib/ui/ComplexInput.svelte'
  import PlaneInput, { type Point } from '$lib/ui/PlaneInput.svelte'
  import { variables } from 'svelte-styling'
  import type { Writable } from 'svelte/store'
  import { Color } from 'three'
  import Renderer from '../lib/Renderer.svelte'
  import Latex from '../lib/ui/Latex.svelte'
  import MatrixInput, { type MatrixInputEvent } from '../lib/ui/MatrixInput.svelte'
  import NumberInput from '../lib/ui/NumberInput.svelte'
  import { theme, themeCSS, themes } from '../style/themes/themes'

  let themeInput: string
  $: {
    const newTheme = themes.find((t) => t.name === themeInput) || themes[0]
    theme.set(newTheme)
  }

  let depth: number

  let mat1input: CMat | undefined
  let mat2input: CMat | undefined

  let showiso1 = true
  let showiso2 = true

  let gens: CMat[] = []
  let colors: Color[] = []
  $: {
    const show = [showiso1, showiso2]
    const rawColors = [$theme.canvas.isometryColors[0], $theme.canvas.isometryColors[1]]
    const matInputs = [mat1input, mat2input]
    const values = [0, 1]
      .map((i) => ({ m: matInputs[i], c: rawColors[i] }))
      .filter((x, i) => x.m !== undefined && !mIsSingular(x.m) && show[i])
    gens = values.map((x) => x.m as CMat)
    colors = values.map((x) => x.c.map((c) => new Color(c))).flat()
  }

  let focus: { element: ComplexInput; state?: Complex } | undefined
  function focusIsoInput(iso: number, e: CustomEvent<MatrixInputEvent>) {
    focus = { element: e.detail.target, state: e.detail.state }
  }
  let planeInputPos: Writable<Point>
  $: if (focus?.state) {
    $planeInputPos = { x: focus.state.re, y: focus.state.im }
  }

  function onPlaneChange(e: CustomEvent<Point>) {
    if (focus) {
      focus.element.setState(complex(e.detail.x, e.detail.y))
    }
  }
</script>

<svelte:body use:variables={$themeCSS} />
<div class="container">
  <div class="render-container">
    {#if browser}
      <Renderer width={800} height={800} {gens} {colors} {depth} />
    {/if}
  </div>
  <div class="sidebar">
    <div class="sidebar-row">
      Depth<NumberInput min={1} max={20} init={10} bind:state={depth} />
    </div>
    <div class="sidebar-row">
      <input type="checkbox" name="isometry1" bind:checked={showiso1} />Isometry 1
      <div class="combined-elements">
        <Latex text="\left[\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right." />
        <MatrixInput bind:state={mat1input} on:focus={(e) => focusIsoInput(0, e)} />
        <Latex text="\left.\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right]" />
      </div>
    </div>
    <div class="sidebar-row">
      <input type="checkbox" name="isometry2" bind:checked={showiso2} />Isometry 2
      <div class="combined-elements">
        <Latex text="\left[\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right." />
        <MatrixInput bind:state={mat2input} on:focus={(e) => focusIsoInput(1, e)} />
        <Latex text="\left.\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right]" />
      </div>
    </div>
    <div class="sidebar-row">
      <div class="centering">
        <PlaneInput bind:pos={planeInputPos} on:change={onPlaneChange} />
      </div>
    </div>
    <div class="sidebar-row">
      Theme <select bind:value={themeInput}>
        {#each Object.values(themes) as theme, _}
          <option>{theme.name}</option>
        {/each}
      </select>
    </div>
  </div>
</div>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0px 10px;
  margin: 10px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
}

.render-container {
  max-width: 800px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sidebar {
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
}

.sidebar-row {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  .centering {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

input[type='checkbox'][name='isometry1']:checked::before {
  background-color: var(--isometry1Color);
}

input[type='checkbox'][name='isometry2']:checked::before {
  background-color: var(--isometry2Color);
}

.combined-elements {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2em;
}

</style>