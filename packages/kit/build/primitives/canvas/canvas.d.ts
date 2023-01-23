import * as React from 'react';
import type { CSS } from '../../theme';
import type { CanvasVariantProps } from './canvas.styles';
import { CanvasPrimitive } from './canvas.styles';
type canvasProps = React.ComponentPropsWithRef<typeof CanvasPrimitive> & React.HTMLAttributes<HTMLDivElement>;
type CanvasPrimitiveProps = canvasProps & CanvasVariantProps;
type CanvasProps = CanvasPrimitiveProps & {
    css?: CSS;
};
export declare const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "blurred" | "align" | "justify" | "key" | keyof React.HTMLAttributes<HTMLDivElement> | "css"> & React.RefAttributes<HTMLDivElement>>;
export type { CanvasProps };
