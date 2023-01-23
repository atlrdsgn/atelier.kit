import * as React from 'react';
import { CSS } from '../../theme';
import { InputVariantProps } from './input.styles';
interface inputProps {
    label?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
    placeholder?: string;
    cursor?: 'pointer' | 'default' | 'text';
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    style?: 'ghost' | 'atelier';
    css?: CSS;
}
type InputPrimitiveProps = InputVariantProps & inputProps & React.HTMLAttributes<HTMLInputElement>;
type InputProps = InputPrimitiveProps & {
    css?: CSS;
};
export declare const Input: React.MemoExoticComponent<React.ForwardRefExoticComponent<import("@stitches/react/types/styled-component").TransformProps<{
    style?: "ghost" | "atelier" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
    cursor?: "text" | "pointer" | "default" | undefined;
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
}> & inputProps & React.HTMLAttributes<HTMLInputElement> & {
    css?: CSS | undefined;
} & React.RefAttributes<HTMLInputElement>>>;
export type { InputProps };
