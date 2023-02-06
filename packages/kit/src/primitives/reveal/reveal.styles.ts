import * as React from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import {KitColors, KitTheme, styled} from '../../theme'

const revealRoot = styled(Collapsible.Root, {
  width: '100%',
  height: 'auto',
})

const revealTrigger = styled(Collapsible.Trigger, {
  width: 'auto',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  outline: 'none',
  appearance: 'none',
  background: KitColors.slate3,
  padding: '0.3rem 0.8rem',
  margin: 'auto',

  borderRadius: KitTheme.theme.radii['md'],
  border: `1px solid ${KitColors.slate4}`,

  '&:hover': {
    background: KitColors.slate4,
  },

  color: KitColors.slate11,
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes['sm'],
  fontWeight: KitTheme.theme.fontWeights.normal,
})

const revealContent = styled(Collapsible.Content, {
  width: 'auto',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[data-state="open"]': {},
  '&[data-state="closed"]': {
    display: 'none',
  },

  backgroundColor: KitColors.transparent,
  color: KitColors.slate11,

  // border: `1px solid ${KitColors.slate4}`,
  borderRadius: KitTheme.theme.radii.base,

  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 4,
  paddingRight: 4,
  marginTop: 3,
  margin: 'auto',

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.sm,
  fontWeight: KitTheme.theme.fontWeights.normal,
})

export const StyledRevealRoot = revealRoot
export const StyledRevealTrigger = revealTrigger
export const StyledRevealContent = revealContent
