import {css, reset, getCssText, globalCss, KitColors} from './base'

import {baseFace, monoFace, kitFace, pragFace, faceWeights} from './font-kit/types'

/**
 *
 *
 *
 * core.
 */
const coreStyles = globalCss({
  '@font-face': [
    {
      fontFamily: baseFace,
      fontWeight: faceWeights[400],
      src: `url("assets/fonts/Inter-Regular.woff") format("woff"), url("assets/fonts/Inter-Regular.woff2") format("woff2")`,
      fontDisplay: 'swap',
    },
    {
      fontFamily: baseFace,
      fontWeight: faceWeights[500],
      src: `url("assets/fonts/Inter-SemiBold.woff") format("woff"), url("assets/fonts/Inter-SemiBold.woff2") format("woff2")`,
      fontDisplay: 'swap',
    },
    {
      fontFamily: monoFace,
      src: `url("assets/fonts/EKModena-Regular.woff") format("woff"), url("assets/fonts/EKModena-Regular.woff2") format("woff2")`,
      fontDisplay: 'swap',
    },
    {
      fontFamily: kitFace,
      fontWeight: faceWeights[400],
      src: `url("font-kit/Kit-Regular.woff") format("woff"), url("font-kit/Kit-Regular.woff2") format("woff2")`,
      fontDisplay: 'swap',
    },
    {
      fontFamily: kitFace,
      fontWeight: faceWeights[500],
      src: `url("font-kit/Kit-SemiBold.woff") format("woff"), url("font-kit/Kit-SemiBold.woff2") format("woff2")`,
      fontDisplay: 'swap',
    },
    {
      fontFamily: pragFace,
      src: `url("assets/fonts/Pragmatica.woff") format("woff")`,
      fontDisplay: 'swap',
    },
  ],

  '*, *::before, *::after': {
    boxSizing: 'border-box',
    fontSmooth: 'antialiased',
    '-webkit-font-smoothing': 'antialiased',
  },

  'html, body': {
    backgroundColor: KitColors.slate1,
    height: '100%',

    WebkitTextSizeAdjust: '100%',
  },

  html: {
    margin: 0,
    padding: 0,
    fontSize: '10px',
  },

  body: {
    opacity: 0,
    margin: 0,
    fontSize: '1.6rem',
    lineHeight: 1.6,
    letterSpacing: '-0.025em',
    fontFamily: '$base',
    overflowX: 'hidden',
  },

  '::selection': {
    backgroundColor: '$primary',
    color: '$lightTextPrimary',
  },

  'a, a:visited': {
    color: 'inherit',
    textDecoration: 'none',
  },

  code: {
    fontFamily: '$mono',
  },

  '.sp-wrapper *::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
    opacity: 0,
    display: 'none',
    transition: 'opacity 0.1s ease',
  },
  '.sp-wrapper *:hover::-webkit-scrollbar': {display: 'block', opacity: 1},
  '.sp-wrapper *::-webkit-scrollbar-track': {
    backgroundColor: 'var(--sp-colors-bg-default)',
    boxShadow: 'none',
    borderLeft: '1px solid var(--sp-colors-fg-inactive)',
  },
  '.sp-wrapper *::-webkit-scrollbar-corner': {backgroundColor: 'transparent'},
  '.sp-wrapper *::-webkit-scrollbar-thumb': {
    backgroundColor: 'var(--sp-colors-fg-default)',
    borderRadius: '9999px',
    opacity: 0,
  },
  '.sp-wrapper *::-webkit-scrollbar-thumb:hover': {opacity: 1},
})

/**
 *
 *
 *
 *
 * reset.
 */
const globalResets = {
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section': {
    display: 'block',
  },
  '*[hidden]': {
    display: 'none',
  },
  body: {
    lineHeight: '1',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
    // @ts-ignore
    content: 'none',
  },
  table: {
    borderSpacing: '0',
  },
}

const cssReset = css(globalResets, reset)

// exports.
export const getCssAndReset = () => {
  const css = getCssText()

  cssReset()
  coreStyles()

  return css
}
