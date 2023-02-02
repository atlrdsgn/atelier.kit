import {css, styled, KitColors, KitTheme, VariantProps} from '../../theme'

const _HEIGHT = 'auto'
const _WIDTH = 'auto'
const _PADDING_X = 12
const _PADDING_Y = 6

const BUTTON_TAG = css('button', {})

const groupRoot = styled('div', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  gap: '1em',
  margin: 'auto',
  padding: '0',
})

const groupButtonStyles = styled(BUTTON_TAG, {
  all: 'unset',
  position: 'relative',
  backgroundColor: KitColors.slate4,
  color: KitColors.slate12,
  height: _HEIGHT,
  width: _WIDTH,
  display: 'flex',

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.medium,

  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,

  paddingTop: _PADDING_Y,
  paddingBottom: _PADDING_Y,
  paddingLeft: _PADDING_X,
  paddingRight: _PADDING_X,

  '&:focus': {
    height: _HEIGHT,
    width: _WIDTH,
    paddingTop: _PADDING_Y,
    paddingBottom: _PADDING_Y,
    paddingLeft: _PADDING_X,
    paddingRight: _PADDING_X,
    // boxShadow: `0 0 0 1px ${KitColors.slateA6}`,
  },

  '&:first-child': {
    borderTopLeftRadius: KitTheme.theme.radii.base,
    borderBottomLeftRadius: KitTheme.theme.radii.base,
  },
  '&:last-child': {
    borderTopRightRadius: KitTheme.theme.radii.base,
    borderBottomRightRadius: KitTheme.theme.radii.base,
  },
  '&:hover': {backgroundColor: KitColors.slate5},
  '&[data-state="on"]': {
    backgroundColor: KitColors.helios5,
    color: KitColors.slate2,
  },
  '&[data-state=on]:hover': {backgroundColor: KitColors.helios4},

  /**
   *
   * data-state="off"
   */
  '&[data-state="off"]:hover': {
    cursor: 'pointer',
  },

  '&[data-orientation="vertical"]': {flexDirection: 'column', margin: 'auto'},
  '&[data-orientation="horizontal"]': {flexDirection: 'row', margin: 'auto'},

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
})

export const StyledBtnGroupRoot = groupRoot
export const StyledBtnGroupButton = groupButtonStyles

export type ButtonGroupVariantProps = VariantProps<typeof groupButtonStyles>
