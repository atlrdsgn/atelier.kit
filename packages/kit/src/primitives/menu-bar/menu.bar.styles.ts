import * as Menubar from '@radix-ui/react-menubar'
import {styled, KitColors, KitTheme, VariantProps} from '../../theme'

const BORDER_RADIUS_OUTSIDE = 8
const BORDER_RADIUS_INSIDE = 6

const menubarRoot = styled(Menubar.Root, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'space-between',
  justifyContent: 'space-between',
  width: 'auto',
  margin: 'auto',

  gap: 3,
  backgroundColor: KitColors.transparent,
  padding: 3,
  borderRadius: BORDER_RADIUS_OUTSIDE,
  border: 'inherit',

  variants: {
    bordered: {
      true: {
        border: `1px solid ${KitColors.slateA6}`,
      },
    },
  },
  defaultVariants: {
    bordered: false,
  },
})

const menubarMenu = styled(Menubar.Menu, {
  all: 'unset',
  display: 'flex',
  flexDirection: 'row',

  backgroundColor: KitColors.blur,
  borderRadius: BORDER_RADIUS_OUTSIDE,

  border: `1px solid ${KitColors.slateA6}`,

  padding: 2,
  margin: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  maxWidth: 400,
})

const menubarTrigger = styled(Menubar.Trigger, {
  all: 'unset',
  padding: '6px 12px',
  outline: 'none',
  userSelect: 'none',

  lineHeight: 1,
  borderRadius: BORDER_RADIUS_INSIDE,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,

  fontFamily: KitTheme.theme.fonts.sans,
  fontWeight: KitTheme.theme.fontWeights.semibold,
  fontSize: KitTheme.theme.fontSizes.md,

  '&[data-highlighted], &[data-state="open"]': {
    backgroundColor: KitColors.heliotrope4,
    color: KitColors.slate2,
  },

  '&[data-state="closed"]': {
    '&:hover': {
      backgroundColor: KitColors.slateA4,
    },
  },

  '&[data-disabled]': {},

  variants: {
    white: {
      true: {
        color: KitColors.white,
      },
    },
    black: {
      true: {
        color: KitColors.black,
      },
    },
    slate: {
      true: {
        color: KitColors.slate11,
      },
    },
  },
  defaultVariants: {
    white: false,
    black: false,
    slate: true,
  },
})

const contentStyles = {
  zIndex: 9999,
  minWidth: 220,
  maxWidth: 400,

  marginLeft: '-3px',

  fontFamily: KitTheme.theme.fonts.sans,
  fontWeight: KitTheme.theme.fontWeights.normal,
  fontSize: KitTheme.theme.fontSizes.md,

  borderRadius: BORDER_RADIUS_OUTSIDE,

  padding: 2,
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
}

/**
 *
 *
 *
 *
 *
 * MenuBar[Content]..
 *
 *
 */

const menubarContent = styled(Menubar.Content, {
  ...contentStyles,

  // defaultColorStyles..
  border: `1px solid ${KitColors.slateA6}`,
  backgroundColor: KitColors.white,

  /**
   *
   * data-attriubtes..
   */
  '&[data-state="open"]': {},
  '&[data-state="closed"]': {},
  '&[data-side="top"], &[data-side="bottom"]': {},
  '&[data-side="left"], &[data-side="right"]': {},

  '&[data-state="open"][data-side="top"]': {},
  '&[data-state="open"][data-side="bottom"]': {},
  '&[data-state="open"][data-side="left"]': {},
  '&[data-state="open"][data-side="right"]': {},

  variants: {
    /**
     * ..exporttypes..
     * as MenuBarContentVariants
     */
    primary: {
      true: {
        border: `1px solid ${KitColors.slateA6}`,
        backgroundColor: KitColors.white,
      },
    },
    blur: {
      true: {
        border: `1px solid ${KitColors.slateA6}`,
        backgroundColor: KitColors.blur,
        backdropFilter: 'blur(10px)',
        WebKitBackdropFilter: 'blur(10px)',
      },
    },
    neon: {
      true: {
        border: `1px solid ${KitColors.fizz6}`,
        backgroundColor: KitColors.white,
      },
    },
  },
  defaultVariants: {
    primary: true,
    blur: false,
    neon: false,
  },
})

const menubarContentSub = styled(Menubar.Sub, {
  all: 'unset',
})

/**
 *
 *
 * Label, Group, SubContent Styles...
 *
 */
const menubarLabel = styled(Menubar.Label, {})
const menubarGroup = styled(Menubar.Group, {})
const menubarSubContent = styled(Menubar.SubContent, contentStyles, {
  // defaultColorStyles..
  border: `1px solid ${KitColors.slateA6}`,
  backgroundColor: KitColors.white,
})

/**
 *
 *
 *
 *
 * ..define Item styles.
 *
 *
 */
const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: KitColors.slate11,
  borderRadius: BORDER_RADIUS_INSIDE,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 10px',
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
    backgroundImage: KitColors.heliotrope4,
    backroundColor: KitColors.heliotrope4,
    background: KitColors.heliotrope4,
    color: KitColors.slate1,

    '&:focus': {
      outline: 'none',
    },
  },
}

/**
 *
 *
 *
 * MenuBar[Item]..
 *
 *
 */
const menubarItem = styled(Menubar.Item, {
  ...itemStyles,

  variants: {
    inset: {
      true: {
        paddingLeft: 20,
      },
    },
    /**
     * ..exporttypes..
     * as MenuBarItemVariants
     */
  },
  defaultVariants: {
    inset: false,
  },
})

/**
 *
 *
 *
 * MenuBar[SubTrigger]..
 *
 *
 */
const menubarSubTrigger = styled(Menubar.SubTrigger, {
  ...itemStyles,

  '&[data-state="open"]': {
    backgroundColor: KitColors.heliotrope4,
    color: KitColors.slate1,
  },
})

/**
 *
 *
 * CheckboxItem, RadioItem Styles....
 *
 */
const menubarCheckboxItem = styled(Menubar.CheckboxItem, itemStyles)
const menubarRadioItem = styled(Menubar.RadioItem, itemStyles)

/**
 *
 *
 * MenuBar[Separator]..
 *
 *
 */
const menubarSeparator = styled(Menubar.Separator, {
  height: 1,
  margin: 5,

  // defaultColorStyles..
  backgroundColor: KitColors.slate6,

  /**
   *
   * ..variants..
   */

  variants: {
    /**
     *
     * ..exporttypes..
     * as MenuBarSeparatorVariants
     *
     */
    primary: {
      true: {
        backgroundColor: KitColors.slate6,
      },
    },
    neon: {
      true: {
        backgroundColor: KitColors.fizz6,
      },
    },
  },
  defaultVariants: {
    primary: true,
    neon: false,
  },
})

/**
 *
 *
 * MenuBar[ItemIndicator] Styles...
 *
 *
 */
const menubarItemIndicator = styled(Menubar.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 20,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const rightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: KitColors.slate9,
  '[data-highlighted] > &': {color: 'white'},
  '[data-disabled] &': {color: KitColors.slate8},
})

export const StyledMenuBarRoot = menubarRoot
export const StyledMenuBarMenu = menubarMenu
export const StyledMenuBarSub = menubarContentSub

export const StyledMenuBarTrigger = menubarTrigger
export const StyledMenuBarSubTrigger = menubarSubTrigger

export const StyledMenuBarLabel = menubarLabel
export const StyledMenuBarGroup = menubarGroup
export const StyledMenuBarContent = menubarContent
export const StyledMenuBarSubContent = menubarSubContent

export const StyledMenuBarItem = menubarItem
export const StyledMenuBarCheckboxItem = menubarCheckboxItem
export const StyledMenuBarRadioItem = menubarRadioItem

export const StyledMenuBarItemIndicator = menubarItemIndicator
export const StyledMenuBarSeparator = menubarSeparator

export const StyledMenuBarRightSlot = rightSlot

/**
 *
 *
 *
 * Variant[Props]
 */
export type MenuBarRootVariantProps = VariantProps<typeof menubarRoot>
export type MenuBarMenuVariantProps = VariantProps<typeof menubarMenu>
export type MenuBarTriggerVariantProps = VariantProps<typeof menubarTrigger>
export type MenuBarContentVariantProps = VariantProps<typeof menubarContent>
export type MenuBarItemVariantProps = VariantProps<typeof menubarItem>

export type MenuBarSeparatorVariantProps = VariantProps<typeof menubarSeparator>
