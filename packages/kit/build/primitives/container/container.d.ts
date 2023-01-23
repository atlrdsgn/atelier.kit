import * as React from 'react';
import { CSS } from '../../theme';
import type { ContainerVariantProps } from './container.styles';
interface containerProps {
    children?: React.ReactNode;
    optimal?: boolean;
    align?: 'left' | 'center' | 'right' | string;
}
type ContainerPrimitiveProps = containerProps & ContainerVariantProps;
type ContainerProps = ContainerPrimitiveProps & {
    css?: CSS;
};
export declare const Container: React.ForwardRefExoticComponent<containerProps & import("@stitches/react/types/styled-component").TransformProps<{
    size?: "sm" | "md" | "lg" | "xl" | "full" | undefined;
    align?: "left" | "center" | "right" | undefined;
    optimal?: boolean | "true" | undefined;
    dev?: boolean | "true" | undefined;
}, {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
    initial: string;
    motion: string;
    safari: string;
    hover: string;
    dark: string;
    light: string;
}> & {
    css?: CSS | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export type { ContainerProps };
