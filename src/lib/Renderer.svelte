<script lang="ts">
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'
  import * as THREE from 'three'
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
  import { ClearMaskPass, MaskPass } from 'three/examples/jsm/postprocessing/MaskPass'
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
  import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
  import { CopyShader } from 'three/examples/jsm/shaders/CopyShader'
  import { CayleyTree } from './CayleyTree'
  import { cexp, cMatrix, complex, type CMat } from './math/complex'

  export let width: number
  export let height: number
  export let depth: number
  export let gens: CMat[] = []

  let dpr = window.devicePixelRatio

  let canvas: HTMLCanvasElement
  let renderer: THREE.WebGLRenderer
  let id: number

  let setMesh: (gens: CMat[], depth: number, width: number, height: number) => void

  $: if (setMesh) setMesh(gens, depth, width, height)

  onMount(() => {
    let dirty = true
    const setDirty = () => (dirty = true)

    const shader = {
      outline: {
        vertex_shader: [
          'uniform float offset;',
          'void main() {',
          'vec4 pos = modelViewMatrix * vec4( position + normal * offset, 1.0 );',
          'gl_Position = projectionMatrix * pos;',
          '}'
        ].join('\n'),

        fragment_shader: ['void main(){', 'gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );', '}'].join(
          '\n'
        )
      }
    }

    renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(width, height, false)
    renderer.setPixelRatio(dpr)
    renderer.setClearColor(0xffffff)
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

    // const light = new THREE.DirectionalLight(0xffffff)
    // light.position.set(1, 1, 1)
    // scene.add(light)

    const axis = new THREE.AxesHelper(1)
    axis.setColors(new THREE.Color(0xff9999), new THREE.Color(0x66ff66), new THREE.Color(0x9999ff))
    scene.add(axis)

    const w = cexp(complex(0, -Math.PI / 3))
    const A = cMatrix(1, 1, 1, w)
    const B = cMatrix(1, -1, -1, w)

    // const A = cMatrix(1, 2, 0, 1)
    // const B = cMatrix(1, 0, 2, 1)

    // const A = cMatrix(1, 1.41, 0, 1)
    // const B = cMatrix(1, 0, complex(0, 1.41), 1)

    // const A = cMatrix(1, 2, complex(0, -1), 1)
    // const B = cMatrix(1, complex(0, 0.6), complex(2, 1), 1)

    // const A = cMatrix(1, 1.2720196, 0, 1)
    // const B = cMatrix(1, 0, complex(0, 1.2720196), 1)

    let mesh: THREE.Mesh | undefined

    // # shaded model
    const sphereGeo = new THREE.SphereGeometry(1, 128, 64)
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x000000 })
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat)
    maskScene.add(sphereMesh)
    maskScene2.add(sphereMesh.clone())

    // shader
    const uniforms = {
      offset: {
        type: 'f',
        value: 0.01
      }
    }

    const outShader = shader['outline']

    const matShader = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: outShader.vertex_shader,
      fragmentShader: outShader.fragment_shader
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
    const copyPass = new ShaderPass(CopyShader)
    copyPass.renderToScreen = true

    const composer = new EffectComposer(renderer)
    composer.renderTarget1.stencilBuffer = true
    composer.renderTarget2.stencilBuffer = true

    composer.addPass(renderPass)
    composer.addPass(mask2)
    composer.addPass(mask)
    composer.addPass(outline)
    composer.addPass(clearMask)
    composer.addPass(copyPass)

    function animate() {
      id = requestAnimationFrame(animate)
      controls.update()
      if (dirty) {
        matShader.uniforms.offset.value = 0.003 * camera.position.length()
        composer.render()
        dirty = false
      }
    }

    id = requestAnimationFrame(animate)
    controls.addEventListener('change', setDirty)

    setMesh = (gens, depth, width, height) => {
      if (mesh) {
        scene.remove(mesh)
      }
      const tree = new CayleyTree(gens, depth, width, height)
      mesh = tree.mesh()
      scene.add(mesh)
      setDirty()
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
/>
