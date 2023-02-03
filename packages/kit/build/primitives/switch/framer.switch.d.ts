/// <reference types="react" />
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { baseComponentProps } from '../@shared/types';
import { PrimitivePropsWithRef } from '../primitive';
import type { SwitchVariantProps } from './switch.styles';
type switchProps = {
    asChild?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
};
type SwitchPrimitiveProps = switchProps & baseComponentProps & SwitchVariantProps & PrimitivePropsWithRef<typeof SwitchPrimitive.Thumb>;
type SwitchProps = SwitchPrimitiveProps;
export declare const FramerSwitchThumb: ({ children, asChild, onClick, css, ...rest }: SwitchProps) => JSX.Element;
export {};
//# sourceMappingURL=framer.switch.d.ts.map