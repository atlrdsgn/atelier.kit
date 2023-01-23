import * as React from 'react'
import type {CSS} from '../../theme'
import type {CanvasVariantProps} from './canvas.styles'
import {CanvasPrimitive} from './canvas.styles'

type canvasProps = React.ComponentPropsWithRef<typeof CanvasPrimitive> &
  React.HTMLAttributes<HTMLDivElement>

type CanvasPrimitiveProps = canvasProps & CanvasVariantProps
type CanvasProps = CanvasPrimitiveProps & {css?: CSS}

const CanvasComponent = React.forwardRef<React.ElementRef<typeof CanvasPrimitive>, CanvasProps>(
  (props, forwardedRef) => {
    return (
      <CanvasPrimitive
        {...props}
        ref={forwardedRef}
        align={props.align}
        justify={props.justify}
        blurred={props.blurred}
        css={{
          ...props.css,
        }}>
        {props.children}
      </CanvasPrimitive>
    )
  }
)

export const Canvas = CanvasComponent

Canvas.displayName = 'Canvas'

export type {CanvasProps}
