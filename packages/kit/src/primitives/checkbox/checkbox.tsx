import * as React from 'react'
import type {CSS} from '../../theme'

import {CheckIcon} from '@radix-ui/react-icons'

import {
  StyledCheckbox,
  StyledCheckboxIndicator,
  StyledCheckboxLabel,
  StyledCheckboxFlex,
} from './cb.styles'

interface checkboxProps {
  children?: React.ReactNode
  css?: CSS
}

type CheckboxRootPrimitiveProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof StyledCheckboxFlex>
type CheckboxRootProps = checkboxProps & CheckboxRootPrimitiveProps

const CBFlex = React.forwardRef<HTMLDivElement, CheckboxRootProps>((props, ref) => {
  const {children, css, ...restProps} = props
  return (
    <StyledCheckboxFlex ref={ref} {...restProps}>
      {children}
    </StyledCheckboxFlex>
  )
})

type CheckboxPrimitiveProps = React.HTMLAttributes<HTMLButtonElement> &
  React.ComponentProps<typeof StyledCheckbox>
type CheckboxProps = checkboxProps & CheckboxPrimitiveProps

const CB = React.forwardRef<HTMLButtonElement, CheckboxProps>(({...props}, ref) => {
  return (
    <StyledCheckbox {...props} ref={ref}>
      <StyledCheckboxIndicator>
        <CheckIcon />
      </StyledCheckboxIndicator>
      {props.children}
    </StyledCheckbox>
  )
})

type CheckboxLabelPrimitiveProps = React.HTMLAttributes<HTMLLabelElement> &
  React.ComponentProps<typeof StyledCheckboxLabel>
type CheckboxLabelProps = checkboxProps & CheckboxLabelPrimitiveProps

const CBLabel = React.forwardRef<HTMLLabelElement, CheckboxLabelProps>(({...props}, ref) => {
  return (
    <StyledCheckboxLabel {...props} ref={ref}>
      {props.children}
    </StyledCheckboxLabel>
  )
})

export const Checkbox = CB
export const CheckboxFlex = CBFlex
export const CheckboxLabel = CBLabel

CheckboxFlex.displayName = 'CheckboxFlex'
Checkbox.displayName = 'Checkbox'
CheckboxLabel.displayName = 'CheckboxLabel'

export type {CheckboxProps, CheckboxLabelProps}

// Path: src/primitives/checkbox/cb.styles.ts
