import * as React from 'react';
import { baseComponentProps } from '../@shared/types';
import type { SectionVariantProps } from './section.styles';
interface sectionProps {
    children?: React.ReactNode;
}
type SectionPrimitiveProps = baseComponentProps & sectionProps & SectionVariantProps;
type SectionProps = SectionPrimitiveProps;
export declare const Section: ({ children, size, responsive, fluid, hero, css, ...rest }: SectionPrimitiveProps) => JSX.Element;
export type { SectionProps };
