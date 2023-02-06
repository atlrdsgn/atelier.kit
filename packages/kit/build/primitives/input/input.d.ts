import * as React from 'react';
import { baseComponentProps } from '../@shared/types';
import type { InputVariantProps } from './input.styles';
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
declare const InputElement: {
    ({ label, placeholder, cursor, size, style, inputMode, value, type, className, css, ...rest }: InputProps): JSX.Element;
    displayName: string;
};
export { InputElement as Input, };
export type { InputProps };
//# sourceMappingURL=input.d.ts.map