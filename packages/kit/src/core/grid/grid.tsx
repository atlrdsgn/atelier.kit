import React from 'react'
import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'
import type {GridVariantProps} from './grid.styles'
import {GridPrimitive} from './grid.styles'

type gridProps = {
  children?: React.ReactNode
  className?: string
  align?: string
  justify?: string
  gap?: number
  gapX?: number
  gapY?: number
  columns?: number
  flow?: string
}

type GridPrimitiveProps = baseComponentProps & gridProps & GridVariantProps
type GridProps = GridPrimitiveProps

const GridComponent = React.forwardRef<React.ElementRef<typeof GridPrimitive>, GridProps>(
  (props, ref) => {
    return (
      <GridPrimitive
        {...props}
        ref={ref}
        className={props.className}
        align={props.align}
        justify={props.justify}
        gap={props.gap}
        gapX={props.gapX}
        gapY={props.gapY}
        columns={props.columns}
        flow={props.flow}
        css={{
          ...props.css,
        }}>
        {props.children}
      </GridPrimitive>
    )
  }
)

export const Grid = GridComponent
applyDisplayName(Grid, 'Grid')
export type {GridProps}
