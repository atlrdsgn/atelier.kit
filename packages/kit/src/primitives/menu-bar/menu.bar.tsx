import * as React from 'react'
import * as Menubar from '@radix-ui/react-menubar'
import type {CSS} from '../../theme'
import type {
  MenuBarRootVariantProps,
  MenuBarContentVariantProps,
  MenuBarItemVariantProps,
  MenuBarSeparatorVariantProps,
} from './menu.bar.styles'
import {
  StyledMenuBarRoot,
  StyledMenuBarTrigger,
  StyledMenuBarSubTrigger,
  StyledMenuBarLabel,
  StyledMenuBarContent,
  StyledMenuBarItem,
  StyledMenuBarGroup,
  StyledMenuBarItemIndicator,
  StyledMenuBarSeparator,
  StyledMenuBarRightSlot,
  StyledMenuBarSubContent,
  StyledMenuBarCheckboxItem,
  StyledMenuBarRadioItem,
  StyledMenuBarMenu,
  StyledMenuBarSub,
} from './menu.bar.styles'

/**
 *
 * NOTES:
 *
 * Forwards the ref to the underlying DOM element.
 *
 * const [Primitive] = React.forwardRef<React.ElementRef<typeof Styled[Component]>, Props>
 *
 */

/**
 *
 * @types
 */

interface menuBarProps {
  // children?: React.ReactNode
  css?: CSS
}

/**
 *
 * ROOT_MENU_BAR..
 *
 * the root element that wraps the menu bar.
 *
 * root style.
 *
 * Props:
 * - asChild: boolean
 * - defaultValue: string
 * - value: string
 * - onValueChange: (value: string) => void
 * - dir: 'ltr' | 'rtl'
 * - loop: boolean
 */
type MenuBarPrimitiveProps = React.ComponentPropsWithRef<typeof Menubar.Root>
type MenuBarProps = menuBarProps & MenuBarPrimitiveProps & MenuBarRootVariantProps
const MenuRoot = React.forwardRef<React.ElementRef<typeof StyledMenuBarRoot>, MenuBarProps>(
  ({loop = true, ...props}, forwardedRef) => {
    return (
      <StyledMenuBarRoot
        {...props}
        ref={forwardedRef}
        loop={loop}
        onValueChange={props.onValueChange}
        css={{
          ...props.css,
        }}>
        {props.children}
      </StyledMenuBarRoot>
    )
  }
)

/**
 *
 *
 *
 * MENU_SUB
 *
 */
type MenuBarSUBPrimitiveProps = React.ComponentPropsWithRef<typeof Menubar.Sub>
type MenuBarSUBProps = menuBarProps & MenuBarSUBPrimitiveProps
const MenuSub = React.forwardRef<React.ElementRef<typeof StyledMenuBarSub>, MenuBarSUBProps>(
  (props) => {
    return <StyledMenuBarSub {...props}>{props.children}</StyledMenuBarSub>
  }
)

/**
 *
 * MENU_BAR_MENU..
 *
 * the menu element that wraps the menu bar.
 *
 * Props:
 * - value: string
 * * A unique value that associates the item with an active value
 * * when the navigation menu is controlled.
 * * This prop is managed automatically when uncontrolled.
 *
 */

/**
 *
 * MENU_BAR_TRIGGER..
 *
 * button element that triggers the menu to open.
 */
type MenuBarTriggerPrimitiveProps = React.ComponentPropsWithRef<typeof Menubar.Trigger>
type MenuBarTriggerProps = menuBarProps & MenuBarTriggerPrimitiveProps
const MenuTrigger = React.forwardRef<
  React.ElementRef<typeof StyledMenuBarTrigger>,
  MenuBarTriggerProps
>(({...props}, forwardedRef) => {
  return (
    <StyledMenuBarTrigger
      {...props}
      ref={forwardedRef}
      asChild={props.asChild}
      css={{
        ...props.css,
      }}>
      {props.children}
    </StyledMenuBarTrigger>
  )
})

/**
 *
 * MENU_BAR_SUB_TRIGGER..
 *
 * button element that triggers the sub menu to open. (offset)
 *
 * <Menubar.Sub>
 *   <Menubar.SubTrigger />
 *   <Menubar.Portal>
 *   <Menubar.SubContent />
 *   </Menubar.Portal>
 *  </Menubar.Sub>
 */
type MenuBarSubTriggerPrimitiveProps = React.ComponentPropsWithRef<typeof Menubar.SubTrigger>
type MenuBarSubTriggerProps = menuBarProps & MenuBarSubTriggerPrimitiveProps
const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof StyledMenuBarSubTrigger>,
  MenuBarSubTriggerProps
>(({...props}, forwardedRef) => {
  return (
    <StyledMenuBarSubTrigger
      {...props}
      ref={forwardedRef}
      css={{
        ...props.css,
      }}>
      {props.children}
    </StyledMenuBarSubTrigger>
  )
})

/**
 *
 * MENU_BAR_CONTENT..
 *
 * the content that renders inside of the portal. (the menu)
 */
const MenuBarPortal = Menubar.Portal

type MenuBarContentPrimitiveProps = React.ComponentPropsWithRef<typeof Menubar.Content>
type MenuBarContentProps = menuBarProps &
  MenuBarContentVariantProps &
  MenuBarContentPrimitiveProps & {label?: string}
const MenuContent = React.forwardRef<
  React.ElementRef<typeof StyledMenuBarContent>,
  MenuBarContentProps
>(({sideOffset = 6, label, ...props}, forwardedRef) => {
  return (
    <MenuBarPortal {...props}>
      <StyledMenuBarContent
        {...props}
        ref={forwardedRef}
        sideOffset={sideOffset}
        primary={props.primary}
        align={props.align}
        alignOffset={props.alignOffset}
        css={{
          ...props.css,
        }}>
        <MenuBarLabel>{label}</MenuBarLabel>
        {props.children}
      </StyledMenuBarContent>
    </MenuBarPortal>
  )
})

/**
 *
 *
 * MENU_SUB_CONTENT & PORTAL..
 */
type MenuBarSubContentPrimitiveProps = React.ComponentPropsWithRef<typeof Menubar.SubContent>
type MenuBarSubContentProps = menuBarProps & MenuBarSubContentPrimitiveProps
const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof StyledMenuBarSubContent>,
  MenuBarSubContentProps
>(({...props}, forwardedRef) => {
  return (
    <MenuBarPortal {...props}>
      <StyledMenuBarSubContent {...props} ref={forwardedRef} css={{...props.css}}>
        {props.children}
      </StyledMenuBarSubContent>
    </MenuBarPortal>
  )
})

/**
 *
 * MENU_ITEM..
 *
 * a menu item that renders inside of MENU_BAR_CONTENT.
 *
 * also could be named (option)
 */
type asHrefProps = {as?: React.ElementType; href?: string}
type MenuBarItemPrimitiveProps = React.ComponentPropsWithRef<typeof Menubar.Item> & asHrefProps
type MenuBarItemProps = menuBarProps & MenuBarItemPrimitiveProps & MenuBarItemVariantProps
const MenuItem = React.forwardRef<React.ElementRef<typeof StyledMenuBarItem>, MenuBarItemProps>(
  ({as, href, ...props}, forwardedRef) => {
    return (
      <StyledMenuBarItem {...props} ref={forwardedRef} as={as} href={href} inset={props.inset}>
        {props.children}
      </StyledMenuBarItem>
    )
  }
)

/**
 *
 * MENU_ITEM..
 *
 * a menu item that renders inside of MENU_BAR_CONTENT.
 *
 * also could be named (option)
 */
type MenuBarGroupPrimitiveProps = React.ComponentPropsWithRef<typeof Menubar.Group>
type MenuBarGroupProps = menuBarProps & MenuBarGroupPrimitiveProps
const MenuGroup = React.forwardRef<React.ElementRef<typeof StyledMenuBarGroup>, MenuBarGroupProps>(
  ({...props}, forwardedRef) => {
    return (
      <StyledMenuBarGroup {...props} ref={forwardedRef}>
        {props.children}
      </StyledMenuBarGroup>
    )
  }
)

type MenuBarSeparatorPrimitiveProps = React.ComponentPropsWithRef<typeof Menubar.Separator>
type MenuBarSeparatorProps = menuBarProps &
  MenuBarSeparatorPrimitiveProps &
  MenuBarSeparatorVariantProps
const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof StyledMenuBarSeparator>,
  MenuBarSeparatorProps
>(({...props}, forwardedRef) => {
  return <StyledMenuBarSeparator {...props} ref={forwardedRef} primary={props.primary} />
})

/* ------------------------------ EXPORTS --------------------------------- */
export const MenuBar = MenuRoot
export const MenuBarSub = MenuSub

export const MenuBarTrigger = MenuTrigger
export const MenuBarSubTrigger = MenuSubTrigger
export const MenuBarLabel = StyledMenuBarLabel

export const MenuBarContent = MenuContent
export const MenuBarSubContent = MenuSubContent

export const MenuBarItem = MenuItem
export const MenuBarGroup = MenuGroup
export const MenuBarItemIndicator = StyledMenuBarItemIndicator
export const MenuBarSeparator = MenuSeparator

export const MenuBarMenu = StyledMenuBarMenu
export const MenuBarRightSlot = StyledMenuBarRightSlot

export const MenuBarCheckboxItem = StyledMenuBarCheckboxItem
export const MenuBarRadioItem = StyledMenuBarRadioItem
/* ------------------------ DISPLAY NAMES ------------------------------ */
MenuBar.displayName = 'MenuBar'
MenuBarMenu.displayName = 'MenuBarMenu'
MenuBarTrigger.displayName = 'MenuBarTrigger'
MenuBarSubTrigger.displayName = 'MenuBarSubTrigger'
MenuBarContent.displayName = 'MenuBarContent'
MenuBarItem.displayName = 'MenuBarItem'
MenuBarGroup.displayName = 'MenuBarGroup'
MenuBarItemIndicator.displayName = 'MenuBarItemIndicator'
MenuBarSeparator.displayName = 'MenuBarSeparator'
/* -------------------------------------------------------------------- */

/* --------------------------------------------------------------
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger />
      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Label />
          <Menubar.Item />

          <Menubar.Group>
            <Menubar.Item />
          </Menubar.Group>

          <Menubar.CheckboxItem>
            <Menubar.ItemIndicator />
          </Menubar.CheckboxItem>

          <Menubar.RadioGroup>
            <Menubar.RadioItem>
              <Menubar.ItemIndicator />
            </Menubar.RadioItem>
          </Menubar.RadioGroup>

          <Menubar.Sub>
            <Menubar.SubTrigger />
            <Menubar.Portal>
              <Menubar.SubContent />
            </Menubar.Portal>
          </Menubar.Sub>

          <Menubar.Separator />
          <Menubar.Arrow />
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
----------------------------------------------------- */
