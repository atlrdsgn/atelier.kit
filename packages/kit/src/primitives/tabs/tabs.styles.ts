import * as TabsPrimitive from '@radix-ui/react-tabs'

import {KitColors, KitTheme, styled} from '../../theme'

const styledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  margin: 'auto',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  minWidth: '100%',
  backgroundColor: KitColors.slate1,

  fontFamily: KitTheme.theme.fonts.sans,

  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
})

const styledList = styled(TabsPrimitive.List, {
  boxSizing: 'border-box',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  border: `1px solid ${KitColors.slate8}`,
  width: '100%',

  '&:focus': {
    outline: 'none',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
  },
})

const styledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  flexShrink: 0,
  flex: 1,
  fontFamily: 'inherit',
  backgroundColor: KitColors.slate1,
  padding: 0,
  height: '38px',
  width: 'auto',
  display: 'inline-flex',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 13,
  fontWeight: 'bold',
  lineHeight: 1,
  color: KitColors.slate8,

  outline: 'none',
  userSelect: 'none',

  '&:first-child': {borderTopLeftRadius: 8, borderRightWidth: 0},
  '&:last-child': {borderTopRightRadius: 8, borderLeftWidth: 0},
  '&:hover': {color: '$mauve11'},

  '&[data-state="active"]': {
    backgroundColor: KitColors.slate4,
    color: KitColors.slate11,
  },
  '&:focus': {position: 'relative', boxShadow: `0 0 0 2px ${KitColors.helios4}`},
})

const styledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  flex: 1,

  width: 'auto',
  height: '100%',

  margin: '0',
  padding: 20,

  backgroundColor: KitColors.slate1,
  border: `1px solid ${KitColors.slate8}`,
  borderTopWidth: 0,
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: 14,
  fontWeight: 'inherit',
  lineHeight: '1.5',
  letterSpacing: 'inherit',
  color: KitColors.slate12,
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  outline: 'none',
})

export const StyledTabsRoot = styledTabs
export const StyledTabsList = styledList
export const StyledTabsTrigger = styledTrigger
export const StyledTabsContent = styledContent
