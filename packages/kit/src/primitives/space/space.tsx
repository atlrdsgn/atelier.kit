import React from 'react'
import {CSS} from '../../theme'
import {SpacePrimitive} from './space.styles'
import type {SpaceVariantProps} from './space.styles'

interface spaceProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  devFlag?: boolean
}

type SpacePrimitiveProps = spaceProps & SpaceVariantProps & React.HTMLAttributes<HTMLDivElement>
type SpaceProps = SpacePrimitiveProps & {css?: CSS}

const SpaceComponent = React.forwardRef<HTMLDivElement, SpaceProps>(({...props}, ref) => {
  return (
    <SpacePrimitive
      {...props}
      ref={ref}
      size={props.size}
      devFlag={props.devFlag}
      className={props.className}
      css={{
        ...props.css,
      }}
    />
  )
})

export const Space = SpaceComponent
export type {SpaceProps}
