import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import {baseComponentProps} from '../@shared/types'

import {StyledInput, StyledLabel, StyledFlex} from './input.styles'
import type {InputVariantProps} from './input.styles'

interface inputProps {
  label?: string

  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'
  placeholder?: string
  cursor?: 'pointer' | 'default' | 'text'
  value?: string
  size?: 'sm' | 'md' | 'lg'
  style?: 'ghost' | 'atelier'
}

type InputPrimitiveProps = baseComponentProps &
  InputVariantProps &
  inputProps &
  React.HTMLAttributes<HTMLInputElement>
type InputProps = InputPrimitiveProps

const InputElement = ({
  label,
  placeholder,
  cursor = 'text',
  size,
  style,

  inputMode,
  value,
  type,
  className,
  css,

  ...rest
}: InputProps) => {
  if (type === 'number') {
    return (
      <StyledInput {...rest} type={'text'} inputMode={'numeric'} pattern="[0-9]*" size={size} />
    )
  }

  return (
    <StyledInput
      {...rest}
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      size={size}
      style={style}
      cursor={cursor}
      css={{
        ...css,
      }}
    />
  )
}

type InputLabelPrmitiveProps = baseComponentProps &
  React.HTMLAttributes<HTMLLabelElement> &
  React.ComponentPropsWithRef<typeof LabelPrimitive.Root>
type InputLabelProps = InputLabelPrmitiveProps
const InputLabel = React.forwardRef<React.ElementRef<typeof StyledLabel>, InputLabelProps>(
  ({htmlFor, ...props}, forwardedRef) => {
    return (
      <StyledLabel {...props} ref={forwardedRef} css={{...props.css}} htmlFor={htmlFor}>
        {props.children}
      </StyledLabel>
    )
  }
)

export const Input: React.FC<InputProps> & {
  Label: typeof InputLabel
  Flex: typeof StyledFlex
} = ({label, ...props}) => <InputElement {...props} />

Input.Label = InputLabel
Input.Flex = StyledFlex

Input.displayName = 'Input'

export type {InputProps}
