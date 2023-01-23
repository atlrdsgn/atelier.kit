import {KitColors, css, KitTheme, styled, VariantProps} from '../../theme'

const coreDefaults = {
  all: 'unset',
  fontFamily: KitTheme.theme.fonts.sans,
  font: KitTheme.theme.fonts.sans,
  textDecoration: 'none',
  color: KitColors.slate12,
  backgroundColor: 'transparent',
  background: 'none',
  margin: '0',
}

const headingStyles = css({
  ...coreDefaults,

  lineHeight: '1.5',
  fontWeight: 'inherit',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      '1': {
        fontSize: KitTheme.theme.fontSizes['6xl'],
        letterSpacing: '-0.05em',

        '@sm': {
          fontSize: KitTheme.theme.fontSizes['4xl'],
        },
      },
      '2': {
        fontSize: KitTheme.theme.fontSizes['3xl'],
        letterSpacing: '-0.04em',
      },
      '3': {
        fontSize: KitTheme.theme.fontSizes['xl'],
        letterSpacing: '-0.03em',
      },
      '4': {
        fontSize: KitTheme.theme.fontSizes['lg'],
        letterSpacing: '-0.02em',
      },
      '5': {
        fontSize: KitTheme.theme.fontSizes['md'],
      },
      '6': {
        fontSize: KitTheme.theme.fontSizes['sm'],
      },
    },

    weight: {
      default: {
        fontWeight: KitTheme.theme.fontWeights.bold,
      },
      heavy: {
        fontWeight: KitTheme.theme.fontWeights.heavy,
      },
      black: {
        fontWeight: KitTheme.theme.fontWeights.black,
      },
      lite: {
        fontWeight: KitTheme.theme.fontWeights.lite,
      },
    },

    color: {
      primary: {
        color: KitColors.slate12,
      },
      secondary: {
        color: KitColors.slate11,
      },
      helios: {
        color: KitColors.helios7,
      },
      fizz: {
        color: KitColors.fizz7,
      },
      mauve: {
        color: KitColors.mauve8,
      },
      slate: {
        color: KitColors.slate8,
      },
      white: {
        color: KitColors.white,
      },
      black: {
        color: KitColors.black,
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    size: '1',
    color: 'primary',
    weight: 'default',
    gradient: false,
  },
})

export const HeadingContent = styled('h1', headingStyles)
export type HeadingVariantProps = VariantProps<typeof headingStyles>
