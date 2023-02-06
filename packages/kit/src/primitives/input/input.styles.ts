import {KitColors, KitTheme, styled, VariantProps} from '../../theme'
import * as LabelPrimitive from '@radix-ui/react-label'

const labelStyles = styled(LabelPrimitive.Root, {
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: 12,
  fontWeight: 600,
  color: KitColors.slate10,
  userSelect: 'none',
  textAlign: 'left',
  lineHeight: '1',
  paddingBottom: 4,
  paddingLeft: 4,
})

const labelFlexStyles = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  flexWrap: 'nowrap',
  flexShrink: 0,
  flexGrow: 0,
  flexBasis: 'auto',
  width: '100%',
  height: 'auto',
  margin: 'auto',
  color: 'inherit',

  paddingTop: 4,
  paddingBottom: 4,

  '&:[LabelPrimitive="true"]': {textAlign: 'left'},
})

const inputStyles = styled('input', {
  appearance: 'none',
  borderWidth: 0,
  boxSizing: 'border-box',
  margin: 0,
  width: '100%',
  minWidth: 300,
  outline: 'none',
  paddingRight: 12,
  paddingLeft: 12,
  paddingTop: 0,
  paddingBottom: 0,
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontVariantNumeric: 'tabular-nums',
  color: KitColors.slate10,
  backgroundColor: KitColors.slate4,
  boxShadow: `inset 0 0 0 1px ${KitColors.accentHeliotrope}, inset 0 0 0 2px ${KitColors.helios4}`,
  borderRadius: 0,

  '&::before': {},
  '&::after': {},

  '&:-webkit-autofill': {
    boxShadow: `inset 0 0 0 1px ${KitColors.accentHeliotrope}, inset 0 0 0 1px ${KitColors.helios4}`,
  },

  '&:-webkit-autofill::first-line': {
    color: KitColors.slate10,
  },

  '&:focus': {
    '&:-webkit-autofill': {},
  },

  '&::placeholder': {
    position: 'relative',
    lineHeight: '30px',
    color: KitColors.slate8,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    paddingLeft: 1,
    paddingRight: 1,
  },

  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: KitColors.slate2,
    color: KitColors.slate9,
    cursor: 'not-allowed',
    '&::placeholder': {
      color: KitColors.slate9,
    },
  },

  '&:read-only': {
    '&:focus': {},
  },

  variants: {
    style: {
      ghost: {
        border: `1.5px solid ${KitColors.slate8}`,
        borderRadius: 0,
        borderTop: `1.5px solid transparent`,
        borderRight: `1.5px solid transparent`,
        borderBottom: `1.5px solid ${KitColors.slate8}`,
        borderLeft: `1.5px solid transparent`,
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 1px 1px transparent, 0 0 0 2px transparent`,
        '@hover': {
          '&:hover': {
            borderBottom: `1.5px solid ${KitColors.slate10}`,
          },
        },
        '&:focus': {
          backgroundColor: KitColors.slate2,
          borderBottom: `1.5px solid ${KitColors.slate12}`,
          // boxShadow: `inset 0 0 1px 1px ${KitColors.helios4}, 0 0 0 2px ${KitColors.helios4}`,
        },
        '&:disabled': {},
        '&:read-only': {},
      },
      atelier: {
        boxShadow: `inset 0 0 1px 1px ${KitColors.slate4}, inset 0 0 0 2px ${KitColors.slate5}`,
        backgroundColor: KitColors.slate2,
        '@hover': {
          '&:hover': {
            boxShadow: `inset 0 0 1px 1px ${KitColors.slate8}, inset 0 0 0 2px ${KitColors.slate6}`,
          },
        },
        '&:focus': {
          backgroundColor: KitColors.slate2,
          boxShadow: `inset 0 0 1px 1px ${KitColors.heliotrope4}, 0 0 0 2px ${KitColors.heliotrope4}`,
        },
        '&:disabled': {},
        '&:read-only': {},
      },
    },
    /**
     *
     *
     *
     *
     *
     *
     *
     *
     * size.
     *
     */
    size: {
      sm: {
        fontSize: 12,
        borderRadius: KitTheme.theme.radii.lg,
        height: '30px',
        lineHeight: '30px',
        padding: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        '&:-webkit-autofill::first-line': {},
      },
      md: {
        fontSize: 14,
        borderRadius: KitTheme.theme.radii.lg,
        height: '38px',
        lineHeight: '38px',
        padding: 1,
        paddingLeft: 12,
        paddingRight: 14,
        width: '100%',
        '&:-webkit-autofill::first-line': {},
      },
      lg: {
        fontSize: 16,
        borderRadius: KitTheme.theme.radii.xl,
        height: '42px',
        lineHeight: '42px',
        padding: 1,
        paddingLeft: 14,
        paddingRight: 14,
        width: '100%',
        '&:-webkit-autofill::first-line': {},
      },
    },
    cursor: {
      pointer: {
        cursor: 'pointer',
        '&:focus': {
          cursor: 'text',
        },
      },
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
        '&:focus': {
          cursor: 'text',
        },
      },
    },
  },
  defaultVariants: {
    style: 'atelier',
    size: 'sm',
    cursor: 'text',
  },
})

export const StyledFlex = labelFlexStyles
export const StyledLabel = labelStyles

export const StyledInput = inputStyles
export type InputVariantProps = VariantProps<typeof inputStyles>
