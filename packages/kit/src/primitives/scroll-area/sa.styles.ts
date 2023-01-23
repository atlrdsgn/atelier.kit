import * as SA from '@radix-ui/react-scroll-area'
import {KitColors, styled} from '../../theme'

const SCROLLBAR_SIZE = 10

const baseScrollAreaStyles = {
  zIndex: 99,
  maxWidth: 280,
  width: 280,
  overflow: 'hidden',
  height: '100vh',
  backgroundColor: 'white',
}

const saRootStyles = styled(SA.Root, {
  ...baseScrollAreaStyles,

  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,

  boxSizing: 'border-box',

  color: KitColors.slate12,

  '&[data-orientation="vertical"]': {},
  '&[data-orientation="horizontal"]': {},

  // custom styles
})

const saViewportStyles = styled(SA.Viewport, {
  position: 'relative',

  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  flexWrap: 'nowrap',
  boxSizing: 'border-box',

  margin: 'auto',
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 16,
  paddingRight: 16,

  backgroundColor: KitColors.slateA7,
  background: KitColors.slateA7,
})

const saScrollbarStyles = styled(SA.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: KitColors.slateA5,
  transition: 'background 160ms ease-out',
  '&:hover': {background: KitColors.slateA9},
  '&[data-orientation="vertical"]': {width: SCROLLBAR_SIZE},
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
})

const saScrollbarThumbStyles = styled(SA.Thumb, {
  flex: 1,
  background: KitColors.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
})

const saCornerStyles = styled(SA.Corner, {
  background: KitColors.slateA5,
})

/**
 *
 * exports.
 */
export const StyledSARoot = saRootStyles

export const StyledSAViewport = saViewportStyles

export const StyledSAScrollbar = saScrollbarStyles

export const StyledSAScrollbarThumb = saScrollbarThumbStyles

export const StyledSACorner = saCornerStyles
