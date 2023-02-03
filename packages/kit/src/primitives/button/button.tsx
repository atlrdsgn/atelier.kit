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

export const Button = ButtonComponent

export type {ButtonProps}
