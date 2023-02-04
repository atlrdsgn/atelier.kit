import * as React from 'react';
import type { baseElementProps } from '../@shared';
import type { SectionVariantProps } from './section.styles';
interface sectionProps {
    children?: React.ReactNode;
}
type SectionPrimitiveProps = baseElementProps & sectionProps & SectionVariantProps;
type SectionProps = SectionPrimitiveProps;
export declare const Section: ({ children, size, responsive, fluid, hero, css, ...rest }: SectionPrimitiveProps) => JSX.Element;
export type { SectionProps };
//# sourceMappingURL=section.d.ts.map