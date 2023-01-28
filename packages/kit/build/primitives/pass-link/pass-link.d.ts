import * as React from 'react';
import type { PassLinkVariantProps } from './pass-link.styles';
import { baseComponentProps } from '../@shared/types';
interface passLinkProps {
    href: string | null;
    as?: React.ElementType | string;
    color?: string;
    mono?: boolean;
    size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | string;
}
type PassLinkPrimitiveProps = baseComponentProps & passLinkProps & PassLinkVariantProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type PassLinkProps = PassLinkPrimitiveProps;
export declare const PassLink: React.MemoExoticComponent<({ children, href, as, color, mono, size, underline, css, ...rest }: PassLinkPrimitiveProps) => JSX.Element>;
export type { PassLinkProps };
//# sourceMappingURL=pass-link.d.ts.map