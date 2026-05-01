import darkTheme from './dark'
import lightTheme from './light'

export interface Theme {
  name: string
  ui: {
    background: string
    textColor: string
    border: string
    focusBorder: string
    thickBorder: string
    lightBorder: string
    githubImage: string
  }
  canvas: {
    foreground: string
    isometryColors: string[][]
    axisColors: string[]
  }
}

export const themes: Theme[] = [lightTheme, darkTheme]

let _theme: Theme = $state(themes[0])

export function getTheme() {
  return _theme
}

// CSS variable name → value extractor. Only fields read from CSS appear here;
// fields read directly via getTheme() (canvas.foreground, canvas.axisColors,
// secondary isometry shades, githubImage) do not.
const cssVars: Record<string, (t: Theme) => string> = {
  '--ui-background': t => t.ui.background,
  '--ui-textColor': t => t.ui.textColor,
  '--ui-border': t => t.ui.border,
  '--ui-focusBorder': t => t.ui.focusBorder,
  '--ui-thickBorder': t => t.ui.thickBorder,
  '--isometry-1': t => t.canvas.isometryColors[0][0],
  '--isometry-2': t => t.canvas.isometryColors[1][0],
}

export function setThemeByName(name: string) {
  const theme = themes.find(t => t.name === name) ?? themes[0]
  _theme = theme
  const style = document.documentElement.style
  for (const [k, get] of Object.entries(cssVars)) {
    style.setProperty(k, get(theme))
  }
}
