import * as React from 'react'
import {Dispatch, SetStateAction} from 'react'
import {CSS} from '../../theme'
import {StyledPopover, StyledTrigger, StyledContent} from './pop.styles'

interface popoverProps {
  children: React.ReactNode
  content?: React.ReactNode

  align?: 'left' | 'center' | 'right' | string
  openPopover?: boolean
  setOpenPopover?: Dispatch<SetStateAction<boolean>>
}

type PopoverPrimitiveProps = React.ComponentProps<typeof StyledPopover> &
  React.HTMLAttributes<HTMLDivElement>
type PopoverProps = PopoverPrimitiveProps & {css?: CSS}

const PopoverRoot = React.forwardRef<React.ElementRef<typeof StyledPopover>, PopoverProps>(
  ({...props}) => {
    return <StyledPopover {...props}>{props.children}</StyledPopover>
  }
)

type PopoverTriggerPrimitiveProps = React.ComponentProps<typeof StyledTrigger> &
  React.HTMLAttributes<HTMLButtonElement>
type PopoverTriggerProps = PopoverTriggerPrimitiveProps & {css?: CSS}

const PopTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  (props, forwardedRef) => {
    return (
      <StyledTrigger {...props} ref={forwardedRef} asChild>
        {props.children}
      </StyledTrigger>
    )
  }
)

type PopoverContentPrimitiveProps = React.ComponentProps<typeof StyledContent> &
  React.HTMLAttributes<HTMLDivElement>
type PopoverContentProps = PopoverContentPrimitiveProps & {css?: CSS}

const PopContent = React.forwardRef<HTMLDivElement, PopoverContentProps>((props, forwardedRef) => {
  return (
    <StyledContent {...props} ref={forwardedRef} sideOffset={props.sideOffset}>
      {props.children}
    </StyledContent>
  )
})

export const PopoverPrimitive = ({
  children,
  content,
  align,
  openPopover,
  setOpenPopover,
  ...props
}: popoverProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <PopoverRoot {...props}>
      <PopTrigger asChild>{children}</PopTrigger>

      {isOpen && <PopContent {...props}>{content}</PopContent>}
    </PopoverRoot>
  )
}

export const Popover = PopoverRoot
export const PopoverTrigger = PopTrigger
export const PopoverContent = PopContent

Popover.displayName = 'Popover'
PopoverTrigger.displayName = 'PopoverTrigger'
PopoverContent.displayName = 'PopoverContent'

export type {PopoverProps, PopoverTriggerProps, PopoverContentProps}
