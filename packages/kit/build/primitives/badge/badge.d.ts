import * as React from 'react';
import { BadgeVariantsProps } from './badge.styles';
import { baseComponentProps } from '../@shared/types';
type atlrProps = React.HTMLAttributes<HTMLSpanElement> & {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
};
type BadgePrimitiveProps = baseComponentProps & atlrProps & BadgeVariantsProps;
type BadgeProps = BadgePrimitiveProps;
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * exports, etc..
 */
export declare const Badge: React.FC<BadgePrimitiveProps>;
export type { BadgeProps };
//# sourceMappingURL=badge.d.ts.map