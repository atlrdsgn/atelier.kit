import * as React from 'react'

import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'
import type {CanvasVariantProps} from './canvas.styles'
import {CanvasPrimitive} from './canvas.styles'

type canvasProps = React.ComponentPropsWithRef<typeof CanvasPrimitive> &
  React.HTMLAttributes<HTMLDivElement>

type CanvasPrimitiveProps = baseComponentProps & canvasProps & CanvasVariantProps
type CanvasProps = CanvasPrimitiveProps

const CanvasComponent = ({
  children,
  className,
  align = 'center',
  justify = 'center',
  blurred = false,
  css,
  ...rest
}: CanvasPrimitiveProps) => (
  <CanvasPrimitive
    {...rest}
    className={className}
    align={align}
    justify={justify}
    blurred={blurred}
    css={{
      ...css,
    }}>
    {children}
  </CanvasPrimitive>
)

export const Canvas = CanvasComponent

applyDisplayName(Canvas, 'Canvas')

export type {CanvasProps}
