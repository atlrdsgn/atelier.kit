import * as React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {
  StyledNavMenuRoot,
  StyledNavMenuBar,
  StyledNavMenuTrigger,
  StyledNavMenuContent,
  //
  StyledNavLink,
  //
  StyledNavMenuViewport,
  StyledViewport,
} from './nav.styles'
import type {CSS} from '../../theme'

/* ---------------------------- Nav Menu Root ---------------------------- */
type NavMenuPrimitiveProps = React.ComponentProps<typeof NavigationMenu.Root>
type NavMenuProps = NavMenuPrimitiveProps & {css?: CSS}

const NavMenuRoot = React.forwardRef<React.ElementRef<typeof StyledNavMenuRoot>, NavMenuProps>(
  (props, forwardedRef) => {
    return (
      <StyledNavMenuRoot {...props} ref={forwardedRef}>
        {props.children}
      </StyledNavMenuRoot>
    )
  }
)
/* -------- END Root */

/* ---------------------------- Nav Menu Bar ---------------------------- */
type NavMenuBarPrimitiveProps = React.ComponentProps<typeof NavigationMenu.List>
type NavMenuBarProps = NavMenuBarPrimitiveProps & {css?: CSS}

const NavBar_List = React.forwardRef<React.ElementRef<typeof StyledNavMenuBar>, NavMenuBarProps>(
  (props, forwardedRef) => {
    return (
      <StyledNavMenuBar {...props} ref={forwardedRef}>
        {props.children}
      </StyledNavMenuBar>
    )
  }
)
/* -------- END Bar */

/* ---------------------------- Nav Menu Trigger ---------------------------- */
type NavMenuTriggerPrimitiveProps = React.ComponentProps<typeof NavigationMenu.Trigger>
type NavMenuTriggerProps = NavMenuTriggerPrimitiveProps & {css?: CSS}

const NavTrigger = React.forwardRef<
  React.ElementRef<typeof StyledNavMenuTrigger>,
  NavMenuTriggerProps
>((props, forwardedRef) => {
  return (
    <StyledNavMenuTrigger {...props} ref={forwardedRef}>
      {props.children}
    </StyledNavMenuTrigger>
  )
})
/* -------- END Trigger */

/* ---------------------------- Nav Menu Content ---------------------------- */
type NavMenuContentPrimitiveProps = React.ComponentProps<typeof NavigationMenu.Content>
type NavMenuContentProps = NavMenuContentPrimitiveProps & {css?: CSS}

const NavContent = React.forwardRef<
  React.ElementRef<typeof StyledNavMenuContent>,
  NavMenuContentProps
>((props, forwardedRef) => {
  return (
    <StyledNavMenuContent {...props} ref={forwardedRef}>
      {props.children}
    </StyledNavMenuContent>
  )
})
/* -------- END Content */

/* ---------------------------- Nav Menu Link ---------------------------- */
type NavMenuLinkPrimitiveProps = React.ComponentProps<typeof NavigationMenu.Link>
type NavMenuLinkProps = NavMenuLinkPrimitiveProps & {css?: CSS}

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
type NavMenuViewportPrimitiveProps = React.ComponentProps<typeof NavigationMenu.Viewport>
type NavMenuViewportProps = NavMenuViewportPrimitiveProps & {
  css?: CSS
}

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
export const NavMenuTrigger = NavTrigger
export const NavMenuContent = NavContent
export const NavMenuLink = NavLink
export const NavMenuViewport = NavViewport
