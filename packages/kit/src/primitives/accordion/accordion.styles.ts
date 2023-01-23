import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {KitColors, KitTheme, keyframes, styled, VariantProps} from '../../theme'
import {ArrowDownIcon} from '../_icon/src/ArrowDown.Icon'

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

const slideDown = keyframes({
  from: {height: 0},
  to: {height: 'var(--radix-accordion-content-height)'},
})

const slideUp = keyframes({
  from: {height: 'var(--radix-accordion-content-height)'},
  to: {height: 0},
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
  /**
   * <Accordion />
   */
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
    round: {},
    square: {},
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
    // boxShadow: `0 0 0 2px ${AtelierColors.mauve12}}`,
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

const styledHeader = styled(AccordionPrimitive.Header, {
  paddingTop: 3,
  borderRadius: HEADER_RADIUS,
  all: 'unset',
  display: 'flex',
  width: '100%',
})

const styledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: 'normal',
  paddingLeft: '20px',
  paddingRight: '20px',
  height: '45px',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: KitColors.slate12,
  width: '100%',
  borderRadius: TRIGGER_RADIUS,

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
    // boxShadow: `inset 0 0 0 0px ${KitColors.slate6}, 0 0 0 0px ${KitColors.slate6}`,
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
      // boxShadow: `0 0 0 2px ${KitColors.mauve12}`,
    },
    '&:last-of-type': {},
  },
})

const styledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: KitColors.slate11,
  backgroundColor: KitColors.slate1,
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 'inherit',
  lineHeight: 'normal',
  padding: 0,
  width: '100%',

  textAlign: 'left',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

const styledContentText = styled('div', {
  padding: '15px 20px',

  backgroundColor: KitColors.slate1,
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: 'inherit',
  lineHeight: 'normal',
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

/////////////////////// EXPORTS ////////////////////////////////////
export const AtlrAccordionRoot = styledAccordion
export const AtlrAccordionItem = styledItem
export const AtlrAccordionHeader = styledHeader
export const AtlrAccordionTrigger = styledTrigger
export const AtlrAccordionContent = styledContent
export const AtlrAccordionContentText = styledContentText
export const AtlrAccordionArrowDown = styledArrowDown
///////////////////////////////////////////////////////////////////
export type AccordionRootVariantProps = VariantProps<typeof styledAccordion>
