import {Popover} from '@headlessui/react'
import * as React from 'react'
import type {baseComponentProps} from '../@shared/types'
import {root, trigger, content} from './ui.pop.styles'

export interface UIPopoverProps {
  children?: React.ReactNode
  className?: string
  as?: React.ElementType
  open?: boolean
  onClose?: () => void
  close?: (ref?: null | HTMLElement) => void
}

type popProps = baseComponentProps & React.HTMLAttributes<HTMLDivElement>
type PopoverProps = popProps & UIPopoverProps

const PopoverRoot = React.forwardRef<React.ElementRef<typeof Popover>, PopoverProps>(
  ({children, open = false, ...rest}, forwardedRef) => {
    return (
      <Popover
        ref={forwardedRef}
        {...rest}
        className={root()}
        open={open}
        close={rest.close}
        css={{
          ...rest.css,
        }}>
        {children}
      </Popover>
    )
  }
)

type triggerProps = {
  children?: React.ReactNode
  as?: React.ElementType
  open?: boolean
}

type TriggerProps = baseComponentProps & React.HTMLAttributes<HTMLButtonElement>
type PopoverTriggerProps = TriggerProps & triggerProps

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof Popover.Button>,
  PopoverTriggerProps
>(({children, open = false, ...rest}, forwardedRef) => {
  return (
    <Popover.Button
      ref={forwardedRef}
      {...rest}
      className={trigger()}
      css={{
        ...rest.css,
      }}>
      {children}
    </Popover.Button>
  )
})

// const PopoverOverlay = Popover.Overlay

type contentProps = {
  children?: React.ReactNode

  as?: React.ElementType
  focus?: boolean
}

type ContentProps = baseComponentProps & React.HTMLAttributes<HTMLElement>
type PopoverContentProps = ContentProps & contentProps

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Popover.Panel>,
  PopoverContentProps
>(({children, as = 'div', focus = true, ...rest}, forwardedRef) => {
  return (
    <Popover.Panel
      ref={forwardedRef}
      {...rest}
      className={content()}
      as={as}
      focus={focus}
      css={{
        ...rest.css,
      }}>
      {children}
    </Popover.Panel>
  )
})

export const UIPopover: React.FC<PopoverProps> & {
  Overlay: typeof Popover.Overlay
  Content: typeof PopoverContent
  Trigger: typeof PopoverTrigger
  Group: typeof Popover.Group
} = (props) => <PopoverRoot {...props} />

UIPopover.Overlay = Popover.Overlay
UIPopover.Content = PopoverContent
UIPopover.Trigger = PopoverTrigger
UIPopover.Group = Popover.Group

UIPopover.displayName = 'UIPopover'
