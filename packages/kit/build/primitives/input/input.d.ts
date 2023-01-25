import * as React from 'react';
import { baseComponentProps } from '../@shared/types';
import { InputVariantProps } from './input.styles';
interface inputProps {
    label?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
    placeholder?: string;
    cursor?: 'pointer' | 'default' | 'text';
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    style?: 'ghost' | 'atelier';
}
type InputPrimitiveProps = baseComponentProps & InputVariantProps & inputProps & React.HTMLAttributes<HTMLInputElement>;
type InputProps = InputPrimitiveProps;
export declare const Input: ({ label, placeholder, cursor, size, style, value, type, className, css, ...rest }: InputProps) => JSX.Element;
export type { InputProps };
