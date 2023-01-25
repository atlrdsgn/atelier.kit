import * as React from 'react'

import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'
import {InputPrimitive, InputVariantProps} from './input.styles'

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
  size = 'md',
  style,

  value,
  type,
  className,
  css,

  ...rest
}: InputProps) => {
  return (
    <InputPrimitive
      {...rest}
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      css={{
        ...css,
      }}
    />
  )
}

export const Input = InputElement

applyDisplayName(Input, 'Input')

export type {InputProps}
