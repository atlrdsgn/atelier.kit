import {Auto, Dark, Light} from '../../theme/base'
import {Languages as Lang} from './localizations'
export type Languages = Lang

export type Theme = 'auto' | 'soft' | 'midnight'
export type themeContext = 'auto-theme' | 'light-theme' | 'dark-theme'
export type Mode = 'auto-theme' | 'light-theme' | 'dark-theme'
export type CustomTheme = any

export type All = {
  theme?: Theme
  context?: themeContext
  autoTheme?: boolean | typeof Auto
  lightTheme?: boolean | typeof Light
  darkTheme?: boolean | typeof Dark
  mode?: Mode
  customTheme?: CustomTheme
  lang?: Languages
}
