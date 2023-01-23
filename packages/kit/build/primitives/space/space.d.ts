import React from 'react';
import { CSS } from '../../theme';
import type { SpaceVariantProps } from './space.styles';
interface spaceProps {
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    devFlag?: boolean;
}
type SpacePrimitiveProps = spaceProps & SpaceVariantProps & React.HTMLAttributes<HTMLDivElement>;
type SpaceProps = SpacePrimitiveProps & {
    css?: CSS;
};
export declare const Space: React.ForwardRefExoticComponent<spaceProps & import("@stitches/react/types/styled-component").TransformProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
    devFlag?: boolean | "true" | undefined;
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
export type { SpaceProps };
