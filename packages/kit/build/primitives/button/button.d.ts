import * as React from 'react';
import type { ButtonVariantProps } from './button.styles';
import type { buttonProps } from './button.types';
import type { CSS } from '../../theme';
type ButtonPrimitiveProps = React.HTMLAttributes<HTMLButtonElement> & buttonProps & ButtonVariantProps;
type ButtonProps = ButtonPrimitiveProps & {
    css?: CSS;
};
export declare const Button: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLButtonElement> & buttonProps & import("@stitches/react/types/styled-component").TransformProps<{
    size?: "xs" | "sm" | "md" | "lg" | undefined;
    primary?: boolean | "true" | undefined;
    secondary?: boolean | "true" | undefined;
    ghost?: boolean | "true" | undefined;
    neon?: boolean | "true" | undefined;
    rainbow?: boolean | "true" | undefined;
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
} & React.RefAttributes<unknown>>;
export type { ButtonProps };
