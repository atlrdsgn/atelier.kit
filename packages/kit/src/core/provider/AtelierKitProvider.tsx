import * as React from 'react'
import {CustomTheme, Mode, Theme, All} from './provider.types'

type ContextValue = {
  theme?: Theme
  mode?: Mode
  autoTheme?: All['autoTheme']
  lightTheme?: All['lightTheme']
  darkTheme?: All['darkTheme']
  customTheme?: CustomTheme
}

const Context = React.createContext<ContextValue | null>(null)

type KitThemeProviderProps = {
  children?: React.ReactNode
  theme?: Theme
  mode?: Mode
  autoTheme?: All['autoTheme']
  lightTheme?: All['lightTheme']
  darkTheme?: All['darkTheme']
  customTheme?: CustomTheme
}

export const KitThemeProvider: React.FC<KitThemeProviderProps> = ({
  children,
  theme = 'auto',
  mode = 'light-theme',

  autoTheme = true,
  lightTheme = false,
  darkTheme = false,
  customTheme,
}) => {
  const value = {
    theme,
    mode,
    autoTheme,
    lightTheme,
    darkTheme,
    customTheme,
  }

  return React.createElement(Context.Provider, {value}, <>{children}</>)
}

export const useThemeContext = () => {
  const context = React.useContext(Context)
  if (!context) throw Error('AtelierKit must be inside a Provider.')
  return context
}

/**
 *
 * usage:
 *
 * So perfect case scenario, you have a theme provider at the root of your app.
 * We can then pass the theme value and the mode value to the provider, like so:
 *
 * <AtelierKitThemeProvider theme="light" mode="light" autoTheme>
 */
