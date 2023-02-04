import React from 'react'
import {SpacePrimitive} from './space.styles'
import type {SpaceVariantProps} from './space.styles'
import type {baseElementProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'

interface spaceProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  devFlag?: boolean
}

type SpacePrimitiveProps = baseElementProps &
  spaceProps &
  SpaceVariantProps &
  React.HTMLAttributes<HTMLDivElement>
type SpaceProps = SpacePrimitiveProps

const SpaceComponent = ({
  children,
  className,
  size = 'md',
  devFlag = false,
  css,
  ...rest
}: SpacePrimitiveProps) => (
  <SpacePrimitive
    {...rest}
    size={size}
    devFlag={devFlag}
    className={className}
    css={{
      ...css,
    }}
  />
)

export const Space = SpaceComponent

applyDisplayName(Space, 'Space')

export type {SpaceProps}
