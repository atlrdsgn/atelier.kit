import * as React from 'react';
import type { CSS } from '../../theme';
import type { IconButtonVariantProps } from './icon.button.styles';
type IButtonPrimitiveProps = IconButtonVariantProps & {
    children?: React.ReactNode;
    raised?: boolean;
    primary?: boolean;
    secondary?: boolean;
    as?: React.ElementType;
};
type IButtonProps = IButtonPrimitiveProps & {
    css?: CSS;
};
declare const IconButton: React.ForwardRefExoticComponent<import("@stitches/react/types/styled-component").TransformProps<{
    size?: "sm" | "md" | "lg" | undefined;
    primary?: boolean | "true" | undefined;
    secondary?: boolean | "true" | undefined;
    raised?: boolean | "true" | undefined;
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
}> & {
    children?: React.ReactNode;
    raised?: boolean | undefined;
    primary?: boolean | undefined;
    secondary?: boolean | undefined;
    as?: React.ElementType<any> | undefined;
} & {
    css?: CSS | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
export { IconButton };
export type { IButtonProps };
//# sourceMappingURL=icon.button.d.ts.map