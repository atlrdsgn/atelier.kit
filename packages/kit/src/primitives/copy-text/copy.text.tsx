import * as React from 'react'
import copy from 'copy-to-clipboard'

import {
  StyledCopyField,
  StyledCopyFieldText,
  StyledCopyTrigger,
  StyledTriggerBox,
} from './copy.text.styles'
import type {CopyTriggerVariantProps, CopyFieldVariantProps} from './copy.text.styles'
import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'

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
  primary?: boolean
  secondary?: boolean
}

type CopyFieldPrimitiveProps = baseComponentProps &
  React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof StyledCopyField>
type CopyFieldProps = CopyFieldVariantProps & CopyFieldPrimitiveProps & copyTextProps

const CopyFieldRoot = ({children, primary, secondary, css, ...rest}: CopyFieldProps) => (
  <StyledCopyField {...rest} secondary={secondary} primary={primary} css={{...css}}>
    {children}
  </StyledCopyField>
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

const CopyFieldText = ({children, textElement, ...rest}: CopyFieldTextProps) => {
  return <StyledCopyFieldText {...rest}>{children}</StyledCopyFieldText>
}

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

  primary?: boolean
  secondary?: boolean
  //
} & React.HTMLAttributes<HTMLButtonElement>

type CopyTriggerPrimitiveProps = baseComponentProps &
  copyTriggerProps &
  React.ComponentProps<typeof StyledCopyTrigger> &
  CopyTriggerVariantProps
type CopyTriggerProps = CopyTriggerPrimitiveProps

const CopyTextTrigger = ({copyText, onClick, primary, secondary, ...rest}: CopyTriggerProps) => {
  const [copied, setCopied] = React.useState(false)

  const copyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (copyText) {
      copy(copyText)
      setCopied(true)
    }

    /**
     *
     * onClick() => {} handler
     * copies the (copyText) prop to the clipboard.
     */
    if (onClick) {
      onClick(e)
    }

    /**
     *
     * setTimeout() => {} handler
     */
    e.preventDefault()

    /**
     *
     * returns the (copied).
     */
    return copyText
  }
  return (
    <StyledTriggerBox>
      <StyledCopyTrigger onClick={copyClick} {...rest}>
        {copied ? 'Copied' : 'Copy'}
      </StyledCopyTrigger>
    </StyledTriggerBox>
  )
}

/** ---------------- export parts ------------------- */
export const CopyField: React.FC<CopyFieldProps> & {
  Text: typeof CopyFieldText
  Trigger: typeof CopyTextTrigger
} = (props) => <CopyFieldRoot {...props} />

CopyField.Text = CopyFieldText
CopyField.Trigger = CopyTextTrigger

CopyField.displayName = 'CopyField'

export type {CopyFieldProps, CopyFieldTextProps, CopyTriggerProps}
