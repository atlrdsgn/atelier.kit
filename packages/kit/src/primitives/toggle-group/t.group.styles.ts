import * as ToggleGroup from '@radix-ui/react-toggle-group'
import {styled, KitColors, KitTheme} from '../../theme'

const rootStyles = styled(ToggleGroup.Root, {
  all: 'unset',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  margin: 'auto',

  backgroundColor: KitColors.transparent,
  boxShadow: `0 2px 10px ${KitColors.blur}`,

  // '&:focus': {outline: 'none'},
  '&[data-orientation="vertical"]': {flexDirection: 'column'},
  '&[data-orientation="horizontal"]': {flexDirection: 'row', margin: 'auto'},
})

const toggleFlexBox = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'auto',
  margin: 'auto',
  padding: 0,

  rowGap: 1,
  columnGap: 1,

  width: 'auto',
})

const groupItemStyles = styled(ToggleGroup.Item, {
  all: 'unset',
  position: 'relative',
  backgroundColor: KitColors.slate4,
  color: KitColors.slate12,
  height: 32,
  width: 42,
  display: 'flex',
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: 12,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,

  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 8,
  paddingRight: 8,

  '&:focus': {
    height: 32,
    width: 42,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    boxShadow: `0 0 0 1px ${KitColors.slateA6}`,
  },

  '&:first-child': {
    borderTopLeftRadius: KitTheme.theme.radii.sm,
    borderBottomLeftRadius: KitTheme.theme.radii.sm,
  },
  '&:last-child': {
    borderTopRightRadius: KitTheme.theme.radii.sm,
    borderBottomRightRadius: KitTheme.theme.radii.sm,
  },
  '&:hover': {backgroundColor: KitColors.slate5},
  '&[data-state=on]': {
    backgroundColor: KitColors.heliotrope5,
    color: KitColors.slate2,
  },
  '&[data-state=on]:hover': {backgroundColor: KitColors.heliotrope6},

  '&[data-orientation="vertical"]': {flexDirection: 'column', margin: 'auto'},
  '&[data-orientation="horizontal"]': {flexDirection: 'row', margin: 'auto'},
})

export const ToggleGroupRoot = rootStyles
export const ToggleFlexBox = toggleFlexBox
export const ToggleItem = groupItemStyles
