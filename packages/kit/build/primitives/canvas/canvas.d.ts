import * as React from 'react';
import { baseComponentProps } from '../@shared/types';
import type { CanvasVariantProps } from './canvas.styles';
import { CanvasPrimitive } from './canvas.styles';
type canvasProps = React.ComponentPropsWithRef<typeof CanvasPrimitive> & React.HTMLAttributes<HTMLDivElement>;
type CanvasPrimitiveProps = baseComponentProps & canvasProps & CanvasVariantProps;
type CanvasProps = CanvasPrimitiveProps;
export declare const Canvas: ({ children, className, align, justify, blurred, css, ...rest }: CanvasPrimitiveProps) => JSX.Element;
export type { CanvasProps };
