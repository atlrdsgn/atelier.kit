import React from 'react';
import type { SpaceVariantProps } from './space.styles';
import type { baseElementProps } from '../@shared/types';
interface spaceProps {
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    devFlag?: boolean;
}
type SpacePrimitiveProps = baseElementProps & spaceProps & SpaceVariantProps & React.HTMLAttributes<HTMLDivElement>;
type SpaceProps = SpacePrimitiveProps;
export declare const Space: ({ children, className, size, devFlag, css, ...rest }: SpacePrimitiveProps) => JSX.Element;
export type { SpaceProps };
//# sourceMappingURL=space.d.ts.map