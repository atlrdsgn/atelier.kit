import * as React from 'react';
import type { ParagraphVariantProps } from './paragraph.styles';
import type { CSS } from '../../theme';
type paragraphProps = {
    children?: React.ReactNode;
    size?: string;
    weight?: string;
    align?: string;
};
type ParagraphPrimitiveProps = paragraphProps & ParagraphVariantProps & React.HTMLAttributes<HTMLParagraphElement>;
type ParagraphProps = ParagraphPrimitiveProps & {
    css?: CSS;
};
export declare const Paragraph: React.MemoExoticComponent<React.ForwardRefExoticComponent<paragraphProps & import("@stitches/react/types/styled-component").TransformProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    color?: "slate" | "slateLite" | "mauve" | undefined;
    align?: "right" | "left" | "center" | undefined;
    weight?: "lite" | "normal" | "medium" | "bold" | undefined;
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
} & React.RefAttributes<HTMLParagraphElement>>>;
export type { ParagraphProps };
