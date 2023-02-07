import * as T from '@radix-ui/react-tooltip'
import {styled, KitTheme, KitColors, keyframes, VariantProps} from '../../theme'

const slideUpAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'},
})

const slideRightAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(-2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
})

const slideDownAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(-2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'},
})

const slideLeftAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
})

/** ----------- provider & portal ----------- */
const TipProvider = styled(T.Provider, {})
const TipPortal = styled(T.Portal, {})

/** ---------------- root ----------------- */
const StyledTipRoot = styled(T.Root, {
  all: 'unset',

  display: 'inline-block',
  position: 'relative',
  flexShrink: 0,
  alignContent: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',

  margin: 'auto',
  padding: 0,
})

/** ---------------- trigger ----------------- */
const StyledTipTrigger = styled(T.Trigger, {
  all: 'unset',

  fontFamily: KitTheme.theme.fonts.sans,
  fontWeight: KitTheme.theme.fontWeights.semibold,

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
  transition: 'all 220ms ease-in-out',

  color: KitColors.secondaryGray,
  backgroundColor: 'transparent',
  // border: `1.5px solid ${KitColors.secondaryBorder}`,

  /*
  '&:hover': {
    backgroundColor: KitColors.white,
    borderColor: KitColors.slate10,
    cursor: 'pointer',
  },
  */
})

/** ---------------- content ----------------- */

const baseTrigger = {
  all: 'unset',

  boxSizing: 'border-box',
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.semibold,
  zIndex: 'inherit',
  width: 'fit-content',
  maxWidth: 'max-content',
  minWidth: 'max-content',
  alignContent: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  margin: 'auto',
  /////////////////////
  borderRadius: 50,
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 8,
  paddingRight: 8,
  backgroundColor: KitColors.gray2,
  border: `2px solid ${KitTheme.theme.colors.gray3}`,
  ////////////////////
  padding: '10px 15px',
  lineHeight: 1,
  color: KitColors.gray12,
  boxShadow: `0px 2px 12px -12px rgba(0, 0, 0, 1)`,
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
}

const StyledTipContent = styled(T.Content, {
  ...baseTrigger,

  // export as TipContentVariantProps ..
  variants: {
    size: {
      sm: {
        fontSize: KitTheme.theme.fontSizes.xs,
        fontWeight: KitTheme.theme.fontWeights.medium,
        padding: '6px 10px',
      },
      base: {
        fontSize: KitTheme.theme.fontSizes.sm,
        fontWeight: KitTheme.theme.fontWeights.semibold,
        padding: '10px 15px',
      },
      lg: {
        fontSize: KitTheme.theme.fontSizes.md,
        fontWeight: KitTheme.theme.fontWeights.semibold,
        padding: '15px 20px',
      },
    },
  },

  defaultVariants: {
    size: 'base',
  },

  '&[data-state="open"]': {},

  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': {animationName: slideDownAndFade},
    '&[data-side="right"]': {animationName: slideLeftAndFade},
    '&[data-side="bottom"]': {animationName: slideUpAndFade},
    '&[data-side="left"]': {animationName: slideRightAndFade},
  },

  /**
   * `var(--radix-tooltip-content-transform-origin)` can be accessed.
   *
   */
})

/** ---------------- arrow ----------------- */
const StyledTipArrow = styled(T.Arrow, {
  fill: 'white',
})

/** ---------------- styled exports ----------------- */
export {
  TipProvider,
  TipPortal,
  StyledTipRoot,
  StyledTipTrigger,
  StyledTipContent,
  StyledTipArrow,
  //
}

export type TipContentVariantProps = VariantProps<typeof StyledTipContent>
