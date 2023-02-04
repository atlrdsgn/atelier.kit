import * as React from 'react';
import type { baseElementProps } from '../@shared';
import { PrimitivePropsWithRef } from '../../primitives';
import { BoxPrimitive } from './box.styles';
type bProps = PrimitivePropsWithRef<typeof BoxPrimitive> & {
    children?: React.ReactNode;
};
type BoxPrimitiveProps = baseElementProps & bProps & React.HTMLAttributes<HTMLDivElement>;
type BoxProps = BoxPrimitiveProps;
export declare const Box: ({ children, css, ...rest }: BoxProps) => JSX.Element;
export type { BoxProps };
//# sourceMappingURL=box.d.ts.map