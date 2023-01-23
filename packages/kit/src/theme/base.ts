import type * as Stitches from '@stitches/react'
import {createStitches, defaultThemeMap, createTheme} from '@stitches/react'
import {kitColors, kitDarkColors} from '../color'
import {
  kitBorderWidths,
  kitBreakpoints,
  kitRadii,
  kitSpace,
  kitZIndices,
  kitFonts,
  kitFontSizes,
  kitFontWeights,
} from './src'

/**
 *
 *
 *
 *
 * @baseTokens for styling components.
 *
 * passing all values forward as [baseTokens].
 *
 */
const baseTokens = {
  ...kitFonts,
  ...kitFontSizes,
  ...kitFontWeights,
  ...kitSpace,
  ...kitRadii,
  ...kitZIndices,
  ...kitBorderWidths,
}

/**
 *
 *
 *
 * @baseColors
 *
 * passing all values forward as [baseColors].
 *
 * later extending use with KitColors.color as the final token.
 *
 */
const baseColors = {
  ...kitColors,
}

const baseDarkColors = {
  ...kitDarkColors,
}

/**
 *
 *
 *
 * @baseMedia
 *
 * passing all values forward as [baseMedia].
 *
 * later extending use with KitMedia.size as the final token.
 *
 */
const baseMedia = {
  xs: `(max-width: ${kitBreakpoints.xs})`, // 480px
  sm: `(max-width: ${kitBreakpoints.sm})`, // 520px
  md: `(max-width: ${kitBreakpoints.md})`, // 960px
  lg: `(max-width: ${kitBreakpoints.lg})`, // 1280px
  xl: `(max-width: ${kitBreakpoints.xl})`, // 1920px
  full: `(min-width: ${kitBreakpoints.full})`, // 100vw
  initial: `(max-width: ${kitBreakpoints.initial})`, // 100vw
  motion: '(prefers-reduced-motion: reduce)',
  safari: 'not all and (min-resolution:.001dpcm)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
}

/**
 *
 *
 * @ThemeMap
 *
 * this maps the css properties to accept our tokens.
 *
 */
export const baseMap = {
  /**
   *
   * using Stitches defaultThemeMap to start with.
   */
  ...defaultThemeMap,

  width: 'space',
  height: 'space',
  minWidth: 'space',
  maxWidth: 'space',
  minHeight: 'space',
  maxHeight: 'space',
  flexBasis: 'space',
  gridTemplateColumns: 'space',
  gridTemplateRows: 'space',
  blockSize: 'space',
  minBlockSize: 'space',
  maxBlockSize: 'space',
  inlineSize: 'space',
  minInlineSize: 'space',
  maxInlineSize: 'space',
}

/**
 *
 *
 * This the main stitches config.
 *
 * where all css tokens are generated from.
 * if a value does not derive from [baseKitTheme] it will be ignored.
 *
 * for Stitches Config Documentation
 * see https://stitches.dev/docs/introduction
 *
 * config file accepts:
 * - prefix: string
 * - theme: object
 *    - color: object
 *    - utils: object
 * - media: object
 * - themeMap: object
 * - utils: object
 * - breakpoints: object
 *
 */
const baseKitTheme = {
  prefix: 'kit',
  theme: {
    ...baseTokens,
    colors: baseColors,
  },
  media: baseMedia,
  themeMap: baseMap,
}

/** --------------------------------------------------------------------- **/
/** ----------------------- EXPORTS -------------------- **/
/** ------------------------------------------------------------- **/

/**
 *
 * @main theme export..
 * pull all tokens from here..
 *
 * @KitTheme.xxx
 */
export const KitTheme = baseKitTheme

/**
 *
 * create stitches config..
 */
const stitches = createStitches({
  ...KitTheme,
  theme: {
    ...KitTheme.theme,
    colors: {
      ...KitTheme.theme.colors,
    },
  },
})

/**
 *
 *
 * @darkTheme
 *
 * we will build this soon.
 *
 * coming soon.
 *
 */
const darkTheme = createTheme('dark-theme', {
  //...
  colors: {
    ...baseDarkColors,
  },
})

export const createThemeBase = stitches.createTheme
export const createDarkTheme = stitches.createTheme
export const styled = stitches.styled
export const css = stitches.css
export const globalCss = stitches.globalCss
export const keyframes = stitches.keyframes
export const getCssText = stitches.getCssText
export const theme = stitches.theme
export const kit_theme = stitches.theme
export const config = stitches.config
export const reset = stitches.reset

export type StitchesConfig = typeof config
export type VariantProps<T extends {[key: string]: any; [key: symbol]: any}> =
  Stitches.VariantProps<T>
export type PropertyValue<T extends keyof Stitches.CSSProperties> = Stitches.PropertyValue<T>
export type ScaleValue<T> = Stitches.ScaleValue<T>
export type CSSProperties = Stitches.CSSProperties
export type CSS = Stitches.CSS<StitchesConfig>
export type StitchesTheme = typeof theme

export type FontSizes = StitchesConfig['theme']['fontSizes']
export type Fonts = StitchesConfig['theme']['fonts']
export type Space = StitchesConfig['theme']['space']
export type FontWeights = StitchesConfig['theme']['fontWeights']
export type Colors = StitchesConfig['theme']['colors']
export type Radii = StitchesConfig['theme']['radii']
export type zIndices = StitchesConfig['theme']['zIndices']
export type Breakpoints = StitchesConfig['media']

export const KitColors = KitTheme.theme.colors
export const KitMedia = KitTheme.media
export const KitPrefix = KitTheme.prefix

export {darkTheme}
