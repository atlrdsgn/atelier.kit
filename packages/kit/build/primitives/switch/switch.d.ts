/// <reference types="react" />
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { baseComponentProps } from '../@shared/types';
import { PrimitivePropsWithRef } from '../primitive';
import type { SwitchVariantProps } from './switch.styles';
import { StyledSwitchThumb, StyledSwitchToggle } from './switch.styles';
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
type SwitchPrimitiveProps = switchProps & baseComponentProps & SwitchVariantProps & PrimitivePropsWithRef<typeof SwitchPrimitive.Root>;
type SwitchProps = SwitchPrimitiveProps;
export declare const Switch: React.FC<SwitchProps> & {
    Thumb: typeof StyledSwitchThumb;
    Toggle: typeof StyledSwitchToggle;
};
export type { SwitchProps };
//# sourceMappingURL=switch.d.ts.map