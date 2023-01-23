import * as RadioGroup from '@radix-ui/react-radio-group'
import {KitColors, KitTheme, styled, css} from '../../theme'

const radioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'row',
  gap: 2,
  border: `2px solid ${KitColors.slate10}`,
  padding: 2,
  borderRadius: 999,
  fontFamily: 'inherit',
})

const __variantBaseStyles = css({})

const radioGroupItem = styled(RadioGroup.Item, {
  all: 'unset',
  transition: 'all 250ms ease-in-out',
  zIndex: 2,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  margin: 'auto',
  backgroundColor: 'transparent',
  width: 52,
  height: 25,
  borderRadius: 999,

  variants: {},
  defaultVariants: {},

  '&[data-state="checked"]': {
    backgroundColor: KitColors.helios5,
    color: KitColors.slate1,
  },
  '&[data-state="unchecked"]': {
    backgroundColor: 'transparent',
    color: KitColors.slate11,

    '&:hover': {
      transition: 'all 250ms ease-in-out',
      color: KitColors.slate10,
    },
  },
})

const radioGroupIndicator = styled(RadioGroup.Indicator, {
  transition: 'all 250ms ease-in-out',
  boxSizing: 'border-box',
  userSelect: 'none',
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  margin: 'auto',
  width: '100%',
  height: '100%',
  position: 'relative',
  backgroundColor: KitColors.helios5,
  color: KitColors.slate2,
  borderRadius: 999,

  '&::after': {
    zIndex: 9999,
    content: '""',
    display: 'flex',
    width: 48,
    height: 20,
    borderRadius: 999,
    color: KitColors.slate11,
  },
  '&[data-state="checked"]': {
    backgroundColor: KitColors.helios5,
    color: KitColors.slate1,
  },
  '&[data-state="checked"]::after': {},
})

const label = styled('label', {
  position: 'absolute',
  zIndex: 9999,
  display: 'flex',
  lineHeight: 1,
  margin: 'auto',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,

  // color: KitColors.slate4,

  fontFamily: KitTheme.theme.fonts.system,
  fontSize: 13,
  fontWeight: 500,
})

export const GroupRoot_Radio = radioGroupRoot
export const GroupItem_Radio = radioGroupItem
export const GroupIndicator_Radio = radioGroupIndicator
export const Label_Radio = label
