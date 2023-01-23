import * as React from 'react'
import {CSS} from '../../theme'
import {
  StyledSARoot,
  StyledSAViewport,
  StyledSAScrollbar,
  StyledSAScrollbarThumb,
  StyledSACorner,
} from './sa.styles'

/**
 *
 *
 * SCROLL_ AREA_ ROOT
 */
type ScrollAreaRootPrimitiveProps = React.ComponentPropsWithRef<typeof StyledSARoot> &
  React.HTMLAttributes<HTMLDivElement>
type SARootProps = ScrollAreaRootPrimitiveProps & {css?: CSS}

const SA_Root = React.forwardRef<HTMLDivElement, SARootProps>((props, forwardedRef) => {
  const {children, ...restProps} = props
  return (
    <StyledSARoot {...restProps} ref={forwardedRef} scrollHideDelay={props.scrollHideDelay}>
      {children}
    </StyledSARoot>
  )
})

/**
 *
 *
 * SCROLL_ AREA_ VIEWPORT
 */

type ScrollAreaViewportPrimitiveProps = React.ComponentPropsWithRef<typeof StyledSAViewport> &
  React.ComponentPropsWithoutRef<'div'>
type SAViewportProps = ScrollAreaViewportPrimitiveProps & {css?: CSS}

const SA_Viewport = React.forwardRef<HTMLDivElement, SAViewportProps>((props, forwardedRef) => {
  const {children, ...restProps} = props
  return (
    <StyledSAViewport {...restProps} ref={forwardedRef} asChild={props.asChild}>
      {children}
    </StyledSAViewport>
  )
})

/**
 *
 *
 * SCROLL_AREA_SCROLLBAR
 *
 * this is the scrollbar track.
 * and styled thumb component.
 */
type ScrollAreaScrollbarPrimitiveProps = React.ComponentPropsWithRef<typeof StyledSAScrollbar> &
  React.ComponentPropsWithoutRef<'div'>
type SAScrollbarProps = ScrollAreaScrollbarPrimitiveProps & {css?: CSS}

const SA_Scrollbar = React.forwardRef<HTMLDivElement, SAScrollbarProps>((props, forwardedRef) => {
  const {children, ...restProps} = props
  return (
    <StyledSAScrollbar {...restProps} ref={forwardedRef} orientation={props.orientation}>
      <StyledSAScrollbarThumb />
    </StyledSAScrollbar>
  )
})

/**
 *
 *
 * SCROLL_AREA_CORNER
 */
type ScrollAreaCornerPrimitiveProps = React.ComponentPropsWithRef<typeof StyledSACorner> &
  React.ComponentPropsWithoutRef<'div'>
type SACornerProps = ScrollAreaCornerPrimitiveProps & {css?: CSS}

const SA_Corner = React.forwardRef<HTMLDivElement, SACornerProps>((props, forwardedRef) => {
  const {children, ...restProps} = props
  return <StyledSACorner {...restProps} ref={forwardedRef} />
})

export const ScrollArea = SA_Root
export const ScrollAreaViewport = SA_Viewport
export const ScrollAreaScrollbar = SA_Scrollbar
export const ScrollAreaCorner = SA_Corner

ScrollArea.displayName = 'ScrollArea'
ScrollAreaViewport.displayName = 'ScrollAreaViewport'
ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar'
ScrollAreaCorner.displayName = 'ScrollAreaCorner'

export type {SARootProps, SAViewportProps, SAScrollbarProps, SACornerProps}
