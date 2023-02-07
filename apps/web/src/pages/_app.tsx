import * as React from 'react'
import '@/styles/globals.css'
import {ThemeProvider} from 'next-themes'
import type {NextComponentType, NextPageContext} from 'next'
import type {AppProps} from 'next/app'
import {AtelierKitThemeProvider, globalCss, KitTheme, darkTheme} from 'atlr.kit'

const globalStyles = globalCss({
  html: {
    margin: 0,
    padding: 0,
    backgroundColor: KitTheme.theme.colors.white,
  },
  body: {
    margin: 0,
    WebkitTextSizeAdjust: '100%',
    backgroundColor: KitTheme.theme.colors.white,
    color: KitTheme.theme.colors.gray11,
  },
})

const Context = React.createContext<{fontsLoaded: boolean}>({
  fontsLoaded: false,
})
export const useAppContext = () => React.useContext(Context)

function App({Component, pageProps, ...rest}: AppProps) {
  globalStyles()

  const getLayout: GetLayoutFn =
    (Component as any).getLayout || (({Component, pageProps}) => <Component {...pageProps} />)

  return (
    <>
      <ThemeProvider attribute="class" value={{light: 'light-theme', dark: darkTheme.className}}>
        <AtelierKitThemeProvider theme={'auto'} mode={'light'}>
          {getLayout({Component, pageProps, ...rest})}
        </AtelierKitThemeProvider>
      </ThemeProvider>
    </>
  )
}

export type Page<P = Record<string, unknown>> = NextComponentType<
  NextPageContext,
  Record<string, unknown>,
  P
> & {
  getLayout?: GetLayoutFn<P>
}

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & {pageProps: P}
) => React.ReactNode

export default App
