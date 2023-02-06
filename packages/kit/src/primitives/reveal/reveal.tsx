import * as React from 'react'

import type {baseComponentProps} from '../@shared/types'
import {StyledRevealRoot, StyledRevealTrigger, StyledRevealContent} from './reveal.styles'

type revealProps = {
  children: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

////////////////////// Reaveal //////////////////////

type RevealRootPrimitiveProps = baseComponentProps & React.HTMLAttributes<HTMLDivElement>
type RevealProps = revealProps & RevealRootPrimitiveProps

const RevealComponent = React.forwardRef<React.ElementRef<typeof StyledRevealRoot>, RevealProps>(
  ({children, ...props}, forwardedRef) => (
    <StyledRevealRoot {...props} ref={forwardedRef}>
      {children}
    </StyledRevealRoot>
  )
)

////////////////////// Reveal[Trigger] //////////////////////

type RevealTriggerPrimitiveProps = baseComponentProps & React.HTMLAttributes<HTMLButtonElement>
type RevealTriggerProps = RevealTriggerPrimitiveProps
const RevealTrigger = React.forwardRef<
  React.ElementRef<typeof StyledRevealTrigger>,
  RevealTriggerProps
>(({children, ...props}, forwardedRef) => (
  <StyledRevealTrigger {...props} ref={forwardedRef}>
    {children}
  </StyledRevealTrigger>
))

////////////////////// Reveal[Content] //////////////////////

type RevealContentPrimitiveProps = baseComponentProps & React.HTMLAttributes<HTMLDivElement>
type RevealContentProps = RevealContentPrimitiveProps

const RevealContent = React.forwardRef<
  React.ElementRef<typeof StyledRevealContent>,
  RevealContentProps
>(({children, ...props}, forwardedRef) => (
  <StyledRevealContent {...props} ref={forwardedRef}>
    {children}
  </StyledRevealContent>
))

///////////////// export parts //////////////////////

export const Reveal: React.FC<RevealProps> & {
  Trigger: typeof RevealTrigger
  Content: typeof RevealContent
} = (props) => <RevealComponent {...props} />

Reveal.Trigger = RevealTrigger
Reveal.Content = RevealContent

///////////////// display name //////////////////////

Reveal.displayName = 'Reveal'

///////////////// prop types //////////////////////
export type {
  //
  RevealProps,
  //
  RevealContentProps,
  //
  RevealTriggerProps,
}
