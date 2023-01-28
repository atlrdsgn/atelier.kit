import * as React from 'react'

import {CheckIcon} from '@radix-ui/react-icons'

import {
  StyledCheckbox,
  StyledCheckboxIndicator,
  StyledCheckboxLabel,
  StyledCheckboxFlex,
} from './cb.styles'
import type {baseComponentProps} from '../@shared/types'

/**
 *
 *
 * root.
 */
type CheckboxRootPrimitiveProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof StyledCheckboxFlex>
type CheckboxRootProps = baseComponentProps & CheckboxRootPrimitiveProps

const CBFlex = React.forwardRef<HTMLDivElement, CheckboxRootProps>((props, ref) => {
  const {children, css, ...restProps} = props
  return (
    <StyledCheckboxFlex ref={ref} {...restProps} css={{...props.css}}>
      {children}
    </StyledCheckboxFlex>
  )
})

type CheckboxPrimitiveProps = React.HTMLAttributes<HTMLButtonElement> &
  React.ComponentProps<typeof StyledCheckbox> & {type?: string}
type CheckboxProps = baseComponentProps & CheckboxPrimitiveProps

const CBox = React.forwardRef<HTMLButtonElement, CheckboxProps>(({...props}, ref) => {
  return (
    <StyledCheckbox {...props} ref={ref} css={{...props.css}}>
      <StyledCheckboxIndicator>
        <CheckIcon />
      </StyledCheckboxIndicator>
    </StyledCheckbox>
  )
})

type CheckboxLabelPrimitiveProps = React.HTMLAttributes<HTMLLabelElement> &
  React.ComponentProps<typeof StyledCheckboxLabel>
type CheckboxLabelProps = baseComponentProps & CheckboxLabelPrimitiveProps

const CBLabel = React.forwardRef<HTMLLabelElement, CheckboxLabelProps>(({...props}, ref) => {
  return (
    <StyledCheckboxLabel {...props} ref={ref}>
      {props.children}
    </StyledCheckboxLabel>
  )
})

export type {CheckboxProps, CheckboxLabelProps}

// Path: src/primitives/checkbox/cb.styles.ts

CBox.displayName = 'Checkbox'
CBLabel.displayName = 'Checkbox.Label'
CBFlex.displayName = 'Checkbox.Flex'

export const Checkbox = CBox as typeof CBox & {
  Flex: typeof CBFlex
  Label: typeof CBLabel
}
