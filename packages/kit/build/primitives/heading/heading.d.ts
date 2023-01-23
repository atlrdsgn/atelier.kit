import * as React from 'react';
import type { HeadingVariantProps } from './heading.styles';
import type { CSS } from '../../theme';
type headingProps = {
    children?: React.ReactNode;
    weight?: 'default' | 'heavy' | 'black' | 'lite' | string;
    size?: '1' | '2' | '3' | '4' | '5' | '6' | string;
    color?: 'primary' | 'secondary' | 'helios' | 'white' | 'black' | 'fizz' | 'slate' | string;
    gradient?: boolean;
};
type HeadingPrimitiveProps = headingProps & HeadingVariantProps & React.HTMLAttributes<HTMLParagraphElement>;
type HeadingProps = HeadingPrimitiveProps & {
    css?: CSS;
};
export declare const Heading: React.MemoExoticComponent<React.ForwardRefExoticComponent<headingProps & import("@stitches/react/types/styled-component").TransformProps<{
    size?: number | "1" | "2" | "3" | "4" | "5" | "6" | undefined;
    weight?: "default" | "heavy" | "black" | "lite" | undefined;
    color?: "black" | "primary" | "secondary" | "helios" | "white" | "fizz" | "slate" | "mauve" | undefined;
    gradient?: boolean | "true" | undefined;
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
export type { HeadingProps };
