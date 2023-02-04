import * as React from 'react';
import type { baseElementProps } from '../@shared';
import type { CanvasVariantProps } from './canvas.styles';
import { CanvasPrimitive } from './canvas.styles';
type canvasProps = React.ComponentPropsWithRef<typeof CanvasPrimitive> & React.HTMLAttributes<HTMLDivElement>;
type CanvasPrimitiveProps = baseElementProps & canvasProps & CanvasVariantProps;
type CanvasProps = CanvasPrimitiveProps;
export type { CanvasProps };
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Canvas: {
    ({ children, className, align, justify, blurred, css, ...rest }: CanvasPrimitiveProps): JSX.Element;
    displayName: string;
    defaultProps: {
        blurred: boolean;
    };
};
//# sourceMappingURL=canvas.d.ts.map