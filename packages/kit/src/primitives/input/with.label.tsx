import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import {CSS} from '../../theme'
import {StyledInput, InputVariantProps, StyledFlex, StyledLabel} from './input.styles'

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

type InputLabelPrmitiveProps = React.HTMLAttributes<HTMLLabelElement> &
  React.ComponentPropsWithRef<typeof LabelPrimitive.Root>
type InputLabelProps = InputLabelPrmitiveProps & {css?: CSS}
const InputLabel = React.forwardRef<React.ElementRef<typeof StyledLabel>, InputLabelProps>(
  ({htmlFor, ...props}, forwardedRef) => {
    return (
      <StyledLabel {...props} ref={forwardedRef} css={{...props.css}} htmlFor={htmlFor}>
        {props.children}
      </StyledLabel>
    )
  }
)

type InputPrimitiveProps = InputVariantProps & inputProps & React.HTMLAttributes<HTMLInputElement>
type InputProps = InputPrimitiveProps & {css?: CSS}

const InputWithLabelComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({label, ...props}, ref) => {
    return (
      <StyledFlex>
        <InputLabel>{label}</InputLabel>
        <StyledInput
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
      </StyledFlex>
    )
  }
)

export const InputWithLabel = InputWithLabelComponent
