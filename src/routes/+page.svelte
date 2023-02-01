<script lang="ts">
  import Renderer from '../lib/Renderer.svelte'
  import Latex from '../lib/ui/Latex.svelte'
  import NumberInput from '../lib/ui/NumberInput.svelte'
  import MatrixInput from '../lib/ui/MatrixInput.svelte'
  import { theme, themes, themeCSS } from '../style/themes/themes'
  import { variables } from 'svelte-styling'
    import { mIsSingular, type CMat } from '$lib/math/complex'
    import { browser } from '$app/environment'
    import PlaneInput from '$lib/ui/PlaneInput.svelte'

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
    console.log(gens)
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
    <div class="sidebar-row">Depth<NumberInput min={1} max={15} init={10} bind:state={depth}/></div>
    <div class="sidebar-row">
      <input type="checkbox" name="isometry1" bind:checked={showiso1}/>Isometry 1
      <div class="combined-elements">
        <Latex text="\left[\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right." />
        <MatrixInput bind:state={mat1input} />
        <Latex text="\left.\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right]" />
      </div>
    </div>
    <div class="sidebar-row">
      <input type="checkbox" name="isometry2" bind:checked={showiso2} />Isometry 2
      <div class="combined-elements">
        <Latex text="\left[\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right." />
        <MatrixInput bind:state={mat2input} />
        <Latex text="\left.\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right]" />
      </div>
    </div>
    <div class="sidebar-row">
      <div class="spacer" />
      <PlaneInput />
    </div>
  </div>
</div>
