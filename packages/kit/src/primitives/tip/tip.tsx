import * as React from 'react'
import type {baseComponentProps} from '../@shared/types'
import type {TipContentVariantProps} from './tip.styles'
import {
  StyledTipRoot,
  StyledTipContent,
  StyledTipTrigger,
  StyledTipArrow,
  TipProvider,
  TipPortal,
} from './tip.styles'

////////////////////// Root ////////////////////

type TipPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof StyledTipRoot>
type TipProps = TipPrimitiveProps

const TipPrimitive: React.FC<TipProps> = ({children, ...rest}) => (
  <TipProvider delayDuration={300} skipDelayDuration={100}>
    <StyledTipRoot
      {...rest}
      css={{
        ...rest.css,
      }}>
      {children}
    </StyledTipRoot>
  </TipProvider>
)

////////////////////// Trigger ////////////////////

type TipTriggerPrimitiveProps = baseComponentProps & React.ComponentProps<typeof StyledTipTrigger>
type TipTriggerProps = TipTriggerPrimitiveProps

const TipTriggerPrimitive = React.forwardRef<
  React.ElementRef<typeof StyledTipTrigger>,
  TipTriggerProps
>(({children, ...rest}, ref) => (
  <StyledTipTrigger
    {...rest}
    ref={ref}
    css={{
      ...rest.css,
    }}>
    {children}
  </StyledTipTrigger>
))

////////////////////// Content ////////////////////

type TipContentPrimitiveProps = baseComponentProps &
  TipContentVariantProps &
  React.ComponentPropsWithRef<typeof StyledTipContent>
type TipContentProps = TipContentPrimitiveProps

const TipContentPrimitive = React.forwardRef<
  React.ElementRef<typeof StyledTipContent>,
  TipContentProps
>(({children, sideOffset = 8, size = 'base', ...rest}, ref) => (
  <TipPortal>
    <StyledTipContent
      {...rest}
      ref={ref}
      sideOffset={sideOffset}
      size={size}
      css={{
        ...rest.css,
      }}>
      {children}
    </StyledTipContent>
  </TipPortal>
))

/** -------------------- export parts -------------------- */
export const Tip: React.FC<TipProps> & {
  Content: typeof TipContentPrimitive
  Trigger: typeof TipTriggerPrimitive
  Arrow: typeof StyledTipArrow
} = (props) => <TipPrimitive {...props} />

Tip.Content = TipContentPrimitive
Tip.Trigger = TipTriggerPrimitive
Tip.Arrow = StyledTipArrow

Tip.displayName = 'Tip'

/** -------------------- export types -------------------- */
export type {TipProps, TipTriggerProps, TipContentProps}
