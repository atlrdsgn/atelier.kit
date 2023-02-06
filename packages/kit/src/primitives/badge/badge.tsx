import * as React from 'react'
import {applyDisplayName} from '../@shared/utils'
import {BadgePrimitive, BadgeVariantsProps} from './badge.styles'
import {baseComponentProps} from '../@shared/types'

type badgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  as?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
}

type BadgePrimitiveProps = baseComponentProps & badgeProps & BadgeVariantsProps
type BadgeProps = BadgePrimitiveProps

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
