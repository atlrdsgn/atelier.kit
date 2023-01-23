import {KitColors, styled, VariantProps} from '../../theme'

const GLOBAL_TAG = 'button'

const internalStyles = {
  position: 'relative',
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

const icxnButtonStyles = styled(GLOBAL_TAG, {
  ...internalStyles,
  boxSizing: 'border-box',
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 28,
  height: 28,
  background: 'none',
  padding: 0,
  margin: 0,
  outline: 'none',
  borderRadius: 8,
  color: KitColors.slate12,
  border: `1px solid ${KitColors.slate6}`,
  backgroundClip: 'padding-box',

  '@hover': {
    '&:hover': {
      backgroundColor: '$grayA4',
    },
  },
  '&:active': {
    bc: '$grayA5',
  },

  '&:focus': {
    borderColor: '$slate8',
  },
  '&:focus:not(:focus-visible)': {
    borderColor: 'transparent',
  },

  variants: {
    size: {
      sm: {
        width: 24,
        height: 24,
      },
      md: {
        width: 28,
        height: 28,
      },
      lg: {
        width: 32,
        height: 32,
      },
    },
    primary: {
      true: {
        color: KitColors.slate11,
        backgroundColor: KitColors.slateA4,
        borderColor: KitColors.slateA5,
        borderWidth: 1,

        '&:hover': {
          backgroundColor: KitColors.slateA5,
          borderColor: KitColors.slateA6,
          color: KitColors.slate12,
        },
      },
    },
    secondary: {
      true: {
        color: KitColors.white,
        backgroundColor: KitColors.helios6,
        borderColor: KitColors.helios8,
        '&:hover': {
          backgroundColor: KitColors.helios7,
          borderColor: KitColors.helios9,
        },
      },
    },

    raised: {
      true: {
        boxShadow: `rgba(0, 0, 0, 0.06) 0 3px 5px 2px, rgba(0, 0, 0, 0.14) 0 2px 5px 1px`,
        '@hover': {
          '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 3px',
          },
        },
        '&:focus': {
          boxShadow: `0 0 0 1px ${KitColors.slate8}, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)`,
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    primary: true,
    secondary: false,
    raised: false,
  },
})

export const IconButtonComponent = icxnButtonStyles
export type IconButtonVariantProps = VariantProps<typeof icxnButtonStyles>
