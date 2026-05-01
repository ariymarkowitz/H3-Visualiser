<script lang="ts">
  import { makedet1, mIsSingular, type CMat, type Complex } from './lib/math/math'
  import MatrixInput from './lib/ui/MatrixInput.svelte'
  import PlaneInput from './lib/ui/PlaneInput.svelte'
  import StepperInput from './lib/ui/StepperInput.svelte'
  import { getTheme, setThemeByName, themes } from './style/themes/themes.svelte'
  import Renderer from './lib/Renderer.svelte'
  import { parseInitialState, serializeState } from './lib/urlState'

  let themeInput: string = $state(themes[0].name)
  $effect(() => setThemeByName(themeInput))

  const initial = parseInitialState()
  let depth: number = $state(initial.depth)
  let matrices: [CMat, CMat] = $state(initial.matrices)
  let showIso = $state(initial.showIso)

  let activeIdx = $derived([0, 1].filter(i => showIso[i] && !mIsSingular(matrices[i])))
  let gens = $derived(activeIdx.map(i => matrices[i]))
  let rawColors = $derived(activeIdx.flatMap(i => getTheme().canvas.isometryColors[i]))

  let isoFocus: { id: number; elt: number } | undefined = $state()

  let focusedComplex = $derived.by(() => {
    if (!isoFocus) return undefined
    return matrices[isoFocus.id][isoFocus.elt]
  })

  function setFocusedComplex(c: Complex) {
    if (!isoFocus) return
    matrices[isoFocus.id][isoFocus.elt] = c
  }

  let urlReference = $derived(serializeState({ depth, matrices, showIso }))
  let copiedUrlReference: string | undefined = $state()
  let urlReferenceCopied = $derived(copiedUrlReference === urlReference)

  function copyUrlReference() {
    const url = urlReference
    navigator.clipboard.writeText(url).then(() => copiedUrlReference = url)
  }

  let animateIdx: number | undefined = $state()
  let animateIso = $derived(animateIdx === undefined ? undefined : matrices[animateIdx])

  function toggleAnimate(i: number) {
    animateIdx = animateIdx === i ? undefined : i
  }

  function matrixMakeDeterminantOne(id: number, elt: number) {
    const result = makedet1(matrices[id], elt)
    if (result) matrices[id][elt] = result
  }
</script>

<main>
  <div class="render-container">
    <Renderer animateIso={animateIso} width={800} height={800} {gens} {rawColors} {depth} />
  </div>
  <div class="sidebar">
    <div class="sidebar-row">
      Depth<StepperInput onchange={v => depth = v} init={depth} min={1} max={20} />
    </div>
    {#each [0, 1] as i}
      <div class="sidebar-row">
      <input type="checkbox" name="isometry{i+1}" bind:checked={showIso[i]} />Isometry {i + 1}
      <div class="combined-elements">
        <MatrixInput
        bind:value={matrices[i]}
        onfocus={index => isoFocus = index === undefined ? undefined : { id: i, elt: index }}
        onkeydown={e => {
          if (e.key === 'd') {
            matrixMakeDeterminantOne(i, e.index)
          }
        }}
        />
      </div>
    </div>
    {/each}
    <div class="sidebar-row">
      <div class="row-center">
        <PlaneInput value={focusedComplex} onchange={setFocusedComplex} />
      </div>
    </div>
    <div class="sidebar-row">
      <button onclick={copyUrlReference} disabled={urlReferenceCopied}>
        {urlReferenceCopied ? "URL reference copied" : "Copy URL reference"}
      </button>
    </div>
    <div class="sidebar-row">
      Theme <select bind:value={themeInput}>
        {#each themes as theme}
          <option>{theme.name}</option>
        {/each}
      </select>
    </div>
    <div class="sidebar-row">
      {#each [0, 1] as i}
        <button onclick={() => toggleAnimate(i)}>
          {animateIdx === i ? "Stop animation" : `Animate! (${i + 1})`}
        </button>
      {/each}
    </div>
  </div>
  <a href="https://github.com/ariymarkowitz/H3-Visualiser" class="github" draggable=false target="_blank" rel="noopener noreferrer">
    <img src="{getTheme().ui.githubImage}" alt="Link to GitHub" width="40" height="40" draggable=false />
  </a>
</main>

<style>
input[type='checkbox'][name='isometry1']:checked::before {
  background-color: var(--isometry-1);
}

input[type='checkbox'][name='isometry2']:checked::before {
  background-color: var(--isometry-2);
}

main {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0px 10px;

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
  margin: 10px 10px 0 0;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
}

.sidebar-row {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  .row-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.github {
  position:fixed;
  bottom: 10px;
  right: 10px;
  opacity: 0.5;
  user-select: none;
  &:hover {
    opacity: 1;
  }
}

.combined-elements {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2em;
}
</style>
