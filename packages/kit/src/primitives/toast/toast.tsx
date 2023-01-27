import * as ToastPrimitive from '@radix-ui/react-toast'
import * as React from 'react'
import {CrossIcon} from '../../core/assets'

import type {CSS} from '../../theme'
import {
  ToastAction,
  ToastClose,
  ToastComponent,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast.styles'

export interface toastProps {
  children?: React.ReactNode
  swipeDirection?: 'left' | 'right'
  swipeThreshold?: number
  duration?: number
  open?: boolean
  onOpenChange?(open: boolean): void
  title?: string
  description?: string
  altText?: string
  hotkey?: string[]
  label?: string
}

/**
 *
 *
 *
 * Toast[Root]
 *
 *
 */
type ToastPrimitiveProps = React.ComponentProps<typeof ToastPrimitive.Root>
type ToastProps = ToastPrimitiveProps & toastProps & {css?: CSS}
const ToastRoot = React.forwardRef<React.ElementRef<typeof ToastComponent>, ToastProps>(
  ({...props}, forwardedRef) => (
    <ToastProvider swipeDirection={'right'} duration={5000}>
      <ToastComponent ref={forwardedRef} {...props} open={props.open}>
        {props.children}
      </ToastComponent>
      <ToastViewport label={`Notifications ({hotkey})`} hotkey={props.hotkey} />
    </ToastProvider>
  )
)

/**
 *
 *
 * Toast[Heading]
 */
type ToastHeadingPrimitiveProps = React.ComponentProps<typeof ToastPrimitive.Title>
type ToastHeadingProps = ToastHeadingPrimitiveProps & {css?: CSS}
const ToastHead = React.forwardRef<React.ElementRef<typeof ToastTitle>, ToastHeadingProps>(
  ({...props}, forwardedRef) => (
    <ToastTitle ref={forwardedRef} {...props}>
      {props.children}
    </ToastTitle>
  )
)

/**
 *
 * Toast[Description]
 */
type ToastDescriptionPrimitiveProps = React.ComponentProps<typeof ToastPrimitive.Description>
type ToastSubheadingProps = ToastDescriptionPrimitiveProps & {css?: CSS}
const ToastSubHead = React.forwardRef<
  React.ElementRef<typeof ToastDescription>,
  ToastSubheadingProps
>(({...props}, forwardedRef) => (
  <ToastDescription ref={forwardedRef} {...props}>
    {props.children}
  </ToastDescription>
))

/**
 *
 *
 * Toast[Action]
 *
 */
type ToastActionPrimitiveProps = React.ComponentProps<typeof ToastPrimitive.Action>
type ToastActionProps = ToastActionPrimitiveProps & {css?: CSS}
const ToastActionItemComponent = React.forwardRef<
  React.ElementRef<typeof ToastAction>,
  ToastActionProps
>(({...props}, forwardedRef) => (
  <ToastAction ref={forwardedRef} {...props}>
    {props.children}
  </ToastAction>
))

/**
 *
 *
 * Toast[Close]
 *
 *
 */
type ToastClosePrimitiveProps = React.ComponentProps<typeof ToastPrimitive.Close>
type ToastCloseProps = ToastClosePrimitiveProps & {css?: CSS}
const ToastCloseButtonComponent = React.forwardRef<
  React.ElementRef<typeof ToastClose>,
  ToastCloseProps
>(({...props}, forwardedRef) => (
  <ToastClose ref={forwardedRef} {...props}>
    <CrossIcon />
  </ToastClose>
))

/** ------------------ TOAST EXPORTS ----------------------- */
export const Toast = React.memo(ToastRoot)
export const ToastHeading = React.memo(ToastHead)
export const ToastSubheading = React.memo(ToastSubHead)
export const ToastCloseButton = React.memo(ToastCloseButtonComponent)
export const ToastActionItem = React.memo(ToastActionItemComponent)

Toast.displayName = 'Toast'
ToastHeading.displayName = 'ToastHeading'
ToastSubheading.displayName = 'ToastSubheading'
ToastCloseButton.displayName = 'ToastCloseButton'
ToastActionItem.displayName = 'ToastActionItem'

/** ------------------------------------------ */
export type {ToastActionProps, ToastHeadingProps, ToastProps, ToastSubheadingProps}
