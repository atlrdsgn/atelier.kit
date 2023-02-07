import * as ToggleGroup from '@radix-ui/react-toggle-group'
import {styled, KitColors, KitTheme} from '../../theme'

const TOGGLE_HEIGHT = 'auto'
const TOGGLE_WIDTH = 'auto'
const TOGGLE_PADDING_X = 12
const TOGGLE_PADDING_Y = 6

const rootStyles = styled(ToggleGroup.Root, {
  all: 'unset',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  margin: 'auto',

  borderRadius: KitTheme.theme.radii.lg,
  backgroundColor: KitColors.transparent,
  boxShadow: `0 2px 10px ${KitColors.blur}`,

  '&[data-orientation="vertical"]': {flexDirection: 'column'},
  '&[data-orientation="horizontal"]': {flexDirection: 'row', margin: 'auto'},
})

const toggleFlexBox = styled('div', {
  border: `2px solid ${KitColors.transparent}`,
  borderRadius: KitTheme.theme.radii.lg,

  backgroundColor: KitColors.transparent,

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
  height: TOGGLE_HEIGHT,
  width: TOGGLE_WIDTH,
  display: 'flex',

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.medium,

  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,

  paddingTop: TOGGLE_PADDING_Y,
  paddingBottom: TOGGLE_PADDING_Y,
  paddingLeft: TOGGLE_PADDING_X,
  paddingRight: TOGGLE_PADDING_X,

  '&:focus': {
    height: TOGGLE_HEIGHT,
    width: TOGGLE_WIDTH,
    paddingTop: TOGGLE_PADDING_Y,
    paddingBottom: TOGGLE_PADDING_Y,
    paddingLeft: TOGGLE_PADDING_X,
    paddingRight: TOGGLE_PADDING_X,
    // boxShadow: `0 0 0 1px ${KitColors.slateA6}`,
  },

  '&:first-child': {
    borderTopLeftRadius: KitTheme.theme.radii.base,
    borderBottomLeftRadius: KitTheme.theme.radii.base,
  },
  '&:last-child': {
    borderTopRightRadius: KitTheme.theme.radii.base,
    borderBottomRightRadius: KitTheme.theme.radii.base,
  },
  '&:hover': {backgroundColor: KitColors.slate5},
  '&[data-state="on"]': {
    backgroundColor: KitColors.helios5,
    color: KitColors.slate2,
  },
  '&[data-state=on]:hover': {backgroundColor: KitColors.helios4},

  /**
   *
   * data-state="off"
   */
  '&[data-state="off"]:hover': {
    cursor: 'pointer',
  },

  '&[data-orientation="vertical"]': {flexDirection: 'column', margin: 'auto'},
  '&[data-orientation="horizontal"]': {flexDirection: 'row', margin: 'auto'},
})

export const ToggleGroupRoot = rootStyles
export const ToggleFlexBox = toggleFlexBox
export const ToggleItem = groupItemStyles
