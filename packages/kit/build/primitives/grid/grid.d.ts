import React from 'react';
import { baseComponentProps } from '../@shared/types';
import type { GridVariantProps } from './grid.styles';
type gridProps = {
    children?: React.ReactNode;
    className?: string;
    align?: string;
    justify?: string;
    gap?: number;
    gapX?: number;
    gapY?: number;
    columns?: number;
    flow?: string;
};
type GridPrimitiveProps = baseComponentProps & gridProps & GridVariantProps;
type GridProps = GridPrimitiveProps;
export declare const Grid: React.ForwardRefExoticComponent<baseComponentProps & gridProps & import("@stitches/react/types/styled-component").TransformProps<{
    align?: "start" | "center" | "end" | "stretch" | "baseline" | undefined;
    justify?: "start" | "center" | "end" | "stretch" | "between" | undefined;
    flow?: "row" | "column" | "dense" | "rowDense" | "columnDense" | undefined;
    columns?: number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "12" | undefined;
    gap?: number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
    gapX?: number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
    gapY?: number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
    border?: boolean | "true" | undefined;
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
}> & React.RefAttributes<HTMLDivElement>>;
export type { GridProps };
//# sourceMappingURL=grid.d.ts.map