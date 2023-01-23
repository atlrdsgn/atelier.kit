import * as React from 'react'

import {ButtonComponent} from './button.styles'
import type {ButtonVariantProps} from './button.styles'
import type {buttonProps} from './button.types'
import type {CSS} from '../../theme'

type ButtonPrimitiveProps = React.HTMLAttributes<HTMLButtonElement> &
  buttonProps &
  ButtonVariantProps
type ButtonProps = ButtonPrimitiveProps & {css?: CSS}

const ButtonPrimitive = React.forwardRef<React.ElementRef<typeof ButtonComponent>, ButtonProps>(
  (props, forwardedRef) => {
    return (
      <ButtonComponent
        {...props}
        ref={forwardedRef}
        /**
         *
         * type of usage..
         * button, submit, reset..
         */
        type={props.type}
        /**
         *
         * as React.ElementType..
         * only takes 'a' or 'button'..
         */
        as={props.as || 'a'}
        /**
         *
         * href for anchor tag
         * pass a url string here..
         */
        href={props.href}
        /**
         *
         * basic size options for component
         * sm, md, lg
         */
        size={props.size}
        /**
         *
         * color options for component
         * atelier, ghost, neon, rainbow..
         */
        primary={props.primary}
        secondary={props.secondary}
        neon={props.neon}
        rainbow={props.rainbow}
        ghost={props.ghost}
        /**
         *
         * className & CSS for overiding styles..
         */
        className={props.className}
        css={{
          ...props.css,
        }}>
        {props.children}
      </ButtonComponent>
    )
  }
)

export const Button = ButtonPrimitive

Button.displayName = 'Button'

export type {ButtonProps}
