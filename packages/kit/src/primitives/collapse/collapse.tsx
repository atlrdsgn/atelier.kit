import * as React from 'react'
import type {CSS} from '../../theme'

import {
  //
  CRoot,
  //
  CContent,
  //
  CTrigger,
} from './collapse.styles'

interface collapseProps {
  children?: React.ReactNode
  css?: CSS
}

/**
 *
 * ROOT
 *
 */
type CollapsePrimitiveProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof CRoot>
type CollapseProps = collapseProps & CollapsePrimitiveProps
const CollapseComponentRoot = React.forwardRef<React.ElementRef<typeof CRoot>, CollapseProps>(
  ({...props}, forwardedRef) => {
    return (
      <CRoot {...props} ref={forwardedRef} css={{...props.css}}>
        {props.children}
      </CRoot>
    )
  }
)

/**
 *
 *
 * TRIGGER
 *
 */
type CollapseTriggerPrimitiveProps = React.HTMLAttributes<HTMLButtonElement> &
  React.ComponentProps<typeof CTrigger>
type CollapseTriggerProps = collapseProps & CollapseTriggerPrimitiveProps
const CollapseTriggerRoot = React.forwardRef<
  React.ElementRef<typeof CTrigger>,
  CollapseTriggerProps
>(({...props}, forwardedRef) => {
  return (
    <CTrigger {...props} ref={forwardedRef}>
      {props.children}
    </CTrigger>
  )
})

/**
 *
 * CONTENT
 *
 *
 */
type CollapseContentPrimitiveProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof CContent>
type CollapseContentProps = collapseProps & CollapseContentPrimitiveProps
const CollapseComponentContent = React.forwardRef<
  React.ElementRef<typeof CContent>,
  CollapseContentProps
>(({...props}, forwardedRef) => {
  return (
    <CContent {...props} ref={forwardedRef} css={{...props.css}}>
      {props.children}
    </CContent>
  )
})

export const Collapse = CollapseComponentRoot
export const CollapseTrigger = CollapseTriggerRoot
export const CollapseContent = CollapseComponentContent

CollapseComponentRoot.displayName = 'Collapse'
CollapseTriggerRoot.displayName = 'CollapseTrigger'
CollapseComponentContent.displayName = 'CollapseContent'

export type {CollapseProps, CollapseTriggerProps, CollapseContentProps}
