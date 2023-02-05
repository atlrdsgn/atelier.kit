import React, {createContext, createElement} from 'react'
import {CustomTheme, Mode, Theme} from './provider.types'

type ContextValue = {
  theme?: Theme
  mode?: Mode
  customTheme?: CustomTheme
}

const Context = createContext<ContextValue | null>(null)

type AtelierKitThemeProviderProps = {
  children?: React.ReactNode
  theme?: Theme
  mode?: Mode
  customTheme?: CustomTheme
}

export const AtelierKitThemeProvider: React.FC<AtelierKitThemeProviderProps> = ({
  children,
  theme = 'auto',
  mode = 'auto',
  customTheme,
}) => {
  const value = {
    theme,
    mode,
    customTheme,
  }

  return createElement(Context.Provider, {value}, <>{children}</>)
}

export const useThemeContext = () => {
  const context = React.useContext(Context)
  if (!context) throw Error('AtelierKit must be inside a Provider.')
  return context
}
