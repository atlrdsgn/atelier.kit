export {css, styled, globalCss, keyframes, getCssText, theme, config, reset} from './base'
export {getCssAndReset} from './style'

/**
 *
 * @globals
 */
export {KitTheme} from './base'
export {KitColors} from './base'
export {KitMedia} from './base'
export {autoTheme} from './base'
export {lightTheme} from './base'
export {darkTheme} from './base'

/**
 *
 * @utils
 */
export {generateColorArray} from './utils'
export type {ThemeScaleObject} from './utils'

/**
 *
 * @types
 */
export type {
  // ...Theme Types
  Colors,
  FontSizes,
  Fonts,
  FontWeights,
  Radii,
  zIndices,
  Breakpoints,
  // ...Stitches Types
  StitchesConfig,
  VariantProps,
  PropertyValue,
  ScaleValue,
  CSSProperties,
  CSS,
  StitchesTheme,
} from './base'
