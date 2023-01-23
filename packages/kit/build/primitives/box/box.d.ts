import * as React from 'react';
import { CSS } from '../../theme';
import { PrimitivePropsWithRef } from '../primitive';
import { BoxPrimitive } from './box.styles';
type bProps = PrimitivePropsWithRef<typeof BoxPrimitive> & {
    children?: React.ReactNode;
    as?: React.ElementType<any> | keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
type BoxPrimitiveProps = bProps & React.HTMLAttributes<HTMLDivElement>;
type BoxProps = BoxPrimitiveProps & {
    css?: CSS;
};
export declare const Box: React.ForwardRefExoticComponent<Pick<BoxProps, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "css" | "as" | "asChild"> & React.RefAttributes<HTMLDivElement>>;
export type { BoxProps };
