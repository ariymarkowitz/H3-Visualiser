<script lang="ts">
  import Renderer from '../lib/Renderer.svelte'
  import Latex from '../lib/ui/Latex.svelte'
  import NumberInput from '../lib/ui/NumberInput.svelte'
  import MatrixInput, { type MatrixInputEvent } from '../lib/ui/MatrixInput.svelte'
  import { theme, themes, themeCSS } from '../style/themes/themes'
  import { variables } from 'svelte-styling'
  import { complex, mIsSingular, type CMat, type Complex } from '$lib/math/complex'
  import { browser } from '$app/environment'
  import PlaneInput, { type Point } from '$lib/ui/PlaneInput.svelte'
  import type { Writable } from 'svelte/store'
  import type ComplexInput from '$lib/ui/ComplexInput.svelte'

  let currentTheme: string = 'Light'
  $: {
    const newTheme = themes.find((t) => t.name === currentTheme) || themes[0]
    theme.set(newTheme)
  }

  let depth: number

  let mat1input: CMat | undefined
  let mat2input: CMat | undefined

  let showiso1: boolean = true
  let showiso2: boolean = true

  let gens: CMat[] = []
  $: {
    const show = [showiso1, showiso2]
    gens = [mat1input, mat2input].filter((m, i): m is CMat => m !== undefined && !mIsSingular(m) && show[i])
  }

  let focus: {element: ComplexInput, state?: Complex}
  function focusIsoInput(iso: number, e: CustomEvent<MatrixInputEvent>) {
    focus = {element: e.detail.target, state: e.detail.state}
  }
  let planeInputPos: Writable<Point>
  $: if (focus?.state) {
    $planeInputPos = {x: focus.state.re, y: focus.state.im}
  }
  
  function planeInputChanged(e: CustomEvent<{pos: Point}>) {
    const pos = e.detail.pos
    focus.element.setState(complex(pos.x, pos.y))
  }

</script>

<svelte:body use:variables={$themeCSS} />
<div class="container">
  <div class="render-container">
    {#if browser}
    <Renderer width={800} height={800} gens={gens} depth={depth}/>
    {/if}
  </div>
  <div class="sidebar">
    <div class="sidebar-row">Depth<NumberInput min={1} max={20} init={10} bind:state={depth}/></div>
    <div class="sidebar-row">
      <input type="checkbox" name="isometry1" bind:checked={showiso1}/>Isometry 1
      <div class="combined-elements">
        <Latex text="\left[\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right." />
        <MatrixInput bind:state={mat1input} on:focus={e => focusIsoInput(0, e)}/>
        <Latex text="\left.\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right]" />
      </div>
    </div>
    <div class="sidebar-row">
      <input type="checkbox" name="isometry2" bind:checked={showiso2} />Isometry 2
      <div class="combined-elements">
        <Latex text="\left[\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right." />
        <MatrixInput bind:state={mat2input} on:focus={e => focusIsoInput(1, e)} />
        <Latex text="\left.\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right]" />
      </div>
    </div>
    <div class="sidebar-row">
      <div class="centering">
        <PlaneInput bind:pos={planeInputPos} on:change={planeInputChanged}/>
      </div>
    </div>
  </div>
</div>
