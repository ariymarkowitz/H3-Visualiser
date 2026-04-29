<script lang="ts">
  import { Color } from 'three'
  import { makedet1, mId, mIsSingular, type CMat, type Complex } from './lib/math/math'
  import MatrixInput from './lib/ui/MatrixInput.svelte'
  import PlaneInput from './lib/ui/PlaneInput.svelte'
  import StepperInput from './lib/ui/StepperInput.svelte'
  import { getTheme, setThemeByName, themes } from './style/themes/themes.svelte'
  import Renderer from './lib/Renderer.svelte'
  import { onMount } from 'svelte';
  import { watch } from 'runed';

  let themeInput: string = $state(themes[0].name)
  $effect(() => setThemeByName(themeInput))

  let depthElt: StepperInput

  let matrices: [CMat, CMat] = $state([mId(), mId()])
  let showIso = $state([false, false])
  let rawColors = $derived(getTheme().canvas.isometryColors)
  let activeIdx = $derived([0, 1].filter(i => showIso[i] && !mIsSingular(matrices[i])))
  let gens = $derived(activeIdx.map(i => matrices[i]))
  let colors = $derived(activeIdx.flatMap(i => rawColors[i].map(c => new Color(c))))

  let depth: number = $state(5)
  let isoFocus: { id: number; elt: number } | undefined = $state()

  let focusedComplex = $derived.by(() => {
    if (!isoFocus) return undefined
    return matrices[isoFocus.id][isoFocus.elt]
  })

  function setFocusedComplex(c: Complex) {
    if (!isoFocus) return
    matrices[isoFocus.id][isoFocus.elt] = c
  }

  let urlReferenceCopied = $state(false)
  watch(() => $state.snapshot([depth, matrices, showIso]), () => {
    urlReferenceCopied = false
  })

  const MATRIX_KEYS = ['a', 'b'] as const
  const SHOW_KEYS = ['showa', 'showb'] as const

  function parseMatrixParam(params: URLSearchParams, key: string): CMat | undefined {
    const raw = params.get(key)
    if (!raw) return undefined
    const list = raw.split(' ').map(Number)
    if (list.length !== 8 || !list.every(Number.isFinite)) return undefined
    return Array.from({length: 4}, (_, i) => ({re: list[2*i], im: list[2*i+1]})) as CMat
  }

  function copyUrlReference() {
    let params = new URLSearchParams()
    params.append('d', depth.toString())

    for (let i = 0; i < 2; i++) {
      if (!showIso[i]) continue
      params.append(MATRIX_KEYS[i], matrices[i].flatMap(z => [z.re, z.im]).join(' '))
      params.append(SHOW_KEYS[i], '1')
    }

    const url = new URL(window.location.href);
    navigator.clipboard.writeText(`${url.origin}${url.pathname}?${params}`)
      .then(() => urlReferenceCopied = true)
  }

  onMount(() => {
    const params = new URLSearchParams(window.location.search)
    const d = Number(params.get('d'))
    depthElt.set(Number.isInteger(d) && d >= 1 ? d : 10)
    for (let i = 0; i < 2; i++) {
      const m = parseMatrixParam(params, MATRIX_KEYS[i])
      if (m) {
        matrices[i] = m
        showIso[i] = params.get(SHOW_KEYS[i]) === '1'
      }
    }
  })

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
    <Renderer animateIso={animateIso} width={800} height={800} {gens} {colors} {depth} />
  </div>
  <div class="sidebar">
    <div class="sidebar-row">
      Depth<StepperInput bind:this={depthElt} onchange={v => depth = v} init={depth} min={1} max={20} />
    </div>
    {#each [0, 1] as _, i}
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
        {#each Object.values(themes) as theme}
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
  background-color: var(--isometry1Color);
}

input[type='checkbox'][name='isometry2']:checked::before {
  background-color: var(--isometry2Color);
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
