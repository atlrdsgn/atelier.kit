import * as React from 'react';
import { CSS } from '../../theme';
import { StyledSARoot, StyledSAViewport, StyledSAScrollbar, StyledSACorner } from './sa.styles';
/**
 *
 *
 * SCROLL_ AREA_ ROOT
 */
type ScrollAreaRootPrimitiveProps = React.ComponentPropsWithRef<typeof StyledSARoot> & React.HTMLAttributes<HTMLDivElement>;
type SARootProps = ScrollAreaRootPrimitiveProps & {
    css?: CSS;
};
/**
 *
 *
 * SCROLL_ AREA_ VIEWPORT
 */
type ScrollAreaViewportPrimitiveProps = React.ComponentPropsWithRef<typeof StyledSAViewport> & React.ComponentPropsWithoutRef<'div'>;
type SAViewportProps = ScrollAreaViewportPrimitiveProps & {
    css?: CSS;
};
/**
 *
 *
 * SCROLL_AREA_SCROLLBAR
 *
 * this is the scrollbar track.
 * and styled thumb component.
 */
type ScrollAreaScrollbarPrimitiveProps = React.ComponentPropsWithRef<typeof StyledSAScrollbar> & React.ComponentPropsWithoutRef<'div'>;
type SAScrollbarProps = ScrollAreaScrollbarPrimitiveProps & {
    css?: CSS;
};
/**
 *
 *
 * SCROLL_AREA_CORNER
 */
type ScrollAreaCornerPrimitiveProps = React.ComponentPropsWithRef<typeof StyledSACorner> & React.ComponentPropsWithoutRef<'div'>;
type SACornerProps = ScrollAreaCornerPrimitiveProps & {
    css?: CSS;
};
export declare const ScrollArea: React.ForwardRefExoticComponent<Pick<SARootProps, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild" | "type" | "scrollHideDelay" | "css"> & React.RefAttributes<HTMLDivElement>>;
export declare const ScrollAreaViewport: React.ForwardRefExoticComponent<Pick<SAViewportProps, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild" | "css"> & React.RefAttributes<HTMLDivElement>>;
export declare const ScrollAreaScrollbar: React.ForwardRefExoticComponent<Pick<SAScrollbarProps, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild" | "css" | "forceMount" | "orientation"> & React.RefAttributes<HTMLDivElement>>;
export declare const ScrollAreaCorner: React.ForwardRefExoticComponent<Pick<SACornerProps, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild" | "css"> & React.RefAttributes<HTMLDivElement>>;
export type { SARootProps, SAViewportProps, SAScrollbarProps, SACornerProps };
