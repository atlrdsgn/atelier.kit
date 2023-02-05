import * as Select from '@radix-ui/react-select'
import {KitColors, KitTheme, styled, VariantProps} from '../../theme'
import {ArrowDownIcon} from '../_icon/src/ArrowDown.Icon'

/**
 *
 *
 * root.
 */
const rootStyles = styled(Select.Root, {
  all: 'unset',

  position: 'relative',

  backgroundColor: KitColors.transparent,

  '&[data-state="open"]': {},
})

/**
 *
 *
 * trigger.
 */
const triggerStyles = styled(Select.Trigger, {
  all: 'unset',

  display: 'inline-flex',
  flexDirection: 'row',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',

  gap: 20,
  width: 'auto',
  height: 32,
  minWidth: 140,

  color: KitColors.slate11,

  border: `1.5px solid ${KitColors.slate6}`,
  borderRadius: KitTheme.theme.radii.lg,
  backgroundColor: KitColors.slate1,

  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 14,
  paddingRight: 6,

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.semibold,
  lineHeight: 1,
  // boxShadow: `0 2px 3px ${KitColors.slateA7}`,

  '&:hover': {backgroundColor: KitColors.slate3},
  '&:focus': {boxShadow: `0 0 0 2px ${KitColors.helios4}`},
  '&[data-placeholder]': {color: KitColors.slate9},
})

/**
 *
 *
 * value.
 */
const valueStyles = Select.Value

/**
 *
 *
 * hasIcon.
 * +
 * hasArrow.
 */
const hasIconStyles = styled(ArrowDownIcon, Select.Icon, {
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': {transform: 'rotate(180deg)'},

  color: KitColors.slate9,
  height: 'auto',
  width: 'auto',
})

const hasArrowStyles = styled(ArrowDownIcon, Select.Arrow, {
  color: KitColors.slate9,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': {transform: 'rotate(180deg)'},

  variants: {
    color: {
      slate: {
        color: KitColors.slate8,
      },
    },
  },
  defaultVariants: {
    color: 'slate',
  },
})

/**
 *
 *
 * content.
 */
const contentStyles = styled(Select.Content, {
  all: 'unset',
  zIndex: 999,

  maxHeight: 'var(--radix-select-content-available-height)',
  width: 'var(--radix-select-trigger-width)',

  color: KitColors.primaryGray,
  borderRadius: KitTheme.theme.radii.lg,

  backgroundColor: KitColors.white,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  saturate: '180%',

  overflow: 'hidden',
  scrollbarWidth: 'none',

  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',

  '&::-webkit-scrollbar': {},

  '&[data-state="open"]': {},
  '&[data-state="closed"]': {},

  'var(--radix-select-content-transform-origin)': {},
  'var(--radix-select-content-available-width)': {},
  'var(--radix-select-trigger-height)': {},

  // export as SelectContentVariantProps..
  variants: {
    hasBlur: {
      true: {
        backgroundColor: KitColors.blur,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        saturate: '180%',
      },
    },
  },
  defaultVariants: {
    hasBlur: false,
  },
})

/**
 *
 *
 * scroll.buttons..
 */
const baseButton = {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: KitColors.slate12,
  cursor: 'default',
}
const scrollUpButtonStyles = styled(Select.ScrollUpButton, {
  ...baseButton,
})
const scrollDownStyles = styled(Select.ScrollDownButton, {
  ...baseButton,
})

/**
 *
 *
 * viewport.
 * +
 * portal.
 */
const viewportStyles = styled(Select.Viewport, {
  // all: 'unset',
  zIndex: 999,
  padding: 2,
  overflow: 'auto',
  scrollbarWidth: 10,
  '&::-webkit-scrollbar': {},

  '&[data-state="open"]': {
    position: 'relative',
  },
})
// const portalStyles = styled(Select.Portal, {})
const portalStyles = Select.Portal

/**
 *
 *
 * item.
 *
 *
 *
 *
 * ..define baseItem styles.
 *
 *
 */
const itemBase = {
  all: 'unset',
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.medium,
  lineHeight: 1,
  color: KitColors.slate11,
  borderRadius: KitTheme.theme.radii.base,
  display: 'flex',
  alignItems: 'center',
  height: 24,
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 2,
  paddingBottom: 2,
  position: 'relative',
  userSelect: 'none',

  '&:hover': {
    cursor: 'pointer',
    outline: 'none',
  },

  '&:focus': {
    outline: 'none',
    WebKitFocusRingColor: KitColors.transparent,
  },

  '&[data-disabled]': {
    color: KitColors.slate8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    // backgroundImage: `linear-gradient(135deg, ${KitColors.heliotrope3} 0%, ${KitColors.heliotrope5} 100%)`,
    backgroundImage: KitColors.helios5,
    backroundColor: KitColors.helios5,
    background: KitColors.helios5,
    color: KitColors.slate1,

    '&:focus': {
      outline: 'none',
    },
  },
}

const itemStyles = styled(Select.Item, {
  ...itemBase,

  variants: {},
  defaultVariants: {},
})

/**
 *
 *
 * item.text.
 */
const itemTextStyles = styled(Select.ItemText, {})

/**
 *
 *
 * item.indicator.
 * +
 * separator.
 */
const itemIndicatorStyles = styled(Select.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const separatorStyles = styled(Select.Separator, {
  all: 'unset',
  height: 1,
  backgroundColor: KitColors.slate4,
  margin: 5,
})

/**
 *
 *
 * label.
 */
const labelStyles = styled(Select.Label, {
  all: 'unset',

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.xs,
  fontWeight: KitTheme.theme.fontWeights.medium,

  color: KitColors.helios5,

  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 8,
  paddingRight: 8,

  textAlign: 'left',
  lineHeight: '32px',
})

/**
 *
 *
 * group.
 */
const groupStyles = styled(Select.Group, {
  all: 'inherit',
})

// exports *************************************

export const StyledSelectRoot = rootStyles
export const StyledSelectTrigger = triggerStyles
export const StyledSelectValue = valueStyles
export const StyledSelectIcon = hasIconStyles
export const StyledSelectArrow = hasArrowStyles
export const StyledSelectContent = contentStyles
export const StyledSelectScrollUpButton = scrollUpButtonStyles
export const StyledSelectScrollDownButton = scrollDownStyles
export const StyledSelectViewport = viewportStyles
export const StyledSelectPortal = portalStyles
export const StyledSelectItem = itemStyles
export const StyledSelectItemText = itemTextStyles
export const StyledSelectItemIndicator = itemIndicatorStyles
export const StyledSelectSeparator = separatorStyles
export const StyledSelectLabel = labelStyles
export const StyledSelectGroup = groupStyles

export type SelectContentVariantProps = VariantProps<typeof contentStyles>
