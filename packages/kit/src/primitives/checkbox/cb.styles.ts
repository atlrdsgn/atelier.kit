import {KitColors, KitTheme, styled, VariantProps} from '../../theme'
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
  '&:focus': {
    boxShadow: `0 0 0 1px ${KitColors.slate6}`,
  },

  '&[data-state="checked"]': {
    backgroundColor: KitColors.heliotrope5,
  },
})

const indicatorStyles = styled(CheckboxPrimitive.Indicator, {
  // 'span' 'icon'
  color: KitColors.fizz4,
  height: 15,
  width: 15,
})

const labelStyles = styled('label', {
  fontFamily: KitTheme.theme.fonts.sans,
  color: KitTheme.theme.colors.gray12,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.semibold,
  lineHeight: 1,
  userSelect: 'none',
})

// Exports
export const StyledCheckboxFlex = cbFlexStyles
export const StyledCheckbox = cbStyles
export const StyledCheckboxIndicator = indicatorStyles
export const StyledCheckboxLabel = labelStyles

export type CheckboxVariantProps = VariantProps<typeof cbStyles>
