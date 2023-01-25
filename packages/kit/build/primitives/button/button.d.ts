import * as React from 'react';
import type { ButtonVariantProps } from './button.styles';
import type { buttonProps } from './button.types';
import { baseComponentProps } from '../@shared/types';
type ButtonPrimitiveProps = React.HTMLAttributes<HTMLButtonElement> & baseComponentProps & buttonProps & ButtonVariantProps;
type ButtonProps = ButtonPrimitiveProps;
export declare const Button: ({ children, type, color, as, href, onClick, target, rel, size, primary, secondary, neon, rainbow, ghost, css, ...rest }: ButtonProps) => JSX.Element;
export type { ButtonProps };
