import * as React from 'react';
import type { baseElementProps } from '../@shared';
import { CrumbsVariantProps } from './crumbs.style';
import type { AriaBreadcrumbsProps } from '@react-types/breadcrumbs';
interface crumbProps extends AriaBreadcrumbsProps, baseElementProps {
    children?: React.ReactNode;
    default?: CrumbsVariantProps;
    isCurrent?: (item: number) => boolean;
}
type BreadcrumbsProps = crumbProps & CrumbsVariantProps;
declare const Crumbs: React.ForwardRefExoticComponent<crumbProps & import("@stitches/react/types/styled-component").TransformProps<{
    default?: boolean | "true" | undefined;
}, {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
    initial: string;
    motion: string;
    safari: string;
    hover: string;
    dark: string;
    light: string;
}> & React.RefAttributes<HTMLDivElement>>;
export { Crumbs };
export type { BreadcrumbsProps };
//# sourceMappingURL=crumbs.d.ts.map