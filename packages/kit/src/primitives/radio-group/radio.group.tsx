import * as React from 'react'
import type {CSS} from '../../theme'

import {GroupRoot_Radio, GroupItem_Radio, GroupIndicator_Radio, Label_Radio} from './group.styles'

/**
 *
 *
 *
 *
 * ..Radio[Root]
 *
 *
 */

interface _radioGroupProps {
  defaultValue?: string
  value?: string
  asChild?: boolean
  disabled?: boolean
  name?: string
  required?: boolean
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean
  onValueChange?: (value: string) => void
}

type RadioGroupPrimitiveProps = _radioGroupProps & React.ComponentProps<typeof GroupRoot_Radio>
type RadioGroupProps = RadioGroupPrimitiveProps & {css?: CSS}

const RadioGroupRoot = React.forwardRef<React.ElementRef<typeof GroupRoot_Radio>, RadioGroupProps>(
  (props, forwardedRef) => {
    return (
      <GroupRoot_Radio
        {...props}
        ref={forwardedRef}
        defaultValue={props.defaultValue}
        css={{...props.css}}>
        {props.children}
      </GroupRoot_Radio>
    )
  }
)

/**
 *
 *
 *
 * ..RadioGroup[Item]
 *
 *
 */

type _groupItemProps = {
  value?: string
  disabled?: boolean
  required?: boolean
  asChild?: boolean
}

type GroupItemPrimitiveProps = _groupItemProps & React.ComponentProps<typeof GroupItem_Radio>
type GroupItemProps = GroupItemPrimitiveProps & {css?: CSS}

const GroupItemRoot = React.forwardRef<React.ElementRef<typeof GroupItem_Radio>, GroupItemProps>(
  (props, ref) => {
    return (
      <GroupItem_Radio {...props} ref={ref} css={{...props.css}}>
        {props.children}
      </GroupItem_Radio>
    )
  }
)

/**
 *
 *
 * ..RadioGroup[Indicator]
 */
type _groupIndicatorProps = {
  asChild?: boolean
  forceMount?: boolean
}

type GroupIndicatorPrimitiveProps = _groupIndicatorProps &
  React.ComponentProps<typeof GroupIndicator_Radio>
type GroupIndicatorProps = GroupIndicatorPrimitiveProps & {css?: CSS}

const GroupIndicatorRoot = React.forwardRef<
  React.ElementRef<typeof GroupIndicator_Radio>,
  GroupIndicatorProps
>((props, ref) => {
  return (
    <GroupIndicator_Radio {...props} ref={ref} css={{...props.css}}>
      {props.children}
    </GroupIndicator_Radio>
  )
})

/**
 *
 *
 * ..Radio[Label]
 *
 *
 */
type _labelProps = {}

type LabelPrimitiveProps = _labelProps &
  React.ComponentProps<typeof Label_Radio> &
  React.HTMLAttributes<HTMLLabelElement>
type LabelProps = LabelPrimitiveProps & {css?: CSS}

const LabelRoot = React.forwardRef<React.ElementRef<typeof Label_Radio>, LabelProps>(
  (props, ref) => {
    return (
      <Label_Radio {...props} ref={ref} css={{...props.css}}>
        <span>{props.children}</span>
      </Label_Radio>
    )
  }
)

export const RadioGroup = RadioGroupRoot
export const RadioGroupItem = GroupItemRoot
export const RadioGroupIndicator = GroupIndicatorRoot
export const RadioLabel = LabelRoot

RadioGroup.displayName = 'RadioGroup'
RadioGroupItem.displayName = 'RadioGroupItem'
RadioGroupIndicator.displayName = 'RadioGroupIndicator'
RadioLabel.displayName = 'RadioLabel'

export type {RadioGroupProps}
export type {GroupItemProps}
export type {GroupIndicatorProps}
export type {LabelProps}
