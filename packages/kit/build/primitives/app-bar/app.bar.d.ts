import * as React from 'react';
import type { CSS } from '../../theme';
import type { AppbarVariantProps, AppbarSpotVariantProps } from './app.bar.styles';
/**
 *
 * ..Appbar[Root].
 */
type AppbarPrimitiveProps = AppbarVariantProps & React.HTMLAttributes<HTMLDivElement>;
type AppbarProps = AppbarPrimitiveProps & {
    css?: CSS;
};
/**
 *
 * ..Appbar[Spot].
 * this element helps with placement of items in the Appbar Primitive.
 *
 * the alignment prop has 3 options:
 * ..left _ 'flex-end'
 * ..center _ 'center'
 * ..right _ 'flex-start'
 */
type AppbarSpotPrimitiveProps = AppbarSpotVariantProps & React.HTMLAttributes<HTMLDivElement>;
type AppbarSpotProps = AppbarSpotPrimitiveProps & {
    css?: CSS;
};
export declare const Appbar: React.ForwardRefExoticComponent<import("@stitches/react/types/styled-component").TransformProps<{
    size?: "sm" | "md" | "lg" | undefined;
    fixed?: boolean | "true" | undefined;
    sticky?: boolean | "true" | undefined;
    glass?: boolean | "true" | undefined;
    border?: boolean | "true" | undefined;
    color?: "transparent" | "loContrast" | "plain" | "accent" | undefined;
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
}> & React.HTMLAttributes<HTMLDivElement> & {
    css?: CSS | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export declare const AppbarSpot: React.ForwardRefExoticComponent<import("@stitches/react/types/styled-component").TransformProps<{
    alignment?: "center" | "end" | "start" | undefined;
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
}> & React.HTMLAttributes<HTMLDivElement> & {
    css?: CSS | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export type { AppbarProps };
export type { AppbarSpotProps };
