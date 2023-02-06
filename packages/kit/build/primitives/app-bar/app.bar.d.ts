import * as React from 'react';
import type { AppbarVariantProps, AppbarSpotVariantProps } from './app.bar.styles';
import type { baseComponentProps } from '../@shared/types';
/**
 *
 * ..Appbar[Root].
 */
type AppbarPrimitiveProps = baseComponentProps & AppbarVariantProps & React.HTMLAttributes<HTMLDivElement>;
type AppbarProps = AppbarPrimitiveProps;
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
type AppbarSpotProps = AppbarSpotPrimitiveProps;
declare const Spot: ({ children, alignment, css, ...rest }: AppbarSpotProps) => JSX.Element;
export declare const Appbar: React.FC<AppbarProps> & {
    Spot: typeof Spot;
};
export type { AppbarProps };
export type { AppbarSpotProps };
//# sourceMappingURL=app.bar.d.ts.map