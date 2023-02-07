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
import {StyledSlider} from './sm.styles'
import {baseComponentProps} from '../@shared/types'

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

/////////// SlideMenuRoot ///////////

type sliderProps = {
  children?: React.ReactNode
  placement?: 'left' | 'right' | 'top' | 'bottom' | string
  mask?: boolean
}

type SliderMenuPrimitiveProps = baseComponentProps &
  sliderProps &
  React.ComponentProps<typeof StyledSlider>
type SliderMenuProps = SliderMenuPrimitiveProps

const SlideMenuRootComponent = ({
  children,
  placement = 'right',
  mask = false,
  ...props
}: SliderMenuProps) => {
  return <StyledSlider {...props}>{children}</StyledSlider>
}

export const SlideMenu = SlideMenuRoot
export {SlideMenuTrigger}
export const SlideMenuContent = SlideContentComponent
