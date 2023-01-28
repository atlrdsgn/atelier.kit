import * as React from 'react';
import type { PrimitivePropsWithRef } from '../primitive';
import type { CSS } from '../../theme';
import type { FlexVariantProps } from './flex.styles';
import { FlexPrimitive } from './flex.styles';
type flexProps = PrimitivePropsWithRef<typeof FlexPrimitive> & {
    children?: React.ReactNode;
    className?: string;
};
type FlexPrimitiveProps = flexProps & FlexVariantProps;
type FlexProps = FlexPrimitiveProps & {
    css?: CSS;
};
export declare const Flex: React.ForwardRefExoticComponent<Pick<FlexProps, "gap" | "direction" | "align" | "justify" | "wrap" | "key" | keyof React.HTMLAttributes<HTMLDivElement> | "css" | "asChild"> & React.RefAttributes<HTMLDivElement>>;
export type { FlexProps };
//# sourceMappingURL=flex.d.ts.map