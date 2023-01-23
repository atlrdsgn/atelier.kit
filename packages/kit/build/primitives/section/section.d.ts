import * as React from 'react';
import { CSS } from '../../theme';
import { SectionPrimitive } from './section.styles';
import type { SectionVariantProps } from './section.styles';
type SectionPrimitiveProps = SectionVariantProps & React.ComponentProps<typeof SectionPrimitive>;
type SectionProps = SectionPrimitiveProps & {
    css?: CSS;
};
export declare const Section: React.ForwardRefExoticComponent<Pick<SectionProps, "size" | "dev" | "hero" | "fluid" | "responsive" | "key" | keyof React.HTMLAttributes<HTMLDivElement> | "css"> & React.RefAttributes<HTMLDivElement>>;
export type { SectionProps };
