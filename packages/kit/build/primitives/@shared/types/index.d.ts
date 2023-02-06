import React from 'react';
import type { CSS } from '../../../theme';
export interface baseKitProp {
    /** Stitches.Config.CSS */
    css?: CSS;
}
export interface commonKitProps {
    /** The prefix of the component CSS class */
    classPrefix?: string;
    /** Additional classes */
    className?: string;
    /** Primary content */
    children?: React.ReactNode;
}
export interface baseComponentProps {
    /**
     * Adds the specified classes to the root element of the component.
     * @deprecated Custom CSS is not supported. For other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).
     */
    className?: string;
    /**
     * Adds the specified ID to the root element of the component.
     * @deprecated Custom CSS is not supported. For other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).
     */
    id?: string;
    css?: CSS;
}
/**
 * Component helper type to be extended by component types, e.g.:
 * type CustomComponentProps = BaseProps<HTMLDivElement> & { ... }
 *
 * Example use:
 * const CustomComponent = forwardRef<HTMLDivElement, CustomComponentProps>(({className, ...props}, ref) => { ... })
 * // OR:
 * const CustomComponent = forwardRef(({className: CustomComponentProps, ...props}, ref: Ref<HTMLDivElement>) => { ... })
 */
export type BaseProps<T> = {
    className?: string;
    id?: string;
    ref?: React.Ref<T>;
};
/**
 * Component helper type to be extended by component types, e.g.:
 * type CustomComponentProps = BaseProps<HTMLDivElement> & { ... }
 *
 * Example use:
 * const CustomComponent = forwardRef<HTMLDivElement, CustomComponentProps>(({className, ...props}, ref) => { ... })
 * // OR:
 * const CustomComponent = forwardRef(({className: CustomComponentProps, ...props}, ref: Ref<HTMLDivElement>) => { ... })
 */
export type Override<T, U> = Omit<T, keyof U> & U;
//# sourceMappingURL=index.d.ts.map