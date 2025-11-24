<script lang="ts" module>
  export type RendererProps = {
    width: number
    height: number
    depth: number
    gens: CMat[]
    colors: THREE.Color[]
    animateIso?: CMat
  }
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
  import { createMemo } from './utils/memoize.svelte'
  import { getTheme } from '../style/themes/themes.svelte'

  let { width, height, depth, gens, colors, animateIso }: RendererProps = $props()

  let t = 0
  $effect(() => {
    if (!animateIso) updateTree(gens, colors, depth)
  })

  let dpr = window.devicePixelRatio

  let canvas: HTMLCanvasElement
  let renderer: THREE.WebGLRenderer
  let id: number

  let cameraPos = createMemo<THREE.Vector3 | undefined>(undefined, (a, b) => a === b || (a !== undefined && b !== undefined && a.equals(b)))
  let updateTree: (gens: CMat[], colors: THREE.Color[], depth: number, iso?: CMat) => void = $state(() => {})
 
  let tree: CayleyTree | undefined = $state()

  $effect(() => {
    const camPos = cameraPos.get()
    if (!tree || !camPos) return
    tree.uniforms = {
      fadeColor: new THREE.Color(getTheme().ui.background).toArray(),
      fadeNear: camPos.length() - 1,
      fadeFar: camPos.length() + 1,
      fadeStrength: 0.7
    }
  })

  onMount(() => {
    let dirty = true
    const setDirty = () => (dirty = true)

    const shader = {
      outline: {
        vertex_shader: `
        uniform float offset;
        void main() {
          vec4 pos = modelViewMatrix * vec4( position + normal * offset, 1.0 );
          gl_Position = projectionMatrix * pos;
        }
        `,

        fragment_shader: `
        uniform vec4 color;
        void main() {
          gl_FragColor = color;
        }
        `
      }
    }

    renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(width, height, false)
    renderer.setPixelRatio(dpr)
    renderer.setClearColor(0xffffff)
    $effect(() => {
      renderer.setClearColor(getTheme().ui.background)
      setDirty()
    })
    renderer.autoClear = false

    const scene = new THREE.Scene()
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
    axis.setColors(new THREE.Color(0xff9999), new THREE.Color(0x66ff66), new THREE.Color(0x9999ff))
    scene.add(axis)
    
    $effect(() => {
      const colors = getTheme().canvas.axisColors.map((c) => new THREE.Color(c))
      axis.setColors(colors[0], colors[1], colors[2])
      setDirty()
    })

    // # shaded model
    const sphereGeo = new THREE.SphereGeometry(1, 128, 64)
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x000000 })
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat)
    maskScene.add(sphereMesh)
    maskScene2.add(sphereMesh.clone())

    // shader
    const outlineUniforms = {
      offset: {
        value: 0.01
      },
      color: {
        value: new THREE.Vector4(0, 0, 0, 1)
      }
    }

    const outShader = shader.outline

    const matShader = new THREE.ShaderMaterial({
      uniforms: outlineUniforms,
      vertexShader: outShader.vertex_shader,
      fragmentShader: outShader.fragment_shader
    })
    $effect(() => {
      const c = new THREE.Color(getTheme().canvas.foreground)
      matShader.uniforms.color.value = [c.r, c.g, c.b, 1]
      setDirty()
    })

    const outlineMesh = new THREE.Mesh(sphereGeo, matShader)
    outScene.add(outlineMesh)

    // postprocessing
    const renderPass = new RenderPass(scene, camera)
    const outline = new RenderPass(outScene, camera)
    outline.clear = false

    const mask = new MaskPass(maskScene, camera)
    const mask2 = new MaskPass(maskScene2, camera)
    mask.inverse = true
    const clearMask = new ClearMaskPass()

    const fxaaPass = new ShaderPass(FXAAShader)
    fxaaPass.renderToScreen = true
    const pixelRatio = renderer.getPixelRatio()
    fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( width * pixelRatio )
    fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( height * pixelRatio )

    const composer = new EffectComposer(renderer)
    composer.renderTarget1.stencilBuffer = true
    composer.renderTarget2.stencilBuffer = true

    composer.addPass(renderPass)
    composer.addPass(mask2)
    composer.addPass(mask)
    composer.addPass(outline)
    composer.addPass(clearMask)
    composer.addPass(fxaaPass)

    id = requestAnimationFrame(animate)
    controls.addEventListener('change', setDirty)

    tree = new CayleyTree(width, height)
    updateTree = (gens, colors, depth, iso) => {
      if (!tree) return
      tree.setGeometry(gens, colors, depth, iso)
      setDirty()
    }
    $effect(() => {
      if (!tree) return
      if (!tree.ready) return
      if (!tree.mesh) throw new Error("Mesh is undefined")
      scene.add(tree.mesh)
    })
    $effect(() => {
      if (!tree) return
      if (tree.uniforms) setDirty()
    })

    let _time: number | undefined
    function animate(time: number) {
      id = requestAnimationFrame(animate)
      controls.update()
      const camPos = camera.position.clone()
      cameraPos.set(camPos)
      if (animateIso) dirty = true
      if (dirty) {
        if (animateIso) {
          if (_time) {
            const dt = time - _time
            t = (t + dt/4000) % 1
          } else {
            t = 0
          }
          const iso = mpow(animateIso, t)
          updateTree(gens, colors, depth, iso)
          _time = time
        } else {
          dirty = false
          _time = undefined
        }

        matShader.uniforms.offset.value = 0.003 * camPos.length()
        composer.render()
      }
    }

    return () => {
      if (id) cancelAnimationFrame(id)
      controls.removeEventListener('change', setDirty)
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
