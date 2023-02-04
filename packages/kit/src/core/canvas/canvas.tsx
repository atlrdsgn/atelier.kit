import * as React from 'react'

import type {baseElementProps} from '../@shared'
import type {CanvasVariantProps} from './canvas.styles'
import {CanvasPrimitive} from './canvas.styles'

type canvasProps = React.ComponentPropsWithRef<typeof CanvasPrimitive> &
  React.HTMLAttributes<HTMLDivElement>

type CanvasPrimitiveProps = baseElementProps & canvasProps & CanvasVariantProps
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

// export const Canvas = CanvasComponent

export type {CanvasProps}

CanvasComponent.displayName = 'Canvas'

CanvasComponent.defaultProps = {
  blurred: false,
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Canvas = CanvasComponent as typeof CanvasComponent
