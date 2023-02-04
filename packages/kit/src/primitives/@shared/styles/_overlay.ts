import {keyframes, styled, css, KitColors} from '../../../theme'

export const overlayShow = keyframes({
  '0%': {opacity: 0},
  '100%': {opacity: 1},
})

export const overlayStyles = css({
  backgroundColor: KitColors.slateA9,
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const OverlayStyles = styled('div', overlayStyles)
