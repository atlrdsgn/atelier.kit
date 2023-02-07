import * as React from 'react'
import * as M from '@radix-ui/react-menubar'
import type {
  MenuBarRootVariantProps,
  MenuBarContentVariantProps,
  MenuBarItemVariantProps,
  MenuBarSeparatorVariantProps,
  MenuBarTriggerVariantProps,
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
import {baseComponentProps} from '../@shared/types'

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
type MenuBarPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof M.Root>
type MenuBarProps = MenuBarPrimitiveProps & MenuBarRootVariantProps
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
type MenuBarSUBPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof M.Sub>
type MenuBarSUBProps = MenuBarSUBPrimitiveProps

const MenuSub = ({children, css, ...rest}: MenuBarSUBProps) => (
  <StyledMenuBarSub {...rest} css={{...css}}>
    {children}
  </StyledMenuBarSub>
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
type MenuBarTriggerPrimitiveProps = baseComponentProps &
  MenuBarTriggerVariantProps &
  React.ComponentPropsWithRef<typeof M.Trigger>
type MenuBarTriggerProps = MenuBarTriggerPrimitiveProps
const MenuTrigger = React.forwardRef<
  React.ElementRef<typeof StyledMenuBarTrigger>,
  MenuBarTriggerProps
>(({...props}, forwardedRef) => {
  return (
    <StyledMenuBarTrigger
      {...props}
      ref={forwardedRef}
      asChild={props.asChild}
      slate={props.slate}
      white={props.white}
      black={props.black}
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
type MenuBarSubTriggerPrimitiveProps = baseComponentProps &
  React.ComponentPropsWithRef<typeof M.SubTrigger>
type MenuBarSubTriggerProps = MenuBarSubTriggerPrimitiveProps
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
const MenuBarPortal = M.Portal

type MenuBarContentPrimitiveProps = baseComponentProps &
  React.ComponentPropsWithRef<typeof M.Content>
type MenuBarContentProps = MenuBarContentVariantProps &
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
        <StyledMenuBarLabel>{label}</StyledMenuBarLabel>
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
type MenuBarSubContentPrimitiveProps = baseComponentProps &
  React.ComponentPropsWithRef<typeof M.SubContent>
type MenuBarSubContentProps = MenuBarSubContentPrimitiveProps
const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof StyledMenuBarSubContent>,
  MenuBarSubContentProps
>(({...props}, forwardedRef) => {
  return (
    <MenuBarPortal {...props}>
      <StyledMenuBarSubContent {...props} ref={forwardedRef} sideOffset={8} css={{...props.css}}>
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
type MenuBarItemPrimitiveProps = baseComponentProps &
  React.ComponentPropsWithRef<typeof M.Item> &
  asHrefProps
type MenuBarItemProps = MenuBarItemPrimitiveProps & MenuBarItemVariantProps
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
type MenuBarGroupPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof M.Group>
type MenuBarGroupProps = MenuBarGroupPrimitiveProps
const MenuGroup = React.forwardRef<React.ElementRef<typeof StyledMenuBarGroup>, MenuBarGroupProps>(
  ({...props}, forwardedRef) => {
    return (
      <StyledMenuBarGroup {...props} ref={forwardedRef}>
        {props.children}
      </StyledMenuBarGroup>
    )
  }
)

type MenuBarSeparatorPrimitiveProps = baseComponentProps &
  React.ComponentPropsWithRef<typeof M.Separator>
type MenuBarSeparatorProps = MenuBarSeparatorPrimitiveProps & MenuBarSeparatorVariantProps
const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof StyledMenuBarSeparator>,
  MenuBarSeparatorProps
>(({...props}, forwardedRef) => {
  return <StyledMenuBarSeparator {...props} ref={forwardedRef} primary={props.primary} />
})

/* ------------------------------ EXPORTS --------------------------------- */
export const Menubar: React.FC<MenuBarProps> & {
  Menu: typeof StyledMenuBarMenu
  SubMenu: typeof MenuSub
  Trigger: typeof MenuTrigger
  SubTrigger: typeof MenuSubTrigger
  Content: typeof MenuContent
  SubContent: typeof MenuSubContent
  Item: typeof MenuItem
  Group: typeof MenuGroup
  ItemIndicator: typeof StyledMenuBarItemIndicator
  Separator: typeof MenuSeparator
  RadioItem: typeof StyledMenuBarRadioItem
  CheckboxItem: typeof StyledMenuBarCheckboxItem
  SlotRight: typeof StyledMenuBarRightSlot

  Portal: typeof MenuBarPortal
} = (props) => <MenuRoot {...props} />

///////////////////////// parts ///////////////////////////

Menubar.Menu = StyledMenuBarMenu
Menubar.SubMenu = MenuSub
Menubar.Trigger = MenuTrigger
Menubar.SubTrigger = MenuSubTrigger
Menubar.Content = MenuContent
Menubar.SubContent = MenuSubContent
Menubar.Item = MenuItem
Menubar.Group = MenuGroup
Menubar.ItemIndicator = StyledMenuBarItemIndicator
Menubar.Separator = MenuSeparator
Menubar.RadioItem = StyledMenuBarRadioItem
Menubar.CheckboxItem = StyledMenuBarCheckboxItem
Menubar.SlotRight = StyledMenuBarRightSlot
Menubar.Portal = MenuBarPortal

Menubar.displayName = 'Menubar'

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
