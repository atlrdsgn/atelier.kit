import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {KitColors, KitTheme, keyframes, styled, VariantProps} from '../../theme'
import {ArrowDownIcon} from '../_icon/src/ArrowDown.Icon'
import {Icon} from '../_icon'

/**
 *
 *
 *
 *
 * KEYFRAMES & RADII
 *
 *
 *
 *
 *
 */

const ROOT_RADIUS = KitTheme.theme.radii.lg
const CHILD_RADIUS = KitTheme.theme.radii.md
const HEADER_RADIUS = KitTheme.theme.radii.md
const TRIGGER_RADIUS = KitTheme.theme.radii.md

const CONTENT_HEIGHT_ZERO = '0px'
const CONTENT_HEIGHT_FULL = '100%'

const slideDown = keyframes({
  from: {
    height: CONTENT_HEIGHT_ZERO,
  },
  to: {
    height: `var(--radix-accordion-content-height)`,
  },
})

const slideUp = keyframes({
  from: {
    height: `var(--radix-accordion-content-height)`,
  },
  to: {
    height: CONTENT_HEIGHT_ZERO,
  },
})

/**
 *
 *
 *
 *
 * ACCORDION_ROOT
 *
 *
 *
 *
 *
 */

const styledAccordion = styled(AccordionPrimitive.Root, {
  boxSizing: 'border-box',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  border: `inherit`,
  borderRadius: ROOT_RADIUS,
  width: '100%',

  backgroundColor: 'transparent',

  variants: {
    /**
     *
     * ..exportas..
     * AccordionRootVariantProps.
     */
    bordered: {
      true: {
        border: `1px solid ${KitColors.slate6}`,
      },
    },
  },
  defaultVariants: {
    bordered: true,
  },
})

/**
 *
 *
 *
 *
 * ACCORDION_ITEM
 *
 *
 *
 *
 *
 */

const styledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  backgroundColor: KitColors.slate1,
  width: '100%',

  '&:first-child': {
    borderTopLeftRadius: CHILD_RADIUS,
    borderTopRightRadius: CHILD_RADIUS,
  },
  '&:last-child': {
    borderBottomLeftRadius: CHILD_RADIUS,
    borderBottomRightRadius: CHILD_RADIUS,
  },
  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
  },
  '&:last-of-type': {
    borderBottom: `0px solid ${KitColors.slate6}`,
  },
})

/**
 *
 *
 *
 *
 * ACCORDION_TRIGGER
 *
 *
 *
 *
 *
 */

const styledHeader = styled(AccordionPrimitive.Header, 'h2', {
  all: 'unset',
  display: 'flex',
  borderRadius: HEADER_RADIUS,

  boxSizing: 'border-box',

  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

const styledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',

  borderRadius: TRIGGER_RADIUS,

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.lg,
  fontWeight: KitTheme.theme.fontWeights.semibold,
  lineHeight: 'normal',

  paddingLeft: KitTheme.theme.space[4],
  paddingRight: KitTheme.theme.space[4],
  paddingTop: KitTheme.theme.space[3],
  paddingBottom: KitTheme.theme.space[3],

  height: 'auto',

  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 'auto',

  color: KitColors.slate11,
  width: '100%',

  '&[data-state="closed"]': {
    backgroundColor: KitColors.slate1,
    border: `1px solid ${KitColors.slate6}`,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,

    '&:first-child': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottom: `1px solid ${KitColors.slate6}`,
      borderBottomWidth: 1,
    },
    '&:last-child': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      border: `none`,
      borderBottom: `none`,
    },
  },
  '&[data-state="open"]': {
    backgroundColor: KitColors.slate2,
    border: 0,
    '&:first-child': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:last-child': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    svg: {
      transform: 'rotate(90deg)',
      transition: 'transform 275ms cubic-bezier(0.65, 0, 0.35, 1)',
    },
  },

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '&:focus': {
    outline: 'none',
  },
  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  '&:hover': {
    backgroundColor: KitColors.slate3,
    '&:first-child': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:last-child': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    '&:focus-within': {
      position: 'relative',
      zIndex: 1,
    },
    '&:last-of-type': {},
  },
})

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * ACCORDION_CONTENT
 *
 *
 *
 *
 *
 */
const styledContent = styled(AccordionPrimitive.Content, 'div', {
  boxSizing: 'border-box',
  overflow: 'hidden',

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.md,
  fontWeight: KitTheme.theme.fontWeights.normal,

  paddingLeft: KitTheme.theme.space[4],
  paddingRight: KitTheme.theme.space[4],
  paddingTop: KitTheme.theme.space[4],
  paddingBottom: KitTheme.theme.space[4],
  margin: 0,

  color: KitColors.slate11,
  backgroundColor: KitColors.slate1,
  width: '100%',
  height: 'auto',

  textAlign: 'left',

  '&[data-state="open"]': {
    // height: CONTENT_HEIGHT_FULL,
    // animation: `${slideDown} 400ms cubic-bezier(0.87, 0, 0.13, 1)`,
    // animationName: `${slideDown}`,
  },
  '&[data-state="closed"]': {
    // height: CONTENT_HEIGHT_ZERO,
    // animation: `${slideUp} 400ms cubic-bezier(0.87, 0, 0.13, 1)`,
    // animationName: `${slideUp}`,
  },
})

const styledContentText = styled('span', {
  all: 'unset',

  textAlign: 'left',
})

const styledArrowDown = styled(ArrowDownIcon, {
  color: KitColors.slate8,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': {transform: 'rotate(90deg)'},

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

const styledArrow = styled(Icon, {
  color: KitColors.slate8,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': {transform: 'rotate(90deg)'},

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

/////////////////////// EXPORTS ////////////////////////////////////
export const AtlrAccordionRoot = styledAccordion
export const AtlrAccordionItem = styledItem
export const AtlrAccordionHeader = styledHeader
export const AtlrAccordionTrigger = styledTrigger
export const AtlrAccordionContent = styledContent
export const AtlrAccordionContentText = styledContentText
export const AtlrAccordionArrowDown = styledArrowDown
export const StyledArrow = styledArrow
///////////////////////////////////////////////////////////////////
export type AccordionRootVariantProps = VariantProps<typeof styledAccordion>
export type AccordionItemVariantProps = VariantProps<typeof styledItem>
export type AccordionHeaderVariantProps = VariantProps<typeof styledHeader>
