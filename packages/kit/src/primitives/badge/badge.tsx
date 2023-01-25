import * as React from 'react'
import {applyDisplayName} from '../@shared/utils'
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

const BadgeComponent = ({
  type = 'default',
  color,
  children,
  subtle,
  as,
  size,
  css,
  ...rest
}: BadgeProps) => {
  /**
   *
   * previous implementation below..
   *
   * seems to be a typescript issue with the forwardRef..
   */

  // const BadgeComponent = React.forwardRef<React.ElementRef<typeof BadgePrimitive>, BadgeProps>(

  return (
    <BadgePrimitive
      {...rest}
      type={type}
      size={size}
      color={color}
      subtle={subtle}
      as={as}
      css={{
        ...css,
      }}>
      {children}
    </BadgePrimitive>
  )
}

export const Badge = BadgeComponent

applyDisplayName(Badge, 'Badge')

export type {BadgeProps}
