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

export function setThemeByName(name: string) {
  const theme = themes.find((t) => t.name === name) ?? themes[0]
  _theme = theme

  const vars: Record<string, string> = {
    '--bgColor': theme.ui.background,
    '--textColor': theme.ui.textColor,
    '--borderColor': theme.ui.border,
    '--focusBorderColor': theme.ui.focusBorder,
    '--thickBorderColor': theme.ui.thickBorder,
    '--isometry1Color': theme.canvas.isometryColors[0][0],
    '--isometry2Color': theme.canvas.isometryColors[1][0],
  }
  for (const [k, v] of Object.entries(vars)) {
    document.documentElement.style.setProperty(k, v)
  }
}