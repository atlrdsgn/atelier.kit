import * as React from 'react';
import { baseComponentProps } from '../@shared/types';
import { PrimitivePropsWithRef } from '../primitive';
import { BoxPrimitive } from './box.styles';
type bProps = PrimitivePropsWithRef<typeof BoxPrimitive> & {
    children?: React.ReactNode;
};
type BoxPrimitiveProps = baseComponentProps & bProps & React.HTMLAttributes<HTMLDivElement>;
type BoxProps = BoxPrimitiveProps;
export declare const Box: ({ children, css, ...rest }: BoxProps) => JSX.Element;
export type { BoxProps };
//# sourceMappingURL=box.d.ts.map