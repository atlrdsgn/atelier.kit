import * as D from '@radix-ui/react-dialog'
import {styled, keyframes, KitTheme, KitColors} from '../../theme'
import {fadeIn, fadeOut, overlayShow} from '../@shared/utils/keyframe-animations'

const DIALOG_Z_INDEX = KitTheme.theme.zIndices[0]
const CONTENT_ON_SCREEN = `translate3d(-50%, -50%, 0)`
const CONTENT_OFF_SCREEN = `translate3d(-50%, 50vh, 0)`

//////////////////// keyframes ////////////////////

const slideIn = keyframes({
  '0%': {transform: CONTENT_OFF_SCREEN},
  '100%': {transform: CONTENT_ON_SCREEN},
})
const slideOut = keyframes({
  '0%': {transform: CONTENT_ON_SCREEN},
  '100%': {transform: CONTENT_OFF_SCREEN},
})

//////////////////// root ////////////////////

const StyledDialogRoot = styled(D.Root, {})

//////////////////// overlay ////////////////////

const StyledDialogOverlay = styled(D.Overlay, 'div', {
  width: '100vw',
  height: '100vh',

  position: 'fixed',
  overflowY: 'auto',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  backgroundColor: KitColors.slateA9,
  zIndex: DIALOG_Z_INDEX,

  '@allowMotion': {
    '&[data-state="open"]': {
      animation: `${fadeIn} 250ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 550ms ease-out`,
    },
  },
})

//////////////////// content ////////////////////

const StyledDialogClose = styled(D.Close, {
  position: 'absolute',
  top: 16,
  left: 16,
  width: 24,
  height: 24,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: KitColors.slateA1,
  border: `1px solid ${KitColors.transparent}`,
  borderRadius: KitTheme.theme.radii.base,

  outline: 'none',

  transition: 'background-color 150ms ease-out',
  '&:hover': {
    backgroundColor: KitColors.slateA5,
    border: `1px solid ${KitColors.gray10}`,
  },
  '&:focus': {
    outline: 'none',
  },
})

const contentBase = {
  boxSizing: 'border-box',
  left: '50%',
  maxWidth: '90vw',
  maxHeight: '90vh',
  overflowY: 'auto',

  padding: '2rem',
  position: 'fixed',
  top: '50%',
  transform: CONTENT_ON_SCREEN,
  zIndex: DIALOG_Z_INDEX,

  fontFamily: KitTheme.theme.fonts.sans,
}

const StyledDialogContent = styled(D.Content, 'div', {
  ...contentBase,

  backgroundColor: KitColors.slate1,
  borderRadius: KitTheme.theme.radii['2xl'],
  boxShadow: '',

  '&:focus': {
    outline: 'none',
  },
  '@allowMotion': {
    '&[data-state="open"]': {
      animation: `${slideIn} 550ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideOut} 550ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
  },
  variants: {
    size: {
      xs: {width: '380px'},
      sm: {width: '480px'},
      md: {width: '600px'},
      lg: {width: '800px'},
      xl: {width: '1100px'},
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

///////////////////// title /////////////////////

const StyledDialogTitle = styled(D.Title, 'div', {
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes['2xl'],
  fontWeight: KitTheme.theme.fontWeights.semibold,

  color: KitColors.gray12,

  textAlign: 'left',

  marginTop: 40,
  marginBottom: 10,
  lineHeight: 'normal',
})

//////////////////// description ////////////////////

const StyledDialogDescription = styled(D.Description, 'div', {
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.base,
  fontWeight: KitTheme.theme.fontWeights.normal,

  color: KitColors.bandicoot,

  textAlign: 'left',

  marginBottom: 20,
  lineHeight: '1.3',
})

//////////////////// trigger ////////////////////

const StyledDialogTrigger = styled(D.Trigger, {
  all: 'unset',

  display: 'inline-flex',
  position: 'relative',
  flexShrink: 0,

  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',

  lineHeight: 'normal',

  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // transitions.
  transition: 'all 220ms ease-in-out',

  // default..
  fontFamily: KitTheme.theme.fonts.sans,
  fontWeight: KitTheme.theme.fontWeights.semibold,
  fontSize: KitTheme.theme.fontSizes.sm,
  borderRadius: KitTheme.theme.radii.md,
  padding: '6px 14px',

  color: KitColors.secondaryGray,
  backgroundColor: KitColors.white,
  background: KitColors.white,
  border: `1.5px solid ${KitColors.secondaryBorder}`,

  '&:focus': {boxShadow: `0 0 0 2px black`},

  '&:hover': {
    backgroundColor: KitColors.white,
    borderColor: KitColors.slate10,
    cursor: 'pointer',
  },
})

//////////////////// exports ////////////////////
export {StyledDialogRoot, StyledDialogOverlay, StyledDialogClose, StyledDialogContent}
export {StyledDialogTitle, StyledDialogDescription, StyledDialogTrigger}
export type DialogPrimitiveProps = React.ComponentProps<typeof StyledDialogRoot>
