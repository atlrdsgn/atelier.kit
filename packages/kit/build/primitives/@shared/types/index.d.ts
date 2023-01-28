/// <reference types="react" />
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
//# sourceMappingURL=index.d.ts.map