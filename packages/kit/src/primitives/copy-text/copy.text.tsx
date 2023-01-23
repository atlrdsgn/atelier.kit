import * as React from 'react'
import copy from 'copy-to-clipboard'

import {StyledCopyField, StyledCopyFieldText, StyledCopyTrigger} from './copy.text.styles'
import type {CSS} from '../../theme'
import type {CopyTriggerVariantProps, CopyFieldVariantProps} from './copy.text.styles'

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
  children?: React.ReactNode
  textElement?: string

  css?: CSS

  primary?: boolean
  secondary?: boolean
}

type CopyFieldPrimitiveProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof StyledCopyField>
type CopyFieldProps = CopyFieldVariantProps & CopyFieldPrimitiveProps & copyTextProps

const CopyFieldRoot = React.forwardRef<React.ElementRef<typeof StyledCopyField>, CopyFieldProps>(
  ({...props}, ref) => {
    return (
      <StyledCopyField ref={ref} {...props} secondary={props.secondary} primary={props.primary}>
        {props.children}
      </StyledCopyField>
    )
  }
)

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

type CopyFieldTextPrimitiveProps = React.HTMLAttributes<HTMLParagraphElement> &
  React.ComponentProps<typeof StyledCopyFieldText>
type CopyFieldTextProps = CopyFieldTextPrimitiveProps & copyTextProps

const CopyFieldText = React.forwardRef<
  React.ElementRef<typeof StyledCopyFieldText>,
  CopyFieldTextProps
>(({textElement, ...props}, ref) => {
  return (
    <StyledCopyFieldText ref={ref} {...props}>
      {props.children || textElement}
    </StyledCopyFieldText>
  )
})

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
  copyText?: string
  /**
   *
   * button click handler.
   *
   */
  onClick?: () => void
  /**
   *
   * Custom CSS styles.
   *
   */
  css?: CSS

  primary?: boolean
  secondary?: boolean
  //
} & React.HTMLAttributes<HTMLButtonElement>

type CopyTriggerPrimitiveProps = React.ComponentProps<typeof StyledCopyTrigger> &
  CopyTriggerVariantProps
type CopyTriggerProps = CopyTriggerPrimitiveProps & copyTriggerProps

const CopyTriggerButton = React.forwardRef<
  React.ElementRef<typeof StyledCopyTrigger>,
  CopyTriggerProps
>(({...props}, ref) => {
  const {copyText, onClick, ...rest} = props
  const [copied, setCopied] = React.useState(false)

  const copyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (copyText) {
      copy(copyText)

      setCopied(true)
    }

    if (onClick) {
      onClick(e)
    }

    e.preventDefault()

    return copyText
  }

  return (
    <StyledCopyTrigger ref={ref} onClick={copyClick} {...rest}>
      {copied ? 'Copied' : 'Copy'}
    </StyledCopyTrigger>
  )
})

export const CopyField = CopyFieldRoot
export const CopyText = CopyFieldText
export const CopyTrigger = CopyTriggerButton

export type {CopyFieldProps, CopyFieldTextProps, CopyTriggerProps}

CopyField.displayName = 'Copy-Field'
CopyText.displayName = 'Copy-Text'
CopyTrigger.displayName = 'Copy-Trigger'
