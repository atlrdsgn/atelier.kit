import * as React from 'react';
import type { ButtonVariantProps } from './button.styles';
import type { buttonProps } from './button.types';
import { baseComponentProps } from '../@shared/types';
type ButtonPrimitiveProps = React.HTMLAttributes<HTMLButtonElement> & baseComponentProps & buttonProps & ButtonVariantProps;
type ButtonProps = ButtonPrimitiveProps;
export declare const Button: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLButtonElement> & baseComponentProps & buttonProps & import("@stitches/react/types/styled-component").TransformProps<{
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
}> & React.RefAttributes<HTMLButtonElement>>;
export type { ButtonProps };
//# sourceMappingURL=button.d.ts.map