<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import * as THREE from 'three'
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
  import { ClearMaskPass, MaskPass } from 'three/examples/jsm/postprocessing/MaskPass'
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
  import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
  import { CopyShader } from 'three/examples/jsm/shaders/CopyShader'
  import { CayleyTree } from './CayleyTree'
  import * as cmath from './math/complex'
  import { cexp, cinv, cMatrix, cmul, cneg, complex, crmul } from './math/complex'

  let container: HTMLElement
  let renderer: THREE.WebGLRenderer
  let id: number

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

  onMount(async () => {
    const scene = new THREE.Scene()
    const maskScene = new THREE.Scene()
    const maskScene2 = new THREE.Scene()
    const outScene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 3, 0)
    camera.up.set(1, 0, 0)

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)
    renderer.setClearColor(0xffffff)
    renderer.autoClear = false

    const controls = new TrackballControls(camera, renderer.domElement)
    controls.noPan = true
    controls.rotateSpeed = 5

    // const light = new THREE.DirectionalLight(0xffffff)
    // light.position.set(1, 1, 1)
    // scene.add(light)

    const axis = new THREE.AxesHelper(1)
    axis.setColors(new THREE.Color(0xff9999),new THREE.Color(0x66ff66),new THREE.Color(0x9999ff))
    scene.add(axis)

    const w = cexp(complex(0, -Math.PI/3))
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

    const tree = new CayleyTree([A, B], 15)
    scene.add(tree.mesh())

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
    const composer = new EffectComposer(renderer)
    composer.renderTarget1.stencilBuffer = true
    composer.renderTarget2.stencilBuffer = true

    const renderPass = new RenderPass(scene, camera)
    const outline = new RenderPass(outScene, camera)
    outline.clear = false

    const mask = new MaskPass(maskScene, camera)
    const mask2 = new MaskPass(maskScene2, camera)
    mask.inverse = true
    const clearMask = new ClearMaskPass()
    const copyPass = new ShaderPass(CopyShader)
    copyPass.renderToScreen = true

    composer.addPass(renderPass)
    composer.addPass(mask2)
    composer.addPass(mask)
    composer.addPass(outline)
    composer.addPass(clearMask)
    composer.addPass(copyPass)

    function animate() {
      id = requestAnimationFrame(animate)
      controls.update()
      composer.render()
      matShader.uniforms.offset.value = 0.003 * camera.position.length()
    }
    id = requestAnimationFrame(animate)
  })

  onDestroy(async () => {
    if (id) cancelAnimationFrame(id)
    if (container) container.removeChild(renderer.domElement)
  })
</script>

<div bind:this={container} />
