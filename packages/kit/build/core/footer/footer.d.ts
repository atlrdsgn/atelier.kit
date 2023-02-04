import * as React from 'react';
import type { baseElementProps } from '../@shared';
import type { FooterVariantProps } from './footer.styles';
import { StyledFooter } from './footer.styles';
type footerProps = {
    children: React.ReactNode;
};
type FooterPrimiticveProps = baseElementProps & FooterVariantProps & React.HTMLAttributes<HTMLDivElement> & React.ComponentPropsWithRef<typeof StyledFooter> & footerProps;
type FooterProps = FooterPrimiticveProps;
export declare const Footer: React.MemoExoticComponent<({ ...props }: FooterProps) => JSX.Element>;
export {};
//# sourceMappingURL=footer.d.ts.map