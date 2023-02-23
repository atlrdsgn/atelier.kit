import * as React from 'react'
import {KitMode, ThemeContext} from './context'
import {theme, LightTheme, DarkTheme, Light, Dark} from '../../base'

/**
 *
 * using baseClass, darkClass, kitClass for now to infer.
 *
 * maybe try to import kit for baseClass.
 */

export interface ThemeProviderProps {
  defaultTheme?: KitMode
}

export const KitProvider = ({
  children,
}: // defaultTheme,
React.PropsWithChildren<ThemeProviderProps>) => {
  const [selectedTheme, setSelectedTheme] = React.useState<KitMode>('light-theme')

  const toggleTheme = () => {
    setSelectedTheme((prevValue) => (prevValue === 'light-theme' ? 'dark-theme' : 'light-theme'))
  }

  const colorMode = selectedTheme === Light ? Light : Dark

  return (
    <ThemeContext.Provider
      value={{
        theme: selectedTheme,
        toggleTheme,
      }}>
      <div className={`${theme.className} ${colorMode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
