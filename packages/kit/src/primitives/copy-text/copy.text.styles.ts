import {styled, KitColors, KitTheme, VariantProps} from '../../theme'

const FIELD_TAG = 'div'
const TRIGGER_TAG = 'button'
const TEXT_TAG = 'p'

/**
 *
 * @constant borderRadii
 */
const FIELD_BORDER_RADIUS = 11
const TRIGGER_BORDER_RADIUS = 7

const FIELD_PADDING_LEFT = 14
const FIELD_PADDING_RIGHT = 3.5

/**
 *
 * ..CopyField.Root
 * 'flex' component with a styled border to mimic a text field.
 *
 */
const copyFieldStyles = styled(FIELD_TAG, {
  boxSizing: 'border-box',

  width: '100%',
  height: 'auto',

  gap: '32px',

  display: 'inline-flex',
  flexDirection: 'row',
  flexBasis: 'auto',
  alignItems: 'center',

  justifyContent: 'space-between',

  margin: 'auto',
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: FIELD_PADDING_LEFT,
  paddingRight: FIELD_PADDING_RIGHT,

  color: KitColors.slate12,
  backgroundColor: KitColors.slateA4,
  border: `2px solid ${KitColors.gray10}`,
  borderRadius: FIELD_BORDER_RADIUS,

  // CopyFieldVariantProps..
  variants: {
    primary: {
      true: {
        color: KitColors.gray11,
        backgroundColor: KitColors.slate1,
        border: `1.6px solid ${KitColors.slateA6}`,

        '&:hover': {
          backgroundColor: KitColors.slate2,
        },
      },
    },
    secondary: {
      true: {
        color: KitColors.slate12,
        backgroundColor: KitColors.slate2,
        border: `2px solid ${KitColors.gray10}`,
      },
    },
  },
  defaultVariants: {
    primary: true,
    secondary: false,
  },
})

/**
 *
 * ..CopyField.Text
 * 'p' element with monospace styles.
 *
 */
const copyTextStyles = styled(TEXT_TAG, {
  all: 'unset',
  transition: 'all 250ms ease-in-out',
  userSelect: 'none',

  textAlign: 'left',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'flex-start',

  fontFamily: KitTheme.theme.fonts.mono,
  fontWeight: KitTheme.theme.fontWeights.semibold,
  fontSize: KitTheme.theme.fontSizes.sm,

  lineHeight: 'normal',

  color: KitColors.slate12,
  background: 'none',
})

/**
 *
 * ..CopyField.Trigger
 * 'button' element that copies the contents of [CopyField.Text] to the clipboard.
 *
 */
const baseTriggerStyles = {
  all: 'unset',
  transition: 'all 250ms ease-in-out',

  position: 'relative',
  display: 'inline-flex',
  flexShrink: 0,

  margin: 'auto',
  marginTop: 0,
  marginBottom: 0,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  boxSizing: 'border-box',
  userSelect: 'none',
  height: 'auto',
  width: 'auto',
  padding: '5px 10px',
  borderRadius: TRIGGER_BORDER_RADIUS,

  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  fontFamily: KitTheme.theme.fonts.sans,
  fontWeight: KitTheme.theme.fontWeights.semibold,
  fontSize: KitTheme.theme.fontSizes.xs,

  fontVariantNumeric: 'tabular-nums',

  backgroundColor: 'white',
  color: KitColors.gray12,
}

const copyTriggerStyles = styled(TRIGGER_TAG, {
  ...baseTriggerStyles,

  // CopyTriggerVariantProps..
  variants: {
    /**
     *
     * ..Primary <Button /> ... styles
     */
    primary: {
      true: {
        color: KitColors.secondaryGray,
        backgroundColor: KitColors.white,
        background: KitColors.white,
        border: `1px solid ${KitColors.secondaryBorder}`,
        justifyContent: 'center',

        '&:hover': {
          backgroundColor: KitColors.white,
          borderColor: KitColors.slate10,
          cursor: 'pointer',
        },
      },
    },
    /**
     *
     * ..Secondary <Button /> ... styles
     */
    secondary: {
      true: {
        color: 'white',
        backgroundColor: KitColors.helios6,
        background: KitColors.helios6,
        border: `1.6px solid ${KitColors.primaryBorder}`,
        boxShadow: `0px 2px 2px rgba(0, 0, 0, 0)`,
        boxSizing: `border-box`,
        position: 'relative',
        justifyContent: 'center',

        '&:hover': {
          backgroundColor: KitColors.helios7,
          background: KitColors.helios5,
          boxShadow: `0px 2px 2px rgba(0, 0, 0, 0.09)`,
          borderColor: KitColors.primaryBorderHover,
          cursor: 'pointer',
        },
      },
    },
    /**
     *
     * ..Heliotrope <Button /> ... styles
     */
    heliotrope: {
      true: {
        color: KitColors.white,
        backgroundColor: KitColors.heliotrope5,
        background: KitColors.heliotrope5,
        border: `1.6px solid ${KitColors.primaryBorder}`,
        boxShadow: `0px 2px 2px rgba(0, 0, 0, 0)`,
        boxSizing: `border-box`,
        position: 'relative',
        justifyContent: 'center',

        '&:hover': {
          backgroundColor: KitColors.heliotrope6,
          background: KitColors.heliotrope6,
          boxShadow: `0px 2px 2px rgba(0, 0, 0, 0.09)`,
          borderColor: KitColors.primaryBorderHover,
          cursor: 'pointer',
        },
      },
    },
  },
  defaultVariants: {
    primary: true,
    secondary: false,
    heliotrope: false,
  },
})

const styledTriggerBox = styled('div', {
  all: 'unset',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  display: 'flex',
  flexShrink: 0,
  position: 'relative',
  height: 'auto',
  width: 'auto',

  padding: 0,
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 0,
  paddingRight: 0,
})

export const StyledCopyField = copyFieldStyles
export const StyledCopyFieldText = copyTextStyles
export const StyledCopyTrigger = copyTriggerStyles

export const StyledTriggerBox = styledTriggerBox

export type CopyTriggerVariantProps = VariantProps<typeof copyTriggerStyles>
export type CopyFieldVariantProps = VariantProps<typeof copyFieldStyles>
