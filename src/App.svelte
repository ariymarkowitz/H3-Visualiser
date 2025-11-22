<script lang="ts">
  import { Color } from 'three'
  import { complex, makedet1, mIsSingular, type CMat, type Complex } from './lib/math/math'
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
  let matElts: MatrixInput[] = $state(Array(2))
  let planeElt: PlaneInput

  let matrices: (CMat | undefined)[] = $state(Array(2))
  let showIso = $state([false, false])
  let rawColors = $derived([getTheme().canvas.isometryColors[0], getTheme().canvas.isometryColors[1]])
  let isoData = $derived([0, 1]
    .map((i) => ({ m: matrices[i], c: rawColors[i] }))
    .filter((x, i) => x.m !== undefined && !mIsSingular(x.m) && showIso[i])
  )
  let gens = $derived(isoData.map((x) => x.m as CMat))
  let colors = $derived(isoData.map((x) => x.c.map((c) => new Color(c))).flat())

  let depth: number = $state(5)
  let isoFocus: { id: number; elt: number } | undefined = $state()

  let urlReferenceCopied = $state(false)
  watch(() => $state.snapshot([depth, matrices, showIso]), () => {
    urlReferenceCopied = false
  })

  function parseUrlParams(params: URLSearchParams) {
    const depthParam = params.get('d')
    let depth = depthParam ? parseInt(depthParam) : undefined
    depth = depth && Number.isInteger(depth) && depth >= 1 ? depth : undefined

    const aParam = params.get('a')
    const mat1List = aParam ? aParam.split(' ').map(Number) : undefined
    let matrix1: CMat | undefined
    if (mat1List?.every(Number.isFinite)) {
      matrix1 = Array.from(
        {length: 4},
        (_, i) => ({re: mat1List[2*i], im: mat1List[2*i+1]})
      ) as CMat
    }
    const showIso1Param = params.get('showa')
    if (matrix1 && showIso1Param === '1') {
      showIso[0] = true
    }

    const bParam = params.get('b')
    const mat2List = bParam ? bParam.split(' ').map(Number) : undefined
    let matrix2: CMat | undefined
    if (mat2List?.every(Number.isFinite)) {
      matrix2 = Array.from(
        {length: 4},
        (_, i) => ({re: mat2List[2*i], im: mat2List[2*i+1]})
      ) as CMat
    }
    const showIso2Param = params.get('showb')
    if (matrix2 && showIso2Param === '1') {
      showIso[1] = true
    }

    return { depth, matrix1, matrix2 }
  }

  function copyUrlReference() {
    let params = new URLSearchParams()
    params.append('d', depth.toString())

    let [mat1, mat2] = matrices

    const a = mat1?.flatMap(z => [z.re, z.im])?.join(' ')
    if (a) params.append('a', a)

    const b = mat2?.flatMap(z => [z.re, z.im])?.join(' ')
    if (b) params.append('b', b)

    if (a) params.append('showa', showIso[0] ? '1' : '0')
    if (b) params.append('showb', showIso[1] ? '1' : '0')

    const url = new URL(window.location.href);
    navigator.clipboard.writeText(`${url.origin}${url.pathname}?${params}`)
      .then(() => urlReferenceCopied = true)
  }

  onMount(() => {
    const urlParams = parseUrlParams(new URLSearchParams(window.location.search))
    depthElt.set(urlParams.depth ? urlParams.depth : 10)
    if (urlParams.matrix1) setMatrixFromGlobal(0, urlParams.matrix1)
    if (urlParams.matrix2) setMatrixFromGlobal(1, urlParams.matrix2)
  })

  let animate: 0 | 1 | 2 = $state(0)
  let animateIso = $derived([undefined, ...matrices][animate])

  function setMatrixInput(id: number, mat: CMat) {
    matElts![id].set(mat)
  }

  function setMatrixInputElt(id: number, index: number, z: Complex) {
    matElts![id].setEntry(index, z)
  }

  function setPlaneInput(c: Complex) {
    planeElt.setValue(c)
  }

  // Set entire matrix from global change (e.g. not from an input element)
  function setMatrixFromGlobal(id: number, mat: CMat) {
    matrices[id] = mat
    setMatrixInput(id, mat)
    if (isoFocus?.id === id) {
      const z = mat[isoFocus.elt]
      setPlaneInput(z)
    }
  }

  // Set matrix element from global change (e.g. not from an input element)
  function setMatrixEltFromGlobal(id: number, index: number, z: Complex) {
    if (matrices[id] === undefined) {
      matrices[id] = [complex(0), complex(0), complex(0), complex(0)]
    }
    matrices[id][index] = z
    setMatrixInputElt(id, index, z)
    if (id === isoFocus?.id && index === isoFocus.elt) {
      setPlaneInput(z)
    }
  }

  // Set matrix element from matrix input change
  function setMatrixEltFromMatrixInput(id: number, elt: number, value: Complex = complex(0)) {
    if (matrices[id] === undefined) {
      matrices[id] = [complex(0), complex(0), complex(0), complex(0)]
    }
    matrices[id][elt] = value
    if (id === isoFocus?.id && elt === isoFocus.elt) {
      setPlaneInput(value)
    }
  }

  // Set matrix element from plane input change
  function setMatrixEltFromPlaneInput(e: Complex) {
    if (isoFocus === undefined) return
    const { id, elt } = isoFocus
    if (!matrices[id]) {
      matrices[id] = [complex(0), complex(0), complex(0), complex(0)]
    }
    let mat = matrices[id]
    
    mat[elt] = e
    setMatrixInputElt(id, elt, e)
  }

  // Set focus for isometry from matrix input focus
  function setIsoFocus(id: number, elt?: number) {
    isoFocus = (elt === undefined) ? undefined : { id, elt }
    if (isoFocus) {
      const z = matrices[isoFocus.id]?.[isoFocus.elt] || complex(0)
      setPlaneInput(z)
    }
  }

  // Adjust matrix to make determinant one
  function matrixMakeDeterminantOne(id: number, elt: number) {
    if (!matrices[id]) return
    let mat = matrices[id] as CMat
    const result = makedet1(mat, elt)
    if (result) setMatrixEltFromGlobal(id, elt, result)
  }
</script>

<main>
  <div class="render-container">
    <Renderer animateIso={animateIso} width={800} height={800} {gens} {colors} {depth} />
  </div>
  <div class="sidebar">
    <div class="sidebar-row">
      Depth<StepperInput bind:this={depthElt} onchange={e => depth = e.detail} init={depth} min={1} max={20} />
    </div>
    {#each [0, 1] as _, i}
      <div class="sidebar-row">
      <input type="checkbox" name="isometry{i+1}" bind:checked={showIso[i]} />Isometry {i + 1}
      <div class="combined-elements">
        <MatrixInput
        bind:this={matElts[i]}
        onfocus={e => setIsoFocus(i, e.detail)}
        oneltchange={e => setMatrixEltFromMatrixInput(i, e.detail.index, e.detail.value)}
        onkeydown={e => {
          if (e.detail.key === 'd') {
            matrixMakeDeterminantOne(i, e.detail.index)
          }
        }}
        />
      </div>
    </div>
    {/each}
    <div class="sidebar-row">
      <div class="row-center">
        <PlaneInput bind:this={planeElt} onchange={e => setMatrixEltFromPlaneInput(e)}/>
      </div>
    </div>
    <div class="sidebar-row">
      <button onclick={copyUrlReference} disabled={urlReferenceCopied}>
        {urlReferenceCopied ? "URL reference copied" : "Copy URL reference"}
      </button>
    </div>
    <div class="sidebar-row">
      Theme <select bind:value={themeInput}>
        {#each Object.values(themes) as theme, _}
          <option>{theme.name}</option>
        {/each}
      </select>
    </div>
    <div class="sidebar-row">
      <button onclick={() => animate = (animate === 1) ? 0 : 1}>
        {animate === 1 ? "Stop animation" : "Animate! (1)"}
      </button>
      <button onclick={() => animate = (animate === 2) ? 0 : 2}>
        {animate === 2 ? "Stop animation" : "Animate! (2)"}
      </button>
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
