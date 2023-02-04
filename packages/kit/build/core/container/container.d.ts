import * as React from 'react';
import type { ContainerVariantProps } from './container.styles';
import { baseElementProps } from '../@shared';
interface containerProps {
    children?: React.ReactNode;
    optimal?: boolean;
    align?: 'left' | 'center' | 'right' | string;
}
type ContainerPrimitiveProps = baseElementProps & containerProps & ContainerVariantProps;
type ContainerProps = ContainerPrimitiveProps;
export declare const Container: ({ children, optimal, align, size, dev, css, ...rest }: ContainerPrimitiveProps) => JSX.Element;
export type { ContainerProps };
//# sourceMappingURL=container.d.ts.map