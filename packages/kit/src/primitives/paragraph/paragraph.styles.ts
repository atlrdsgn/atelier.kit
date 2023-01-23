import {css, KitColors, KitTheme, styled, VariantProps} from '../../theme'

const coreDefaults = {
  all: 'unset',
  lineHeight: '1.4',
  margin: 0,
  fontFamily: KitTheme.theme.fonts.sans,
  fontWeight: 'inherit',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  color: KitColors.slate12,
}
const paragraphStyles = css({
  ...coreDefaults,

  variants: {
    size: {
      xs: {
        fontSize: KitTheme.theme.fontSizes['xs'],
      },
      sm: {
        fontSize: KitTheme.theme.fontSizes['sm'],
      },
      md: {
        fontSize: KitTheme.theme.fontSizes['md'],
        '@sm': {
          fontSize: KitTheme.theme.fontSizes['sm'],
        },
      },
      lg: {
        fontSize: KitTheme.theme.fontSizes['lg'],
        '@sm': {
          fontSize: KitTheme.theme.fontSizes['md'],
        },
      },
      xl: {
        fontSize: KitTheme.theme.fontSizes['xl'],
      },
    },

    color: {
      slate: {
        color: KitColors.slate11,
      },
      slateLite: {
        color: KitColors.slate9,
      },
      mauve: {
        color: KitColors.mauve11,
      },
    },

    align: {
      left: {
        textAlign: 'left',
        alignContent: 'flex-start',
      },
      center: {
        textAlign: 'center',
        alignContent: 'center',
      },
      right: {
        textAlign: 'right',
        alignContent: 'flex-end',
      },
    },

    weight: {
      lite: {
        fontWeight: KitTheme.theme.fontWeights.lite,
      },
      normal: {
        fontWeight: KitTheme.theme.fontWeights.normal,
      },
      medium: {
        fontWeight: KitTheme.theme.fontWeights.medium,
      },
      bold: {
        fontWeight: KitTheme.theme.fontWeights.bold,
      },
    },
  },
  defaultVariants: {
    size: 'xs',
    color: 'slate',
    align: 'left',
    weight: 'normal',
  },
})

export const ParagraphContent = styled('span', paragraphStyles)
export type ParagraphVariantProps = VariantProps<typeof paragraphStyles>
