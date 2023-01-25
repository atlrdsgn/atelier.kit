import * as SwitchPrimitive from '@radix-ui/react-switch'
import {KitColors, styled, VariantProps} from '../../theme'

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 38,
  height: 20,
  backgroundColor: KitColors.slate5,
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `inset 0 0px 1px 0.7px ${KitColors.slate7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': {boxShadow: `0 0 0 2px ${KitColors.fizz4}`},
  '&[data-state="checked"]': {backgroundColor: KitColors.slate5},

  variants: {},
  defaultVariants: {},
})

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 17,
  height: 17,
  backgroundColor: KitColors.slate8,
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${KitColors.slate6}`,
  transition: 'transform 100ms',
  transform: 'translateX(1.5px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(19.5px)',
    backgroundColor: KitColors.helios5,
  },
})

export const SwitchRoot = StyledSwitch
export const StyledSwitchThumb = StyledThumb

export type SwitchVariantProps = VariantProps<typeof StyledSwitch>
