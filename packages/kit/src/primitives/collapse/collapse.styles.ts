import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import {styled} from '../../theme'

/*
const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});
const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});
 */

const StyledCollapseRoot = styled(CollapsiblePrimitive.Root, {
  width: '100%',
})

const StyledCollapseContent = styled(CollapsiblePrimitive.Content, {
  height: 'auto',
  margin: 0,
  padding: 0,
  // '&[data-state="open"]': { animation: `${open} 400ms ease-out` },
  // '&[data-state="closed"]': { animation: `${close} 400ms ease-out` },
})

export const CRoot = StyledCollapseRoot
export const CTrigger = CollapsiblePrimitive.Trigger
export const CContent = StyledCollapseContent
