import * as React from 'react'

import {StyledButton} from './button.styles'
import type {ButtonVariantProps} from './button.styles'
import type {buttonProps} from './button.types'
import {baseComponentProps} from '../@shared/types'

type ButtonPrimitiveProps = React.HTMLAttributes<HTMLButtonElement> &
  baseComponentProps &
  buttonProps &
  ButtonVariantProps
type ButtonProps = ButtonPrimitiveProps

/*
const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  return (
    <StyledButton
      {...props}
      ref={forwardedRef}
      as={props.as}
      className={props.className}
      size={props.size}
      css={{
        ...props.css,
      }}>
      {props.children}
    </StyledButton>
  )
})
*/

const ButtonComponent = ({
  children,

  type,

  as = 'a',

  href,
  onClick,
  target = '_self',
  rel = 'noopener noreferrer',

  size = 'sm',

  primary = true,
  secondary = false,
  neon = false,
  rainbow = false,
  ghost = false,

  css,
  ...rest
}: ButtonProps) => (
  <StyledButton
    {...rest}
    type={type}
    as={as}
    href={href}
    onClick={onClick}
    target={target}
    rel={rel}
    size={size}
    primary={primary}
    secondary={secondary}
    neon={neon}
    rainbow={rainbow}
    ghost={ghost}
    css={{
      ...css,
    }}>
    {children}
  </StyledButton>
)

export const Button = ButtonComponent

export type {ButtonProps}
