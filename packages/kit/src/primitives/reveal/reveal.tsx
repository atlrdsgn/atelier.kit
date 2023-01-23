import * as React from 'react'
import type {CSS} from '../../theme'
import {
  StyledRevealRoot,
  StyledRevealTrigger,
  StyledRevealContent,
  RevealProps,
  RevealTriggerProps,
  RevealContentProps,
} from './reveal.styles'

type revealProps = {
  children: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 *
 *
 * Reveal[Root]
 *
 */
type RevealRootPrimitiveProps = React.HTMLAttributes<HTMLDivElement>
type RProps = RevealProps & revealProps & RevealRootPrimitiveProps & {css?: CSS}
const RevealComponent = React.forwardRef<React.ElementRef<typeof StyledRevealRoot>, RProps>(
  ({children, ...props}, forwardedRef) => (
    <StyledRevealRoot {...props} ref={forwardedRef}>
      {children}
    </StyledRevealRoot>
  )
)

/**
 *
 *
 * Reveal[Trigger]
 *
 */
type RevealTriggerPrimitiveProps = React.HTMLAttributes<HTMLButtonElement>
type TriggerProps = RevealTriggerProps & RevealTriggerPrimitiveProps & {css?: CSS}
const Trigger = React.forwardRef<React.ElementRef<typeof StyledRevealTrigger>, TriggerProps>(
  ({children, ...props}, forwardedRef) => (
    <StyledRevealTrigger {...props} ref={forwardedRef}>
      {children}
    </StyledRevealTrigger>
  )
)

/**
 *
 *
 * Reveal[Content]
 *
 */
type RevealContentPrimitiveProps = React.HTMLAttributes<HTMLDivElement>
type ContentProps = RevealContentProps & RevealContentPrimitiveProps & {css?: CSS}
const Content = React.forwardRef<React.ElementRef<typeof StyledRevealContent>, ContentProps>(
  ({children, ...props}, forwardedRef) => (
    <StyledRevealContent {...props} ref={forwardedRef}>
      {children}
    </StyledRevealContent>
  )
)

export const Reveal = RevealComponent
export const RevealTrigger = Trigger
export const RevealContent = Content

/**
 *
 * Path: src/primitives/reveal/reveal.tsx
 *
 * Reveal
 * RevealTrigger
 * RevealContent
 *
 */
