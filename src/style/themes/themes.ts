import { derived, writable } from 'svelte/store';

import darkTheme from './dark';
import lightTheme from './light';

export interface Theme {
  name: string,
  ui: {
    background: string,
    textColor: string,
    border: string,
    focusBorder: string,
    thickBorder: string,
  },
  canvas: {
    foreground: string,
    isometryColors: string[][],
    axisColors: string[]
  }
}

export const themes: Theme[] = [lightTheme, darkTheme]

export const theme = writable(themes[0])
export const themeCSS = derived(
  theme,
  $theme => ({
    bgColor: $theme.ui.background,
    borderColor: $theme.ui.border,
    focusBorderColor: $theme.ui.focusBorder,
    textColor: $theme.ui.textColor,
    thickBorderColor: $theme.ui.thickBorder,
    isometry1Color: $theme.canvas.isometryColors[0][0],
    isometry2Color: $theme.canvas.isometryColors[1][0]
  })
)