import * as React from 'react';
import type { baseComponentProps } from '../@shared/types';
type revealProps = {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
};
type RevealRootPrimitiveProps = baseComponentProps & React.HTMLAttributes<HTMLDivElement>;
type RevealProps = revealProps & RevealRootPrimitiveProps;
type RevealTriggerPrimitiveProps = baseComponentProps & React.HTMLAttributes<HTMLButtonElement>;
type RevealTriggerProps = RevealTriggerPrimitiveProps;
declare const RevealTrigger: React.ForwardRefExoticComponent<baseComponentProps & React.HTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
type RevealContentPrimitiveProps = baseComponentProps & React.HTMLAttributes<HTMLDivElement>;
type RevealContentProps = RevealContentPrimitiveProps;
declare const RevealContent: React.ForwardRefExoticComponent<baseComponentProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const Reveal: React.FC<RevealProps> & {
    Trigger: typeof RevealTrigger;
    Content: typeof RevealContent;
};
export type { RevealProps, RevealContentProps, RevealTriggerProps, };
//# sourceMappingURL=reveal.d.ts.map