import * as React from 'react';
import { CSS } from '../../theme';
import { BadgeVariantsProps } from './badge.styles';
type atlrProps = React.HTMLAttributes<HTMLSpanElement> & {
    type?: 'default' | 'success' | 'warning' | 'inactive' | 'info' | 'label' | 'new' | 'beta' | 'federal';
    subtle?: boolean;
    'data-test-id'?: string;
};
interface Props {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
}
type BadgePrimitiveProps = atlrProps & Props & BadgeVariantsProps;
type BadgeProps = BadgePrimitiveProps & {
    css?: CSS;
};
export declare const Badge: ({ type, color, children, subtle, as, size, css, ...rest }: BadgeProps) => JSX.Element;
export type { BadgeProps };
