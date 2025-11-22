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
  setTheme(theme)
}

function setTheme(theme: Theme) {
  const html = document.documentElement
  html.style.setProperty('--bgColor', theme.ui.background)
  html.style.setProperty('--textColor', theme.ui.textColor)
  html.style.setProperty('--borderColor', theme.ui.border)
  html.style.setProperty('--focusBorderColor', theme.ui.focusBorder)
  html.style.setProperty('--thickBorderColor', theme.ui.thickBorder)
  html.style.setProperty('--isometry1Color', theme.canvas.isometryColors[0][0])
  html.style.setProperty('--isometry2Color', theme.canvas.isometryColors[1][0])
}