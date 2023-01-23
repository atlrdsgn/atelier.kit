import {KitColors, KitTheme, styled} from '../../theme'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const cbFlexStyles = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  padding: 0,
  gap: 8,
  background: 'none',
})

const cbStyles = styled(CheckboxPrimitive.Root, {
  // 'button'
  all: 'unset',
  backgroundColor: KitColors.white,
  width: 18,
  height: 18,
  borderRadius: 6,
  border: `1.3px solid ${KitColors.slate9}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // boxShadow: `1px 2px 2px ${KitColors.slateA7}`,
  transition: 'ease-in 200ms',
  '&:hover': {backgroundColor: KitColors.slateA4},
  '&:focus': {boxShadow: `0 0 0 2px black`},

  '&[data-state="checked"]': {
    backgroundColor: KitColors.slate3,
  },
})

const indicatorStyles = styled(CheckboxPrimitive.Indicator, {
  // 'span'
  color: KitColors.heliotrope5,
})

const labelStyles = styled('label', {
  fontFamily: KitTheme.theme.fonts.sans,
  color: KitColors.slate11,
  fontSize: 12,
  fontWeight: KitTheme.theme.fontWeights.semibold,
  lineHeight: 1,
  userSelect: 'none',
})

// Exports
export const StyledCheckboxFlex = cbFlexStyles
export const StyledCheckbox = cbStyles
export const StyledCheckboxIndicator = indicatorStyles
export const StyledCheckboxLabel = labelStyles
