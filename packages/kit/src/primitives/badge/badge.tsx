import * as React from 'react'

import {CSS} from '../../theme'
import {BadgePrimitive, BadgeVariantsProps} from './badge.styles'

type atlrProps = React.HTMLAttributes<HTMLSpanElement> & {
  type?:
    | 'default'
    | 'success'
    | 'warning'
    | 'inactive'
    | 'info'
    | 'label'
    | 'new'
    | 'beta'
    | 'federal'
  subtle?: boolean
  'data-test-id'?: string
}

interface Props {
  as?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
}

type BadgePrimitiveProps = atlrProps & Props & BadgeVariantsProps
type BadgeProps = BadgePrimitiveProps & {css?: CSS}

const BadgeComponent = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({type = 'default', ...props}, ref) => {
    return (
      <BadgePrimitive
        {...props}
        ref={ref}
        type={type}
        size={props.size}
        color={props.color}
        subtle={props.subtle}
        as={props.as}
        css={{
          ...props.css,
        }}>
        {props.children}
      </BadgePrimitive>
    )
  }
)

export const Badge = BadgeComponent

Badge.displayName = 'Badge'

export type {BadgeProps}
