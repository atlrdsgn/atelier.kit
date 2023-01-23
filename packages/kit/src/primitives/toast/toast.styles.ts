import * as ToastPrimitive from '@radix-ui/react-toast'
import {keyframes} from '@stitches/react'

import {KitColors, KitTheme, styled} from '../../theme'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': {opacity: 1},
  '100%': {opacity: 0},
})

const slideIn = keyframes({
  from: {transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`},
  to: {transform: 'translateX(0)'},
})

const swipeOut = keyframes({
  from: {transform: 'translateX(var(--radix-toast-swipe-end-x))'},
  to: {transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`},
})

const styledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: '400px',
  maxWidth: '100vw',
  margin: '0',
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const provider = styled(ToastPrimitive.Provider, {})

const styledToast = styled(ToastPrimitive.Root, {
  backgroundColor: KitColors.blur,
  backdropFilter: 'saturate(200%) blur(14px)',
  WebkitBackdropFilter: 'saturate(200%) blur(14px)',
  borderRadius: '16px',
  border: `2px solid ${KitColors.slate5}`,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 5px 28px -30px, hsl(206 22% 7% / 20%) 0px 10px 10px -15px',
  padding: 16,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

const styledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: 15,
  fontWeight: 600,
  color: KitColors.slate11,
  '&:hover': {
    cursor: 'grab',
  },
})

const styledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: KitColors.slate10,
  fontFamily: KitTheme.theme.fonts.mono,
  fontSize: 13,
  fontWeight: 500,
  lineHeight: 1.3,
  '&:hover': {
    cursor: 'grab',
  },
})

const styledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
  borderRadius: KitTheme.theme.radii.base,
  border: `1px solid ${KitColors.slate5}`,
  padding: '5px 10px',
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: 13,
  fontWeight: 600,
  color: KitColors.slate11,
  '&:hover': {
    cursor: 'pointer',
  },
})

/** -------------------------------------------------------------- *
 * *----------------------  TOAST EXPORTS  ----------------------- *
 * *-------------------------------------------------------------- */
export const ToastViewport = styledViewport
export const ToastProvider = provider
export const ToastComponent = styledToast
/** -------------------------------------------------------------- */
export const ToastTitle = styledTitle
export const ToastDescription = styledDescription
/** -------------------------------------------------------------- */
export const ToastAction = styledAction
export const ToastClose = ToastPrimitive.Close
