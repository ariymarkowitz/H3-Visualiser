<script lang="ts">
    import Renderer from "../lib/Renderer.svelte"
    import Latex from "../lib/ui/Latex.svelte"
    import NumberInput from "../lib/ui/NumberInput.svelte"
    import MatrixInput from "../lib/ui/MatrixInput.svelte"
    import { theme, themes, themeCSS } from "../style/themes/themes"
    import { variables } from "svelte-styling"

    let currentTheme: string = 'Light'
	$: {
		const newTheme = themes.find(t => t.name === currentTheme) || themes[0]
		theme.set(newTheme)
	}
</script>
<svelte:body use:variables={$themeCSS} />
<div class="container">
    <div class='render-container'>
        <Renderer width={800} height={800}/>
    </div>
    <div class="sidebar">
        <div class='sidebar-row'>Depth<NumberInput min={1} max={15} init={4}/></div>
        <div class='sidebar-row'>
            <input type='checkbox' name='isometry' />Isometry
            <div class='combined-elements'>
                <Latex text='\left[\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right.'/>
                <MatrixInput />
                <Latex text='\left.\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right]'/>
            </div>
        </div>
        <div class='sidebar-row'>
            <input type='checkbox' name='isometry' />Isometry
            <div class='combined-elements'>
                <Latex text='\left[\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right.'/>
                <MatrixInput />
                <Latex text='\left.\rule{'{'}0cm{'}'}{'{'}3em{'}'}\right]'/>
            </div>
        </div>
    </div>
</div>