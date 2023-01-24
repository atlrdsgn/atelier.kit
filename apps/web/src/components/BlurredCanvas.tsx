import {styled, KitColors} from 'atlr.kit'

export const BlurredCanvas = styled('div', {
  zIndex: 1,
  backgroundColor: KitColors.blur,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  saturate: '220%',
  boxSizing: 'border-box',
  position: 'fixed',
  top: '0',
  width: '100vw',
  height: '100vh',
  margin: 'auto',
  padding: '0',
})
