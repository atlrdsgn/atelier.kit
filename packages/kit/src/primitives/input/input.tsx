import * as React from 'react'

import {CSS} from '../../theme'
import {InputPrimitive, InputVariantProps} from './input.styles'

interface inputProps {
  label?: string

  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'
  placeholder?: string
  cursor?: 'pointer' | 'default' | 'text'
  value?: string
  size?: 'sm' | 'md' | 'lg'
  style?: 'ghost' | 'atelier'
  css?: CSS
}

type InputPrimitiveProps = InputVariantProps & inputProps & React.HTMLAttributes<HTMLInputElement>
type InputProps = InputPrimitiveProps & {css?: CSS}

const InputComponent = React.forwardRef<React.ElementRef<typeof InputPrimitive>, InputProps>(
  (props, ref) => {
    return (
      <InputPrimitive
        {...props}
        ref={ref}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        css={{
          ...props.css,
        }}
      />
    )
  }
)

export const Input = React.memo(InputComponent)
export type {InputProps}

Input.displayName = 'Input'
