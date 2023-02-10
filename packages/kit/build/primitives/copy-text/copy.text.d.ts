import * as React from 'react';
import { StyledCopyField, StyledCopyFieldText, StyledCopyTrigger } from './copy.text.styles';
import type { CopyTriggerVariantProps, CopyFieldVariantProps } from './copy.text.styles';
import { baseComponentProps } from '../@shared/types';
/**
 *
 *
 *
 *
 * ..CopyField.Root
 * 'flex' component with a styled border to mimic a text field.
 *
 *
 *
 *
 */
interface copyTextProps {
    children?: React.ReactNode;
    textElement?: string;
    primary?: boolean;
    secondary?: boolean;
}
type CopyFieldPrimitiveProps = baseComponentProps & React.HTMLAttributes<HTMLDivElement> & React.ComponentProps<typeof StyledCopyField>;
type CopyFieldProps = CopyFieldVariantProps & CopyFieldPrimitiveProps & copyTextProps;
/**
 *
 *
 *
 *
 * ..CopyField.Text
 * 'p' element with monospace styles.
 *
 *
 *
 *
 */
type CopyFieldTextPrimitiveProps = React.HTMLAttributes<HTMLParagraphElement> & React.ComponentProps<typeof StyledCopyFieldText>;
type CopyFieldTextProps = CopyFieldTextPrimitiveProps & copyTextProps;
declare const CopyFieldText: ({ children, textElement, ...rest }: CopyFieldTextProps) => JSX.Element;
/**
 *
 *
 *
 *
 * ..[CopyField].Trigger
 * HTML'button' element that when clicked will
 * copy the (copyText) prop to the clipboard.
 *
 *
 *
 */
type copyTriggerProps = {
    /**
     *
     * 'string' of text to be copied to the clipboard.
     * [Required][copyText] prop.
     *
     */
    copyText?: string;
    /**
     *
     * button click handler.
     *
     */
    onClick?: () => void;
    /**
     *
     * Custom CSS styles.
     *
     */
    primary?: boolean;
    secondary?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;
type CopyTriggerPrimitiveProps = baseComponentProps & copyTriggerProps & React.ComponentProps<typeof StyledCopyTrigger> & CopyTriggerVariantProps;
type CopyTriggerProps = CopyTriggerPrimitiveProps;
declare const CopyTextTrigger: ({ copyText, onClick, primary, secondary, ...rest }: CopyTriggerProps) => JSX.Element;
/** ---------------- export parts ------------------- */
export declare const CopyField: React.FC<CopyFieldProps> & {
    Text: typeof CopyFieldText;
    Trigger: typeof CopyTextTrigger;
};
export type { CopyFieldProps, CopyFieldTextProps, CopyTriggerProps };
//# sourceMappingURL=copy.text.d.ts.map