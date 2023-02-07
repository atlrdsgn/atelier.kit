import * as React from 'react';
import { CSS } from '../../theme';
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
export declare const InputWithLabel: React.ForwardRefExoticComponent<import("@stitches/react/types/styled-component").TransformProps<{
    style?: "ghost" | "atelier" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
    cursor?: "default" | "pointer" | "text" | undefined;
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
} & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=with.label.d.ts.map