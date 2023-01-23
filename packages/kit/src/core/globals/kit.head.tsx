import {getCssText, reset} from '../../theme'
import {coreStyles} from './global.styles'
import {cssReset} from './reset'

const getCssAndReset = () => {
  const css = getCssText()

  reset()
  cssReset()
  coreStyles()

  return css
}

export const KitFontProvider = () => {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="stylesheet" href="https://fonts.atlrdsgn.com/lateral.css" />

      <style id={'stitches'} dangerouslySetInnerHTML={{__html: getCssAndReset()}} />
    </head>
  )
}

/**
 *
 * In a next.js app, you can import this file in _app.tsx
 *
 * import Head from 'next/head'
 * import {KitFontProvider} from 'atelier.kit'
 *
 * () => (
 * <Head>
 *  <KitFontProvider />
 * </Head>
 * )
 *
 */
