import {KitColors, KitTheme, styled, VariantProps} from '../../theme'

const coreDefaults = {
  all: 'unset',
  fontFamily: KitTheme.theme.fonts.sans,
  font: KitTheme.theme.fonts.sans,
  fontSize: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'none',
  color: KitColors.slate12,
  backgroundColor: 'transparent',
  background: 'none',
  margin: 0,
}

const styledLink = styled('a', {
  ...coreDefaults,

  transition: 'inherit',
  curser: 'pointer',

  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    /**
     *
     *
     * Underline?: boolean...
     *
     *
     *
     */
    underline: {
      true: {
        '&:hover': {
          textDecoration: 'underline',
          textUnderlineOffset: '0.2em',
        },
      },
    },
    /**
     *
     *
     * button?: boolean...
     *
     *
     */
    button: {
      true: {
        padding: '0.5em 1em',
        borderRadius: '0.5em',
        backgroundColor: KitColors.slate10,
      },
    },

    /**
     *
     *
     * Size variants...
     *
     *
     *
     */
    size: {
      inherit: {
        fontSize: 'inherit',
      },
      xs: {
        fontSize: KitTheme.theme.fontSizes['xs'],
      },
      sm: {
        fontSize: KitTheme.theme.fontSizes['sm'],
      },
      md: {
        fontSize: KitTheme.theme.fontSizes['md'],
      },
      lg: {
        fontSize: KitTheme.theme.fontSizes['lg'],
      },
    },
    /**
     *
     *
     * Color variants...
     * default | slate | white | black | helios | fizz | mauve | sky
     *
     * string..
     *
     *
     */
    color: {
      inherit: {
        color: 'inherit',
        '&:hover': {
          color: 'inherit',
        },
      },
      default: {
        color: KitColors.slate12,
        '@hover': {
          '&:hover': {
            color: KitColors.slate11,
          },
        },
      },
      slate: {
        color: KitColors.slate9,
        '&:hover': {
          color: KitColors.slate8,
        },
      },
      white: {
        color: KitColors.white,
        '&:hover': {
          color: KitColors.slate2,
        },
      },
      black: {
        color: KitColors.black,
        '&:hover': {
          color: KitColors.slate11,
        },
      },
      helios: {
        color: KitColors.helios6,
        '&:hover': {color: KitColors.helios5},
      },
      fizz: {
        color: KitColors.fizz6,
        '&:hover': {color: KitColors.fizz7},
      },
      mauve: {
        color: KitColors.mauve6,
        '&:hover': {color: KitColors.mauve7},
      },
      sky: {
        color: KitColors.sky6,
        '&:hover': {color: KitColors.sky6},
      },
    },
    /**
     *
     * Monospace font...
     *
     */
    sans: {
      true: {
        fontFamily: KitTheme.theme.fonts.sans,
      },
    },
    mono: {
      true: {
        fontFamily: KitTheme.theme.fonts.mono,
      },
    },
  },
  defaultVariants: {
    size: 'inherit',
    color: 'inherit',
    underline: false,
    button: false,

    mono: false,
  },
})

export const LinkPrimitive = styledLink
export type PassLinkVariantProps = VariantProps<typeof styledLink>
