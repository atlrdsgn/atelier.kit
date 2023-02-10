import {KitColors, KitTheme, css} from '../../theme'
import {Popover} from '@headlessui/react'

export const root = css(Popover, {})

export const overlay = css(Popover.Overlay, {})

export const trigger = css(Popover.Button, {
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
})

export const content = css(Popover.Panel, {
  all: 'unset',

  boxSizing: 'border-box',
  color: KitColors.gray11,
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.medium,
  lineHeight: '1.3',
  textAlign: 'center',

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
  width: '100%',
  maxWidth: 380,
  minWidth: 120,

  '&:focus': {outline: 'none'},
})

export const group = css(Popover.Group, {})

/*

Popover
Popover.Overlay
Popover.Button
Popover.Panel
Popover.Group
*/
