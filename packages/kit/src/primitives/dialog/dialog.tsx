import * as React from 'react'
import * as D from '@radix-ui/react-dialog'
import {
  StyledDialogRoot,
  StyledDialogOverlay,
  StyledDialogContent,
  StyledDialogClose,
  //
  StyledDialogTitle,
  StyledDialogDescription,
  StyledDialogTrigger,
} from './dialog.styles'
import {CrossIcon} from '../../core/assets'
import type {baseComponentProps} from '../@shared/types'
import {IconBox} from '../icon-box'

const MODAL_OVERLAY_ID = 'modal-overlay'

//////////////// root //////////////////
type DialogRootProps = baseComponentProps & React.ComponentProps<typeof StyledDialogRoot>
export type DialogProps = DialogRootProps

type dialogContentProps = React.ComponentProps<typeof StyledDialogContent> & {
  children?: React.ReactElement
  closeDialogText?: string
  showCloseButton?: boolean
}

type DialogContentPrimitiveProps = baseComponentProps &
  dialogContentProps &
  React.ComponentProps<typeof D.Content>
type DialogContentProps = DialogContentPrimitiveProps

const DialogContentComponent: React.FC<DialogContentProps> = ({
  size = 'sm',
  children,
  closeDialogText = 'Close dialog',
  showCloseButton = true,
  ...rest
}) => (
  <D.Portal>
    <StyledDialogOverlay id={MODAL_OVERLAY_ID}>
      {React.Children.map(
        children,
        (child?: React.ReactElement) => child?.type === StyledDialogOverlay && child
      )}
      <StyledDialogContent
        size={size}
        aria-label="Dialog"
        onPointerDownOutside={(event) => {
          const element = event.target as HTMLElement
          if (element?.id !== MODAL_OVERLAY_ID) {
            event.preventDefault()
          }
        }}
        {...rest}>
        {showCloseButton && (
          <StyledDialogClose>
            <IconBox>
              <CrossIcon />
            </IconBox>
          </StyledDialogClose>
        )}
        {React.Children.map(
          children,
          (child?: React.ReactElement) => child?.type !== StyledDialogOverlay && child
        )}
      </StyledDialogContent>
    </StyledDialogOverlay>
  </D.Portal>
)

//////////////// dialog //////////////////

export const Dialog: React.FC<DialogProps> & {
  Overlay: typeof StyledDialogOverlay
  Close: typeof StyledDialogClose
  Content: typeof DialogContentComponent
  Description: typeof StyledDialogDescription
  Title: typeof StyledDialogTitle
  Trigger: typeof StyledDialogTrigger
} = (props) => <StyledDialogRoot {...props} />

Dialog.Overlay = StyledDialogOverlay
Dialog.Close = StyledDialogClose
Dialog.Content = DialogContentComponent
Dialog.Description = StyledDialogDescription
Dialog.Title = StyledDialogTitle
Dialog.Trigger = StyledDialogTrigger

Dialog.displayName = 'Dialog'

export const DialogContent = Dialog.Content
