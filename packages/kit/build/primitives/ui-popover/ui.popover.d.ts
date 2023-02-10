import { Popover } from '@headlessui/react';
import * as React from 'react';
import type { baseComponentProps } from '../@shared/types';
export interface UIPopoverProps {
    children?: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    open?: boolean;
    onClose?: () => void;
    close?: (ref?: null | HTMLElement) => void;
}
type popProps = baseComponentProps & React.HTMLAttributes<HTMLDivElement>;
type PopoverProps = popProps & UIPopoverProps;
type triggerProps = {
    children?: React.ReactNode;
    as?: React.ElementType;
    open?: boolean;
};
declare const PopoverTrigger: React.ForwardRefExoticComponent<baseComponentProps & React.HTMLAttributes<HTMLButtonElement> & triggerProps & React.RefAttributes<never>>;
type contentProps = {
    children?: React.ReactNode;
    as?: React.ElementType;
    focus?: boolean;
};
declare const PopoverContent: React.ForwardRefExoticComponent<baseComponentProps & React.HTMLAttributes<HTMLElement> & contentProps & React.RefAttributes<never>>;
export declare const UIPopover: React.FC<PopoverProps> & {
    Overlay: typeof Popover.Overlay;
    Content: typeof PopoverContent;
    Trigger: typeof PopoverTrigger;
    Group: typeof Popover.Group;
};
export {};
//# sourceMappingURL=ui.popover.d.ts.map