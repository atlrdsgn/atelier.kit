import * as React from 'react';
import { BadgeVariantsProps } from './badge.styles';
import { baseComponentProps } from '../@shared/types';
type badgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
};
type BadgePrimitiveProps = baseComponentProps & badgeProps & BadgeVariantsProps;
type BadgeProps = BadgePrimitiveProps;
declare const Badge: React.FC<BadgeProps>;
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
export { Badge };
export type { BadgeProps };
//# sourceMappingURL=badge.d.ts.map