import type * as React from 'react'
import type {IconVariant} from './types.icon.variants'

type FirstTouchProps = {
  children?: never
  color?: string
  width?: string
}

type IconVariantProps = React.ComponentProps<'svg'> & {
  variant: IconVariant
}

interface IconPrimitiveProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
  width?: string
}

type IconProps = IconPrimitiveProps & IconVariantProps

export type {IconProps}

export type {FirstTouchProps}
