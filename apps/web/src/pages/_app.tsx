import * as React from 'react'
import '@/styles/globals.css'
import {ThemeProvider} from 'next-themes'
import type {NextComponentType, NextPageContext} from 'next'
import type {AppProps} from 'next/app'
import {globalCss, KitColors} from 'atlr.kit'

const globalStyles = globalCss({
  html: {
    margin: 0,
    padding: 0,
    backgroundColor: KitColors.slate2,
  },
  body: {
    margin: 0,
    WebkitTextSizeAdjust: '100%',
    backgroundColor: KitColors.slate2,
    color: KitColors.slate12,
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
      <ThemeProvider attribute="class">{getLayout({Component, pageProps, ...rest})}</ThemeProvider>
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
