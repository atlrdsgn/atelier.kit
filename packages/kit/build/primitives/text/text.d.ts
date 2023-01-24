import * as React from 'react';
import type { CSS } from '../../theme';
import type { TextVariantProps } from './text.styles';
type textProps = {
    children?: React.ReactNode;
    mono?: boolean;
    weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'heavy' | 'lite' | 'superlite' | string;
    color?: 'primary' | 'secondary' | 'slate' | string;
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | string;
};
type TextPrimitiveProps = textProps & TextVariantProps & React.HTMLAttributes<HTMLParagraphElement>;
type TextProps = TextPrimitiveProps & {
    css?: CSS;
};
export declare const Text: React.MemoExoticComponent<React.ForwardRefExoticComponent<textProps & import("@stitches/react/types/styled-component").TransformProps<{
    mono?: boolean | "true" | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    weight?: "normal" | "medium" | "semibold" | "bold" | "heavy" | "lite" | "superlite" | undefined;
    color?: "primary" | "secondary" | "slate" | undefined;
    align?: "right" | "left" | "center" | undefined;
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
}> & React.HTMLAttributes<HTMLParagraphElement> & {
    css?: CSS | undefined;
} & React.RefAttributes<HTMLSpanElement>>>;
export type { TextProps };
