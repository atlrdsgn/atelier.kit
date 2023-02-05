import * as P from '@radix-ui/react-popover'
import {styled, KitTheme, KitColors, VariantProps} from '../../theme'
import {
  overlayShow,
  slideDownAndFade,
  slideLeftAndFade,
  slideUpAndFade,
  slideRightAndFade,
} from '../@shared/utils/keyframe-animations'

const StyledPopRoot = styled(P.Root, {})

const StyledPopTrigger = styled(P.Trigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: KitTheme.theme.radii.base,
  padding: '6px 15px',
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.medium,
  lineHeight: 1,
  height: 'auto',

  // border: `1px solid ${KitColors.gray8}`,
  border: `1px solid ${KitColors.transparent}`,

  backgroundColor: KitColors.slate3,
  color: KitColors.olive,

  variants: {},
  defaultVariants: {},
})

const baseContentStyles = {
  all: 'unset',

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.medium,
  lineHeight: 1,

  backgroundColor: 'white',
  borderRadius: KitTheme.theme.radii.xl,

  boxShadow: `0px 2px 12px -12px rgba(0, 0, 0, 1)`,
  position: 'relative',
  paddingLeft: 18,
  paddingRight: 18,
  paddingTop: 10,
  paddingBottom: 10,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',

  // animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': {outline: 'none'},
}

const StyledPopContent = styled(P.Content, {
  ...baseContentStyles,

  variants: {
    bordered: {
      true: {
        border: `1.5px solid ${KitColors.gray6}`,
      },
    },
  },
  defaultVariants: {
    bordered: false,
  },

  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': {animationName: slideDownAndFade},
    '&[data-side="right"]': {animationName: slideLeftAndFade},
    '&[data-side="bottom"]': {animationName: slideUpAndFade},
    '&[data-side="left"]': {animationName: slideRightAndFade},
  },
})

export {StyledPopRoot, StyledPopTrigger, StyledPopContent}
export type PopoverContentVariantProps = VariantProps<typeof StyledPopContent>
