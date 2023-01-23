import * as DialogPrimitive from '@radix-ui/react-dialog'
import {styled, keyframes, KitColors} from '../../theme'
import type {VariantProps} from '../../theme'

import {OverlayStyles} from '../@shared/styles'

const fadeIn = keyframes({
  from: {opacity: '0'},
  to: {opacity: '1'},
})

const fadeOut = keyframes({
  from: {opacity: '1'},
  to: {opacity: '0'},
})

const slideIn = keyframes({
  from: {transform: '$$transformValue'},
  to: {transform: 'translate3d(0,0,0)'},
})

const slideOut = keyframes({
  from: {transform: 'translate3d(0,0,0)'},
  to: {transform: '$$transformValue'},
})

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * MENU_OVERLAY..
 */
const menuOverlay = styled(DialogPrimitive.Overlay, OverlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 0,
  padding: 0,
  maxWidth: '100vw',
  maxHeight: '100vh',

  '&[data-state="open"]': {
    animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
})

const menuRoot = styled(DialogPrimitive.Root, {
  position: 'fixed',
  width: 'auto',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: 0,
  margin: 0,
})

const menuTrigger = styled(DialogPrimitive.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  margin: 0,
  width: 'auto',
})

const StyledContent = styled(DialogPrimitive.Content, {
  position: 'fixed',
  top: 0,
  bottom: 0,
  width: 'auto',
  padding: '3rem',
  margin: 'auto',
  fontFamily: 'inherit',
  color: KitColors.slate12,
  zIndex: 99999,
  backgroundColor: KitColors.slate2,
  background: KitColors.slate2,
  backdropFilter: 'blur(10px)',
  WebKitBackdropFilter: 'blur(10px)',
  boxShadow: `${KitColors.shadowLight} 0 0 22px -10px, ${KitColors.shadowDark} 0 0 25px -15px`,

  willChange: 'transform',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  variants: {
    /**
     *
     * ..which side?
     */
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        transform: 'translate3d(0,-100%,0)',
        width: '400px',
        bottom: 'auto',
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0,
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        width: '100%',
        height: 300,
        bottom: 0,
        top: 'auto',
      },
      left: {
        maxWidth: 600,
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0,

        '@sm': {
          minWidth: '100vw',
          maxWidth: '100vw',
          width: '100%',
        },
      },
    },
  },

  defaultVariants: {
    side: 'right',
  },
})

const styledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: 30,
  right: 20,
})

export const SlideMenuRoot = menuRoot
export const SlideMenuOverlay = menuOverlay
export const SlideMenuTrigger = menuTrigger
export const ContentStyles = StyledContent
export const CloseButton = styledCloseButton

export type SlideMenuVariantProps = VariantProps<typeof ContentStyles>
