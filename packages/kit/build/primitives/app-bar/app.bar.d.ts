import * as React from 'react';
import type { CSS } from '../../theme';
import type { AppbarVariantProps, AppbarSpotVariantProps } from './app.bar.styles';
import type { baseComponentProps } from '../@shared/types';
/**
 *
 * ..Appbar[Root].
 */
type AppbarPrimitiveProps = baseComponentProps & AppbarVariantProps & React.HTMLAttributes<HTMLDivElement>;
type AppbarProps = AppbarPrimitiveProps & {
    css?: CSS;
};
/**
 *
 * ..Appbar[Spot].
 * this element helps with placement of items in the Appbar Primitive.
 *
 * the alignment prop has 3 options:
 * ..left _ 'flex-end'
 * ..center _ 'center'
 * ..right _ 'flex-start'
 */
type AppbarSpotPrimitiveProps = baseComponentProps & AppbarSpotVariantProps & React.HTMLAttributes<HTMLDivElement>;
type AppbarSpotProps = AppbarSpotPrimitiveProps & {
    css?: CSS;
};
export declare const Appbar: ({ children, color, glass, size, border, fixed, sticky, css, ...rest }: AppbarProps) => JSX.Element;
export declare const AppbarSpot: ({ children, alignment, css, ...rest }: AppbarSpotProps) => JSX.Element;
export type { AppbarProps };
export type { AppbarSpotProps };
//# sourceMappingURL=app.bar.d.ts.map