import {globalCss, KitColors} from '../../theme'

import {baseFace, monoFace, pragmaticaFace} from './font.types'
import {KitTheme} from '../../theme'

const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: baseFace,
      fontWeight: KitTheme.theme.fontWeights.normal,
      src: `url("assets/fonts/Inter-Regular.woff") format("woff")`,
      fontDisplay: 'swap',
    },
    {
      fontFamily: baseFace,
      fontWeight: KitTheme.theme.fontWeights.semibold,
      src: `url("assets/fonts/Inter-SemiBold.woff") format("woff")`,
      fontDisplay: 'swap',
    },
    {
      fontFamily: monoFace,
      src: `url("assets/fonts/FiraCode-Regular.woff") format("woff")`,
      fontDisplay: 'swap',
    },
    {
      fontFamily: pragmaticaFace,
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

export const coreStyles = globalStyles
