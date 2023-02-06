import * as React from 'react'

import {baseComponentProps} from '../@shared/types'

import {StyledInput} from './input.styles'
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

export {
  //
  InputElement as Input,
  //
}

export type {InputProps}

InputElement.displayName = 'Input'
