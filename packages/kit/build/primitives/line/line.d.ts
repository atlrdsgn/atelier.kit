import * as React from 'react';
import type { CSS } from '../../theme';
import type { LineVariantProps } from './line.styles';
interface lineProps {
    children?: never;
    orientation?: 'horizontal' | 'vertical' | string;
    weight?: '1' | '2' | '3' | '4' | '5' | string;
}
type LineComponentProps = React.HTMLAttributes<HTMLDivElement> & lineProps;
type LineProps = LineComponentProps & LineVariantProps & {
    css?: CSS;
};
declare const LineComponent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & lineProps & import("@stitches/react/types/styled-component").TransformProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "max" | "px50" | "px100" | undefined;
    color?: "white" | "slate" | "helios" | "contrast" | undefined;
    weight?: number | "1" | "2" | "3" | "4" | "5" | undefined;
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
} & React.RefAttributes<HTMLDivElement>>;
export { LineComponent };
export type { LineProps };
//# sourceMappingURL=line.d.ts.map