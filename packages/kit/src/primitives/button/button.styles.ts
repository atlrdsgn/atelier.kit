import {KitTheme, KitColors, css, styled, VariantProps} from '../../theme'

const baseButtonConfig = {
  all: 'unset',

  display: 'inline-flex',
  position: 'relative',
  flexShrink: 0,

  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',

  backgroundColor: 'inherit',

  lineHeight: 'normal',

  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // transitions.
  transition: 'all 220ms ease-in-out',
}

const TAG = css('button', {})

const baseButton = styled(TAG, {
  ...baseButtonConfig,

  // default..
  fontFamily: KitTheme.theme.fonts.sans,
  fontWeight: KitTheme.theme.fontWeights['semibold'],
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
        color: KitColors.white,
        backgroundColor: KitColors.helios5,
        background: KitColors.helios6,
        border: `1.6px solid ${KitColors.primaryBorder}`,
        boxShadow: `0px 2px 2px rgba(0, 0, 0, 0)`,
        boxSizing: `border-box`,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: KitColors.helios6,
          background: KitColors.helios6,
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

export const StyledButton = baseButton
export type ButtonVariantProps = VariantProps<typeof baseButton>

/**
 *
 * Expiremental styles.
 *
 *
 * maskImage: `-webkit-radial-gradient(center, rgb(255, 255, 255), rgb(0, 0, 0));
 * -webkit-radial-gradient(center, rgb(255, 255, 255), rgb(0, 0, 0))
 * 
 * 
 * .glow_button__UdtqY {
    --button-background: #161616;
    --button-shadow: rgba(0,0,0,0.2);
    --button-shine-left: hsla(40,22%,92%,0.3);
    --button-shine-right: hsla(40,22%,92%,0.1);
    --button-glow-start: hsla(40,22%,92%,0.2);
    --button-glow-end: #efece6;
    --button-text-color: #efece6;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 8px;
    column-gap: 8px;
    z-index: 10;
    appearance: none;
    outline-color: initial;
    outline-style: none;
    outline-width: initial;
    border-top-width: initial;
    border-right-width: initial;
    border-bottom-width: initial;
    border-left-width: initial;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    border-top-color: initial;
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    background-color: transparent;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    min-width: 100px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    box-shadow: 0 6px 20px var(--button-shadow);
    cursor: pointer;
}
 */
