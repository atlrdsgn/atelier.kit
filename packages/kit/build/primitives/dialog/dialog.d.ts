import * as React from 'react';
import * as D from '@radix-ui/react-dialog';
import { StyledDialogRoot, StyledDialogOverlay, StyledDialogContent, StyledDialogClose, StyledDialogTitle, StyledDialogDescription, StyledDialogTrigger } from './dialog.styles';
import type { baseComponentProps } from '../@shared/types';
type DialogRootProps = baseComponentProps & React.ComponentProps<typeof StyledDialogRoot>;
export type DialogProps = DialogRootProps;
type dialogContentProps = React.ComponentProps<typeof StyledDialogContent> & {
    children?: React.ReactElement;
    closeDialogText?: string;
    showCloseButton?: boolean;
};
type DialogContentPrimitiveProps = baseComponentProps & dialogContentProps & React.ComponentProps<typeof D.Content>;
type DialogContentProps = DialogContentPrimitiveProps;
declare const DialogContentComponent: React.FC<DialogContentProps>;
export declare const Dialog: React.FC<DialogProps> & {
    Overlay: typeof StyledDialogOverlay;
    Close: typeof StyledDialogClose;
    Content: typeof DialogContentComponent;
    Description: typeof StyledDialogDescription;
    Title: typeof StyledDialogTitle;
    Trigger: typeof StyledDialogTrigger;
};
export declare const DialogContent: React.FC<DialogContentPrimitiveProps>;
export {};
//# sourceMappingURL=dialog.d.ts.map