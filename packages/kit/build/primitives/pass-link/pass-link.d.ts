import * as React from 'react';
import type { CSS } from '../../theme';
import type { PassLinkVariantProps } from './pass-link.styles';
interface passLinkProps {
    href: string | null;
    as?: React.ElementType | string;
    color?: string;
    mono?: boolean;
    size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | string;
}
type PassLinkPrimitiveProps = passLinkProps & PassLinkVariantProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type PassLinkProps = PassLinkPrimitiveProps & {
    css?: CSS;
};
export declare const PassLink: React.MemoExoticComponent<React.ForwardRefExoticComponent<passLinkProps & import("@stitches/react/types/styled-component").TransformProps<{
    underline?: boolean | "true" | undefined;
    button?: boolean | "true" | undefined;
    size?: "inherit" | "xs" | "sm" | "md" | "lg" | undefined;
    color?: "inherit" | "white" | "black" | "default" | "slate" | "helios" | "fizz" | "mauve" | "sky" | undefined;
    sans?: boolean | "true" | undefined;
    mono?: boolean | "true" | undefined;
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
}> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    css?: CSS | undefined;
} & React.RefAttributes<HTMLAnchorElement>>>;
export type { PassLinkProps };
