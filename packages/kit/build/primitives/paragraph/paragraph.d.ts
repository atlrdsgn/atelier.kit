import * as React from 'react';
import type { ParagraphVariantProps } from './paragraph.styles';
import { baseComponentProps } from '../@shared/types';
type paragraphProps = {
    children?: React.ReactNode;
};
type ParagraphPrimitiveProps = baseComponentProps & paragraphProps & ParagraphVariantProps & React.HTMLAttributes<HTMLParagraphElement>;
type ParagraphProps = ParagraphPrimitiveProps;
export declare const Paragraph: ({ children, size, color, align, weight, css, ...rest }: ParagraphProps) => JSX.Element;
export type { ParagraphProps };
//# sourceMappingURL=paragraph.d.ts.map