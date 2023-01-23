import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import {
  SlideMenuRoot,
  SlideMenuOverlay,
  SlideMenuTrigger,
  ContentStyles,
  CloseButton,
} from './slide.menu.styles'
import type {CSS} from '../../theme'
import {IconButton} from '../icon-button'
import {CrossIcon} from '../../core/assets'
import type {SlideMenuVariantProps} from './slide.menu.styles'

type SlideMenuPrimitiveProps = {
  children?: React.ReactNode
  side?: 'left' | 'right' | 'top' | 'bottom' | string
}
type SlideMenuProps = React.ComponentProps<typeof ContentStyles> &
  SlideMenuPrimitiveProps &
  SlideMenuVariantProps & {css?: CSS}

const SlideContentComponent = React.forwardRef<
  React.ElementRef<typeof ContentStyles>,
  SlideMenuProps
>(({children, ...props}, forwardedRef) => (
  <DialogPrimitive.Portal>
    <SlideMenuOverlay />

    <ContentStyles {...props} ref={forwardedRef}>
      {children}
      <CloseButton>
        <IconButton>
          <CrossIcon width={'18'} height={'18'} />
        </IconButton>
      </CloseButton>
    </ContentStyles>
  </DialogPrimitive.Portal>
))

export const SlideMenu = SlideMenuRoot
export {SlideMenuTrigger}
export const SlideMenuContent = SlideContentComponent
