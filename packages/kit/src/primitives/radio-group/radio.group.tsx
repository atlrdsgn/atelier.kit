import * as React from 'react'
import type {baseComponentProps} from '../@shared/types'

import {GroupRoot_Radio, GroupItem_Radio, GroupIndicator_Radio, Label_Radio} from './group.styles'

///////////////////////// root //////////////////////////
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

type RadioGroupPrimitiveProps = baseComponentProps &
  _radioGroupProps &
  React.ComponentProps<typeof GroupRoot_Radio>
type RadioGroupProps = RadioGroupPrimitiveProps

const RadioGroupComponent: React.FC<RadioGroupProps> = ({
  children,
  asChild = false,
  disabled = false,
  required = false,
  orientation = 'horizontal',
  onValueChange,
  loop = true,
  ...props
}) => (
  <GroupRoot_Radio
    {...props}
    orientation={orientation}
    required={required}
    disabled={disabled}
    asChild={asChild}
    loop={loop}
    onValueChange={onValueChange}
    css={{
      ...props.css,
    }}>
    {children}
  </GroupRoot_Radio>
)

///////////////////////// item //////////////////////////

type _groupItemProps = {
  value?: string
  disabled?: boolean
  required?: boolean
  asChild?: boolean
}

type GroupItemPrimitiveProps = baseComponentProps &
  _groupItemProps &
  React.ComponentProps<typeof GroupItem_Radio>
type GroupItemProps = GroupItemPrimitiveProps

const RadioGroupItemComponent: React.FC<GroupItemProps> = ({
  children,
  asChild = false,
  disabled = false,
  required = false,
  value,
  ...props
}) => (
  <GroupItem_Radio
    {...props}
    value={value}
    required={required}
    disabled={disabled}
    asChild={asChild}
    css={{
      ...props.css,
    }}>
    {children}
  </GroupItem_Radio>
)

///////////////////////// indicator //////////////////////////

type groupIndicatorProps = React.ComponentProps<typeof GroupIndicator_Radio> & {
  asChild?: boolean
  forceMount?: boolean
}

type GroupIndicatorProps = baseComponentProps & groupIndicatorProps

const RadioGroupIndicatorComponent: React.FC<GroupIndicatorProps> = ({
  children,
  asChild = false,
  forceMount,
  ...props
}) => (
  <GroupIndicator_Radio
    {...props}
    asChild={asChild}
    forceMount={forceMount}
    css={{
      ...props.css,
    }}
  />
)

///////////////////////// label //////////////////////////

type _labelProps = {}

type LabelPrimitiveProps = baseComponentProps &
  _labelProps &
  React.ComponentProps<typeof Label_Radio> &
  React.HTMLAttributes<HTMLLabelElement>
type LabelProps = LabelPrimitiveProps

const LabelRoot = React.forwardRef<React.ElementRef<typeof Label_Radio>, LabelProps>(
  (props, ref) => {
    return (
      <Label_Radio {...props} ref={ref} css={{...props.css}}>
        <span>{props.children}</span>
      </Label_Radio>
    )
  }
)

export const RadioGroup: React.FC<RadioGroupProps> & {
  Item: typeof RadioGroupItemComponent
  Indicator: typeof RadioGroupIndicatorComponent
  Label: typeof LabelRoot
} = (props) => <RadioGroupComponent {...props} />

RadioGroup.Item = RadioGroupItemComponent
RadioGroup.Indicator = RadioGroupIndicatorComponent
RadioGroup.Label = LabelRoot

RadioGroup.displayName = 'RadioGroup'

export type {RadioGroupProps}
export type {GroupItemProps}
export type {GroupIndicatorProps}
export type {LabelProps}
