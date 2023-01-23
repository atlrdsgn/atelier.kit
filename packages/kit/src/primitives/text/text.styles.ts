import {KitColors, KitTheme, css, styled, VariantProps} from '../../theme'

const textStyles = css({
  /**
   *
   *
   * Resets...
   *
   *
   */
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: 'inherit',
  lineHeight: '1.3',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    mono: {
      true: {
        fontFamily: KitTheme.theme.fonts.mono,
      },
    },
    size: {
      xs: {
        fontSize: KitTheme.theme.fontSizes.xs,
      },
      sm: {
        fontSize: KitTheme.theme.fontSizes.sm,
      },
      md: {
        fontSize: KitTheme.theme.fontSizes.md,
      },
      lg: {
        fontSize: KitTheme.theme.fontSizes.lg,
      },
      xl: {
        fontSize: KitTheme.theme.fontSizes.xl,
      },
      '2xl': {
        fontSize: KitTheme.theme.fontSizes['2xl'],
      },
      '3xl': {
        fontSize: KitTheme.theme.fontSizes['3xl'],
      },
      '4xl': {
        fontSize: KitTheme.theme.fontSizes['4xl'],
      },
      '5xl': {
        fontSize: KitTheme.theme.fontSizes['5xl'],
      },
      '6xl': {
        fontSize: KitTheme.theme.fontSizes['6xl'],
      },
      '7xl': {
        fontSize: KitTheme.theme.fontSizes['7xl'],
      },
      '8xl': {
        fontSize: KitTheme.theme.fontSizes['8xl'],
      },
      '9xl': {
        fontSize: KitTheme.theme.fontSizes['9xl'],
      },
    },
    weight: {
      superlite: {
        fontWeight: KitTheme.theme.fontWeights.superlite,
      },
      lite: {
        fontWeight: KitTheme.theme.fontWeights.lite,
      },
      normal: {
        fontWeight: KitTheme.theme.fontWeights.normal,
      },
      medium: {
        fontWeight: KitTheme.theme.fontWeights.medium,
      },
      semibold: {
        fontWeight: KitTheme.theme.fontWeights.semibold,
      },
      bold: {
        fontWeight: KitTheme.theme.fontWeights.bold,
      },
      heavy: {
        fontWeight: KitTheme.theme.fontWeights.heavy,
      },
    },
    color: {
      primary: {
        color: KitColors.primaryGray,
      },
      secondary: {
        color: KitColors.secondaryGray,
      },
      slate: {
        color: KitColors.slate11,
      },
    },
    align: {
      left: {
        textAlign: 'left',
        alignContent: 'left',
        alignItems: 'left',
      },
      center: {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
      right: {
        textAlign: 'right',
        alignContent: 'right',
        alignItems: 'right',
      },
    },
  },
  defaultVariants: {
    mono: false,
    size: 'md',
    weight: 'normal',
    color: 'primary',
    align: 'left',
  },
})

export const TextPrimitive = styled('span', textStyles)
export type TextVariantProps = VariantProps<typeof textStyles>
