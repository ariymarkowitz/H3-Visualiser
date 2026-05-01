<script lang="ts" module>
  export type RendererProps = {
    width: number
    height: number
    depth: number
    gens: CMat[]
    rawColors: string[]
    animateIso?: CMat
  }

  const OUTLINE_VERTEX_SHADER = `
    uniform float offset;
    void main() {
      vec4 pos = modelViewMatrix * vec4( position + normal * offset, 1.0 );
      gl_Position = projectionMatrix * pos;
    }
  `
  const OUTLINE_FRAGMENT_SHADER = `
    uniform vec4 color;
    void main() {
      gl_FragColor = color;
    }
  `
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import * as THREE from 'three'
  import { TrackballControls } from 'three/addons/controls/TrackballControls.js'
  import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
  import { ClearMaskPass, MaskPass } from 'three/addons/postprocessing/MaskPass.js'
  import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
  import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
  import { FXAAShader } from 'three/addons/shaders/FXAAShader.js'
  import { CayleyTree } from './CayleyTree.svelte'
  import { mpow, type CMat } from './math/math'
  import { getTheme } from '../style/themes/themes.svelte'

  let { width, height, depth, gens, rawColors, animateIso }: RendererProps = $props()

  let colors = $derived(rawColors.map(c => new THREE.Color(c)))

  let dpr = window.devicePixelRatio
  let canvas: HTMLCanvasElement

  // Reactive cells observed by effects below; populated from onMount.
  type Scene = {
    renderer: THREE.WebGLRenderer
    axis: THREE.AxesHelper
    matShader: THREE.ShaderMaterial
    tree: CayleyTree
    markDirty: () => void
    updateTree: (gens: CMat[], colors: THREE.Color[], depth: number, iso?: CMat) => void
  }
  let scene: Scene | undefined = $state()
  let cameraPos: THREE.Vector3 | undefined = $state.raw()

  $effect(() => {
    if (scene && !animateIso) scene.updateTree(gens, colors, depth)
  })

  $effect(() => {
    if (!scene || !cameraPos) return
    scene.tree.uniforms = {
      fadeColor: new THREE.Color(getTheme().ui.background).toArray(),
      fadeNear: cameraPos.length() - 1,
      fadeFar: cameraPos.length() + 1,
      fadeStrength: 0.7,
    }
    scene.markDirty()
  })

  $effect(() => {
    if (!scene) return
    const theme = getTheme()
    scene.renderer.setClearColor(theme.ui.background)
    const [x, y, z] = theme.canvas.axisColors.map(c => new THREE.Color(c))
    scene.axis.setColors(x, y, z)
    const c = new THREE.Color(theme.canvas.foreground)
    scene.matShader.uniforms.color.value = [c.r, c.g, c.b, 1]
    scene.markDirty()
  })

  onMount(() => {
    let dirty = true
    const markDirty = () => (dirty = true)

    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(width, height, false)
    renderer.setPixelRatio(dpr)
    renderer.setClearColor(0xffffff)
    renderer.autoClear = false

    const _scene = new THREE.Scene()
    const maskScene = new THREE.Scene()
    const maskScene2 = new THREE.Scene()
    const outScene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 3, 0)
    camera.up.set(1, 0, 0)

    const controls = new TrackballControls(camera, renderer.domElement)
    controls.noPan = true
    controls.rotateSpeed = 2

    const axis = new THREE.AxesHelper(1)
    _scene.add(axis)

    const sphereGeo = new THREE.SphereGeometry(1, 128, 64)
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x000000 })
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat)
    maskScene.add(sphereMesh)
    maskScene2.add(sphereMesh.clone())

    const matShader = new THREE.ShaderMaterial({
      uniforms: {
        offset: { value: 0.01 },
        color: { value: new THREE.Vector4(0, 0, 0, 1) },
      },
      vertexShader: OUTLINE_VERTEX_SHADER,
      fragmentShader: OUTLINE_FRAGMENT_SHADER,
    })
    outScene.add(new THREE.Mesh(sphereGeo, matShader))

    const renderPass = new RenderPass(_scene, camera)
    const outline = new RenderPass(outScene, camera)
    outline.clear = false
    const mask = new MaskPass(maskScene, camera)
    const mask2 = new MaskPass(maskScene2, camera)
    mask.inverse = true
    const clearMask = new ClearMaskPass()

    const fxaaPass = new ShaderPass(FXAAShader)
    fxaaPass.renderToScreen = true
    const pixelRatio = renderer.getPixelRatio()
    fxaaPass.material.uniforms['resolution'].value.x = 1 / (width * pixelRatio)
    fxaaPass.material.uniforms['resolution'].value.y = 1 / (height * pixelRatio)

    const composer = new EffectComposer(renderer)
    composer.renderTarget1.stencilBuffer = true
    composer.renderTarget2.stencilBuffer = true
    composer.addPass(renderPass)
    composer.addPass(mask2)
    composer.addPass(mask)
    composer.addPass(outline)
    composer.addPass(clearMask)
    composer.addPass(fxaaPass)

    const tree = new CayleyTree(width, height)
    _scene.add(tree.mesh)

    const updateTree: Scene['updateTree'] = (gens, colors, depth, iso) => {
      tree.setGeometry(gens, colors, depth, iso)
      markDirty()
    }

    controls.addEventListener('change', markDirty)

    let t = 0
    let lastTime: number | undefined
    let id = requestAnimationFrame(animate)
    function animate(time: number) {
      id = requestAnimationFrame(animate)
      controls.update()

      const newCamPos = camera.position.clone()
      if (!cameraPos || !newCamPos.equals(cameraPos)) cameraPos = newCamPos

      if (animateIso) {
        t = lastTime === undefined ? 0 : (t + (time - lastTime) / 4000) % 1
        lastTime = time
        updateTree(gens, colors, depth, mpow(animateIso, t))
        dirty = true
      } else {
        lastTime = undefined
      }

      if (dirty) {
        matShader.uniforms.offset.value = 0.003 * newCamPos.length()
        composer.render()
        if (!animateIso) dirty = false
      }
    }

    scene = { renderer, axis, matShader, tree, markDirty, updateTree }

    return () => {
      cancelAnimationFrame(id)
      controls.removeEventListener('change', markDirty)
      tree.dispose()
      sphereGeo.dispose()
      sphereMat.dispose()
      matShader.dispose()
      for (const p of composer.passes) p.dispose()
      renderer.dispose()
    }
  })
</script>

<canvas
  class="tree-canvas"
  style={`width: 100%; max-width: ${width}px; max-height: ${height}px`}
  bind:this={canvas}
  width={width * dpr}
  height={height * dpr}
></canvas>
