import * as React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {
  StyledNavMenuRoot,
  StyledNavMenuBar,
  StyledNavMenuTrigger,
  StyledNavMenuContent,
  StyledNavIcon,
  //
  StyledNavLink,
  //
  StyledNavMenuIndicator,
  StyledNavMenuViewport,
  StyledViewport,
  StyledNavMenuInner,
} from './nav.styles'
import type {NavMenuRootVariantProps} from './nav.styles'
import type {baseComponentProps} from '../@shared/types'
import {ArrowDownIcon} from '../_icon/src/ArrowDown.Icon'

/* ---------------------------- Nav Menu Root ---------------------------- */
type NavMenuPrimitiveProps = baseComponentProps &
  NavMenuRootVariantProps &
  React.ComponentProps<typeof NavigationMenu.Root>
type NavMenuProps = NavMenuPrimitiveProps

const NavMenuRoot = React.forwardRef<React.ElementRef<typeof StyledNavMenuRoot>, NavMenuProps>(
  (props, forwardedRef) => {
    return (
      <StyledNavMenuRoot {...props} ref={forwardedRef} inspect={props.inspect}>
        {props.children}
      </StyledNavMenuRoot>
    )
  }
)
/* -------- END Root */

/* ---------------------------- Nav Menu Bar ---------------------------- */
type NavMenuBarPrimitiveProps = baseComponentProps &
  React.ComponentProps<typeof NavigationMenu.List>
type NavMenuBarProps = NavMenuBarPrimitiveProps

const NavBar_List = React.forwardRef<React.ElementRef<typeof StyledNavMenuBar>, NavMenuBarProps>(
  (props, forwardedRef) => {
    return (
      <StyledNavMenuBar {...props} ref={forwardedRef}>
        {props.children}

        <StyledNavMenuIndicator />
      </StyledNavMenuBar>
    )
  }
)
/* -------- END Bar */

/* ---------------------------- Nav Menu Item Portal ---------------------------- */
type NavMenuItemPrimitiveProps = React.ComponentPropsWithRef<typeof NavigationMenu.Item>
type NavMenuItemProps = NavMenuItemPrimitiveProps
const NavMenuItemComponent = React.forwardRef<
  React.ElementRef<typeof NavigationMenu.Item>,
  NavMenuItemProps
>((props, forwardedRef) => {
  return (
    <NavigationMenu.Item {...props} ref={forwardedRef}>
      {props.children}
    </NavigationMenu.Item>
  )
})
/* -------- END Root */

/* ---------------------------- Nav Menu Trigger ---------------------------- */
type NavMenuTriggerPrimitiveProps = baseComponentProps &
  React.ComponentProps<typeof NavigationMenu.Trigger>
type NavMenuTriggerProps = NavMenuTriggerPrimitiveProps

const NavTrigger = React.forwardRef<
  React.ElementRef<typeof StyledNavMenuTrigger>,
  NavMenuTriggerProps
>((props, forwardedRef) => {
  return (
    <StyledNavMenuTrigger
      {...props}
      ref={forwardedRef}
      css={{
        ...props.css,
      }}>
      {props.children}
      <StyledNavIcon>
        <ArrowDownIcon />
      </StyledNavIcon>
    </StyledNavMenuTrigger>
  )
})
/* -------- END Trigger */

/* ---------------------------- Nav Menu Content ---------------------------- */
type NavMenuContentPrimitiveProps = baseComponentProps &
  React.ComponentProps<typeof NavigationMenu.Content>
type NavMenuContentProps = NavMenuContentPrimitiveProps

const NavContent = React.forwardRef<
  React.ElementRef<typeof StyledNavMenuContent>,
  NavMenuContentProps
>((props, forwardedRef) => {
  return (
    <StyledNavMenuContent
      {...props}
      ref={forwardedRef}
      css={{
        ...props.css,
      }}>
      <StyledNavMenuInner>{props.children}</StyledNavMenuInner>
    </StyledNavMenuContent>
  )
})
/* -------- END Content */

/* ---------------------------- Nav Menu Link ---------------------------- */
type NavMenuLinkPrimitiveProps = baseComponentProps &
  React.ComponentProps<typeof NavigationMenu.Link>
type NavMenuLinkProps = NavMenuLinkPrimitiveProps

const NavLink = React.forwardRef<React.ElementRef<typeof StyledNavLink>, NavMenuLinkProps>(
  (props, forwardedRef) => {
    return (
      <StyledNavLink {...props} ref={forwardedRef}>
        {props.children}
      </StyledNavLink>
    )
  }
)
/* -------- END Link */

/* ---------------------------- Nav Menu Viewport ---------------------------- */
type NavMenuViewportPrimitiveProps = baseComponentProps &
  React.ComponentProps<typeof NavigationMenu.Viewport>
type NavMenuViewportProps = NavMenuViewportPrimitiveProps

const NavViewport = React.forwardRef<
  React.ElementRef<typeof StyledNavMenuViewport>,
  NavMenuViewportProps
>(({...props}, forwardedRef) => {
  return (
    <StyledViewport>
      <StyledNavMenuViewport {...props} ref={forwardedRef} />
    </StyledViewport>
  )
})
/* -------- END Viewport */

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
 *
 *
 *
 *
 * Copyright (c) 2021, Atelier Kit. All rights reserved.
 *
 *
 */

/* ---------------------------- EXPORTS ---------------------------- */
export const NavMenu = NavMenuRoot
export const NavMenuBar = NavBar_List
export const NavMenuItem = NavMenuItemComponent

export const NavMenuTrigger = NavTrigger
export const NavMenuContent = NavContent
export const NavMenuLink = NavLink
export const NavMenuViewport = NavViewport
