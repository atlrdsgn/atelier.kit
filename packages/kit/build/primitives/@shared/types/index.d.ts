/// <reference types="react" />
import { CSS } from '../../../theme';
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
