import * as React from 'react'

/**
 *
 * const useTheme = () => React.useContext(ThemeContext)
 *
 * KitTheme.light
 * KitTheme.dark
 */
type KitMode = 'auto-theme' | 'light-theme' | 'dark-theme'

type ThemeContextValue = {
  theme: KitMode
  toggleTheme: any
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: 'light-theme',
  toggleTheme: null,
})

const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (!context) throw Error('Atelier® Kit components must be used within [KitProvider]')
  return context
}

///////////////////////////////////////////////////////////////////////////
export {ThemeContext}
export type {ThemeContextValue}
///////////////////////////////////////////////////////////////////////////
export type {KitMode}
///////////////////////////////////////////////////////////////////////////
export const themeModeAttribute = 'data-theme'
export {useTheme}
///////////////////////////////////////////////////////////////////////////
