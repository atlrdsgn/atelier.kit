import * as React from 'react';
import { CSS } from '../../theme';
import { BadgeVariantsProps } from './badge.styles';
type atlrProps = React.HTMLAttributes<HTMLSpanElement> & {
    type?: 'default' | 'success' | 'warning' | 'inactive' | 'info' | 'label' | 'new' | 'beta' | 'federal';
    subtle?: boolean;
    'data-test-id'?: string;
};
interface Props {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
}
type BadgePrimitiveProps = atlrProps & Props & BadgeVariantsProps;
type BadgeProps = BadgePrimitiveProps & {
    css?: CSS;
};
export declare const Badge: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    type?: "default" | "success" | "warning" | "inactive" | "info" | "label" | "new" | "beta" | "federal" | undefined;
    subtle?: boolean | undefined;
    'data-test-id'?: string | undefined;
} & Props & import("@stitches/react/types/styled-component").TransformProps<{
    size?: number | "1" | "2" | "3" | undefined;
    color?: "ghostPill" | "fizz" | "slate" | "helios" | "gold" | undefined;
    subtle?: boolean | "true" | undefined;
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
} & React.RefAttributes<HTMLSpanElement>>;
export type { BadgeProps };
