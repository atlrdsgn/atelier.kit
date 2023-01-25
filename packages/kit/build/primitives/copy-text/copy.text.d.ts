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
export declare const CopyField: ({ children, primary, secondary, css, ...rest }: CopyFieldProps) => JSX.Element;
export declare const CopyText: ({ children, textElement, ...rest }: CopyFieldTextProps) => JSX.Element;
export declare const CopyTrigger: ({ copyText, onClick, primary, secondary, ...rest }: CopyTriggerProps) => JSX.Element;
export type { CopyFieldProps, CopyFieldTextProps, CopyTriggerProps };
