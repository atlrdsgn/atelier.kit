import * as React from 'react';
import type { CSS } from '../../theme';
import { StyledSliderRoot, StyledSliderTrack, StyledSliderThumb, StyledSliderRange } from './slider.styles';
type SliderRootPrimitiveProps = React.HTMLAttributes<HTMLDivElement> & React.ComponentProps<typeof StyledSliderRoot>;
type SliderRootProps = SliderRootPrimitiveProps & {
    css?: CSS;
};
type SliderTrackPrimitiveProps = React.HTMLAttributes<HTMLDivElement> & React.ComponentProps<typeof StyledSliderTrack>;
type SliderTrackProps = SliderTrackPrimitiveProps & {
    css?: CSS;
};
type SliderThumbPrimitiveProps = React.HTMLAttributes<HTMLDivElement> & React.ComponentProps<typeof StyledSliderThumb>;
type SliderThumbProps = SliderThumbPrimitiveProps & {
    css?: CSS;
};
type SliderRangePrimitiveProps = React.HTMLAttributes<HTMLDivElement> & React.ComponentProps<typeof StyledSliderRange>;
type SliderRangeProps = SliderRangePrimitiveProps & {
    css?: CSS;
};
export declare const Slider: React.ForwardRefExoticComponent<Pick<SliderRootProps, "max" | "value" | "key" | "css" | "step" | "orientation" | "asChild" | "onValueChange" | "disabled" | "name" | keyof React.HTMLAttributes<HTMLDivElement> | "min" | "inverted" | "minStepsBetweenThumbs" | "onValueCommit"> & React.RefAttributes<HTMLDivElement>>;
export declare const SliderTrack: React.ForwardRefExoticComponent<Pick<SliderTrackProps, "key" | "css" | "asChild" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>>;
export declare const SliderThumb: React.ForwardRefExoticComponent<Pick<SliderThumbProps, "key" | "css" | "asChild" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>>;
export declare const SliderRange: React.ForwardRefExoticComponent<Pick<SliderRangeProps, "key" | "css" | "asChild" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>>;
export type { SliderRootProps, SliderTrackProps, SliderThumbProps, SliderRangeProps };
