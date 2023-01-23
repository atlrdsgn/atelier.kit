import type * as React from 'react'

interface VectorProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
  width?: string
  height?: string
}

export type {VectorProps}
