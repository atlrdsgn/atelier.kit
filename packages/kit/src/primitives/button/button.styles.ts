import {KitTheme, KitColors, css, styled, VariantProps} from '../../theme'

const TAG = css('button', {})

const baseButton = styled(TAG, {
  all: 'unset',
  transition: 'all 250ms ease-in-out',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  fontFamily: KitTheme.theme.fonts.sans,
  fontWeight: KitTheme.theme.fontWeights['semibold'],

  fontVariantNumeric: 'tabular-nums',

  backgroundColor: 'white',
  position: 'relative',
  color: KitColors.slate12,

  variants: {
    /**
     *
     * ..sizing
     */
    size: {
      xs: {
        fontSize: KitTheme.theme.fontSizes['xs'],
        borderRadius: KitTheme.theme.radii['sm'],
        padding: '4px 10px',
      },
      sm: {
        fontSize: KitTheme.theme.fontSizes['sm'],
        borderRadius: KitTheme.theme.radii['md'],
        padding: '6px 14px',
      },
      md: {
        fontSize: KitTheme.theme.fontSizes['md'],
        borderRadius: KitTheme.theme.radii['lg'],
        padding: '8px 18px',
      },
      lg: {
        fontSize: KitTheme.theme.fontSizes['lg'],
        borderRadius: KitTheme.theme.radii['lg'],
        padding: '10px 22px',
      },
    },

    /**
     *
     * ..variants
     */
    primary: {
      true: {
        color: 'white',
        backgroundColor: KitColors.helios6,
        background: KitColors.helios6,
        border: `1.6px solid ${KitColors.primaryBorder}`,
        boxShadow: `0px 2px 2px rgba(0, 0, 0, 0)`,
        boxSizing: `border-box`,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: KitColors.helios7,
          background: KitColors.helios5,
          boxShadow: `0px 2px 2px rgba(0, 0, 0, 0.09)`,
          borderColor: KitColors.primaryBorderHover,
          cursor: 'pointer',
        },
      },
    },

    secondary: {
      true: {
        color: KitColors.secondaryGray,
        backgroundColor: KitColors.white,
        background: KitColors.white,
        border: `1.5px solid ${KitColors.secondaryBorder}`,
        alignItems: 'center',
        justifyContent: 'center',

        '&:hover': {
          backgroundColor: KitColors.white,
          borderColor: KitColors.slate10,
          cursor: 'pointer',
        },
      },
    },

    ghost: {
      true: {
        boxShadow: 'none',

        color: KitColors.slate10,
        backgroundColor: KitColors.slateA2,
        background: KitColors.slateA2,
        alignItems: 'center',
        justifyContent: 'center',
        border: `1.5px solid ${KitColors.transparent}`,

        '&:hover': {
          boxShadow: 'none',
          border: `1.5px solid ${KitColors.transparent}`,
          color: KitColors.slate11,
          backgroundColor: KitColors.slateA3,
          cursor: 'pointer',
        },
      },
    },
    neon: {
      true: {
        color: KitColors.secondaryGray,
        backgroundColor: KitColors.white,
        background: KitColors.white,
        border: `1.5px solid ${KitColors.slate5}`,
        alignItems: 'center',
        justifyContent: 'center',

        '&:hover': {
          backgroundColor: KitColors.slate2,
          border: `1.5px solid ${KitColors.slateA4}`,
          cursor: 'pointer',

          boxShadow: `
          2px 0px 4px 0px ${KitColors.helios4}, 
          0px 2px 3px 0px ${KitColors.burn4}, 
          -2px 0px 4px 0px ${KitColors.lime9}
          `,
        },
      },
    },
    rainbow: {
      true: {
        color: KitColors.secondaryGray,
        backgroundColor: KitColors.white,
        background: KitColors.white,
        border: `1.5px solid ${KitColors.slate5}`,
        alignItems: 'center',
        justifyContent: 'center',

        boxShadow: `
          2px 0px 4px 0px ${KitColors.helios4}, 
          0px 2px 3px 0px ${KitColors.burn4}, 
          -2px 0px 4px 0px ${KitColors.lime9}
        `,

        '&:hover': {
          backgroundColor: KitColors.slate2,
          border: `1.5px solid ${KitColors.slateA4}`,

          boxShadow: `
          2px 0px 4px 0px ${KitColors.lime9}, 
          0px 2px 3px 0px ${KitColors.helios4}, 
          -2px 0px 4px 0px ${KitColors.burn4}
        `,
        },
      },
    },
  },

  /**
   *
   *
   * ..default variants
   */
  defaultVariants: {
    size: 'sm',
    primary: true,
    secondary: false,
    neon: false,
    rainbow: false,
    ghost: false,
  },
})

const StyledHref = styled('a', {
  transition: 'inherit',
})

const internalStyles = {
  position: 'relative',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  textDecoration: 'none',
  verticalAlign: 'middle',
  border: 'none',
  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  '&::-moz-focus-inner ': {
    border: 0,
  },
}

export const LinkComp = StyledHref
export const InternalStyles = internalStyles

export const ButtonComponent = baseButton
export type ButtonVariantProps = VariantProps<typeof baseButton>
