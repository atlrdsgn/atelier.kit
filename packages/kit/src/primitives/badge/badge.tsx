import * as React from 'react'
import {applyDisplayName} from '../@shared/utils'
import {BadgePrimitive, BadgeVariantsProps} from './badge.styles'
import {baseComponentProps} from '../@shared/types'

type atlrProps = React.HTMLAttributes<HTMLSpanElement> & {
  as?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
}

type BadgePrimitiveProps = baseComponentProps & atlrProps & BadgeVariantsProps
type BadgeProps = BadgePrimitiveProps

/*
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
/*
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
*/

const BadgeComponent: React.FC<BadgeProps> = ({
  color = 'initial',
  pill = true,
  as,
  size = 'sm',
  children,
  css,
  ...rest
}) => {
  return (
    <BadgePrimitive {...rest} css={{...css}} color={color} pill={pill} as={as} size={size}>
      {children}
    </BadgePrimitive>
  )
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * exports, etc..
 */
export const Badge = BadgeComponent

applyDisplayName(Badge, 'Badge')

export type {BadgeProps}
