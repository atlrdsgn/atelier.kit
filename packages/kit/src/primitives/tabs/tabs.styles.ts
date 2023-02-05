import * as TabsPrimitive from '@radix-ui/react-tabs'
import {KitColors, KitTheme, styled, VariantProps} from '../../theme'

/**
 *
 * @border constants..
 */
const BORDER_RADIUS_CONSTANT = KitTheme.theme.radii.xl
const BORDER_ZERO = '0px'

/*******************************************************************
 *
 *
 * root.
 *
 */
const styledTabs = styled(TabsPrimitive.Root, {
  boxSizing: 'border-box',
  display: 'flex',
  margin: 'auto',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: KitColors.transparent,

  fontFamily: KitTheme.theme.fonts.sans,

  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },

  variants: {
    shadow: {
      true: {
        boxShadow: `0 2px 10px ${KitColors.slateA4}`,
      },
    },
  },
  defaultVariants: {
    shadow: false,
  },
})

/*************************************************************
 *
 *
 *
 *
 * list.
 *
 *
 */
const styledList = styled(TabsPrimitive.List, {
  /**
   *
   * borders.
   */
  borderTopLeftRadius: BORDER_RADIUS_CONSTANT,
  borderTopRightRadius: BORDER_RADIUS_CONSTANT,
  border: `1px solid ${KitColors.slate6}`,

  /**
   *
   * ..rest.
   */
  boxSizing: 'border-box',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
  width: '100%',

  '&:focus': {
    outline: 'none',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
  },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'row',
  },

  /**
   *
   *
   * variants.
   */
  variants: {
    border: {
      true: {
        borderTopLeftRadius: BORDER_RADIUS_CONSTANT,
        borderTopRightRadius: BORDER_RADIUS_CONSTANT,
        border: `1px solid ${KitColors.slate6}`,
      },
      false: {
        borderTopLeftRadius: BORDER_RADIUS_CONSTANT,
        borderTopRightRadius: BORDER_RADIUS_CONSTANT,
        border: `1px solid ${KitColors.transparent}`,
      },
    },
  },
  defaultVariants: {
    border: true,
  },
})

/**************************************************************
 *
 *
 *
 *
 *
 * trigger.
 *
 *
 */
const styledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  flex: 1,
  backgroundColor: KitColors.slate1,
  padding: 0,
  height: '38px',
  width: 'auto',
  display: 'flex',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'center',

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.base,
  fontWeight: KitTheme.theme.fontWeights.bold,
  lineHeight: 1,
  color: KitColors.slate9,

  outline: 'none',
  userSelect: 'none',

  /**
   *
   * borders.
   */
  '&:first-child': {
    borderTopLeftRadius: BORDER_RADIUS_CONSTANT,
    borderRightWidth: BORDER_ZERO,
  },
  '&:last-child': {
    borderTopRightRadius: BORDER_RADIUS_CONSTANT,
    borderLeftWidth: BORDER_ZERO,
  },

  '&:hover': {color: KitColors.slate11},

  '&[data-state="active"]': {
    backgroundColor: KitColors.slate3,
    color: KitColors.slate12,
    boxShadow: `inset 0 -0.8px 0 0 ${KitColors.helios5}, 0 0.8px 0 0 ${KitColors.helios5}`,
  },
  '&:focus': {position: 'relative', boxShadow: `0 0 0 2px ${KitColors.helios3}`},

  /**
   *
   *
   * variants.
   */
  variants: {
    border: {
      true: {
        '&:first-child': {
          borderTopLeftRadius: BORDER_RADIUS_CONSTANT,
          borderRightWidth: BORDER_ZERO,
        },
        '&:last-child': {
          borderTopRightRadius: BORDER_RADIUS_CONSTANT,
          borderLeftWidth: BORDER_ZERO,
        },
      },
      false: {
        '&[data-state="active"]': {
          backgroundColor: KitColors.slate1,
          boxShadow: `inset 0 -0.8px 0 0 ${KitColors.helios5}, 0 0.8px 0 0 ${KitColors.helios5}`,
        },
        '&:focus': {position: 'relative', boxShadow: `0 0 0 2px ${KitColors.helios3}`},
      },
    },
  },
  defaultVariants: {
    border: true,
  },
})

/*************************************************************
 *
 *
 *
 *
 *
 *
 *
 * content.
 *
 *
 */
const styledContent = styled(TabsPrimitive.Content, {
  /**
   *
   * borders.
   */
  borderBottomLeftRadius: BORDER_RADIUS_CONSTANT,
  borderBottomRightRadius: BORDER_RADIUS_CONSTANT,
  borderTopWidth: BORDER_ZERO,
  border: `1px solid ${KitColors.slate6}`,

  /**
   *
   * ..rest.
   */
  flexGrow: 1,
  paddingLeft: 18,
  paddingRight: 18,
  paddingTop: 14,
  paddingBottom: 14,

  backgroundColor: KitColors.slate1,

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.base,
  fontWeight: KitTheme.theme.fontWeights.normal,

  lineHeight: '1.5',
  letterSpacing: 'inherit',

  color: KitColors.gray10,

  outline: 'none',

  '&[data-state="active"]': {},
  '&[data-state="inactive"]': {},
  '&:focus': {outline: 'none'},

  variants: {
    align: {
      left: {textAlign: 'left'},
      center: {textAlign: 'center'},
      right: {textAlign: 'right'},
    },

    /**
     *
     *
     * border == as variant.
     */
    border: {
      true: {
        borderBottomLeftRadius: BORDER_RADIUS_CONSTANT,
        borderBottomRightRadius: BORDER_RADIUS_CONSTANT,
        borderTopWidth: BORDER_ZERO,
        border: `1px solid ${KitColors.slate6}`,
      },
      false: {
        borderBottomLeftRadius: BORDER_RADIUS_CONSTANT,
        borderBottomRightRadius: BORDER_RADIUS_CONSTANT,
        borderTopWidth: BORDER_ZERO,
        border: `1px solid ${KitColors.transparent}`,
      },
    },
  },
  defaultVariants: {
    align: 'left',
    border: true,
  },
})

export const StyledTabsRoot = styledTabs
export const StyledTabsList = styledList
export const StyledTabsTrigger = styledTrigger
export const StyledTabsContent = styledContent

export type TabsVariantProps = VariantProps<typeof styledTabs>
export type TabsListVariantProps = VariantProps<typeof styledList>
export type TabsTriggerVariantProps = VariantProps<typeof styledTrigger>
export type TabsContentVariantProps = VariantProps<typeof styledContent>
