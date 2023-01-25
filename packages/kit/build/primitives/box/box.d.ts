import * as React from 'react';
import { baseComponentProps } from '../@shared/types';
import { PrimitivePropsWithRef } from '../primitive';
import { BoxPrimitive } from './box.styles';
type bProps = PrimitivePropsWithRef<typeof BoxPrimitive> & {
    children?: React.ReactNode;
    as?: React.ElementType<any> | keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
type BoxPrimitiveProps = baseComponentProps & bProps & React.HTMLAttributes<HTMLDivElement>;
type BoxProps = BoxPrimitiveProps;
export declare const Box: ({ children, as, css, ...props }: BoxPrimitiveProps) => JSX.Element;
export type { BoxProps };
