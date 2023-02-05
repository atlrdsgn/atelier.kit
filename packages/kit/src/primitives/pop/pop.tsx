import * as P from '@radix-ui/react-popover'
import * as React from 'react'
import type {baseComponentProps} from '../@shared/types'
import type {PopoverContentVariantProps} from './pop.styles'
import {StyledPopRoot, StyledPopContent, StyledPopTrigger} from './pop.styles'

///////////////////////////// root /////////////////////////////

type popProps = {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
}

type PopoverPrimitiveProps = baseComponentProps & popProps & React.ComponentProps<typeof P.Root>
type PopoverProps = PopoverPrimitiveProps

const PopoverRootComponent = ({children, modal = false, ...rest}: PopoverProps) => (
  <StyledPopRoot
    {...rest}
    defaultOpen={rest.defaultOpen}
    open={rest.open}
    onOpenChange={rest.onOpenChange}
    modal={modal}
    css={{
      ...rest.css,
    }}>
    {children}
  </StyledPopRoot>
)

///////////////////////////// content /////////////////////////////

type popContentProps = {
  asChild?: boolean
  onOpenAutoFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onCloseAutoFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onEscapeKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void
  onFocusOutside?: (event: React.FocusEvent<HTMLElement>) => void
  onInteractOutside?: (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void
  forceMount?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  align?: 'start' | 'center' | 'end'
  alignOffset?: number
  avoidCollisions?: boolean
  stick?: boolean
}

type PopContentPrimitiveProps = popContentProps &
  baseComponentProps &
  PopoverContentVariantProps &
  React.ComponentProps<typeof StyledPopContent>
export type PopContentProps = PopContentPrimitiveProps

const PopContent = React.forwardRef<HTMLDivElement, PopContentProps>(
  ({children, side = 'bottom', sideOffset = 12, sticky = 'partial', ...props}, forwardedRef) => {
    return (
      <P.Portal>
        <StyledPopContent
          {...props}
          ref={forwardedRef}
          side={side}
          sideOffset={sideOffset}
          sticky={sticky}
          bordered={props.bordered}
          css={{...props.css}}>
          {children}
        </StyledPopContent>
      </P.Portal>
    )
  }
)

export const Popover: React.FC<PopoverProps> & {
  Trigger: typeof StyledPopTrigger
  Anchor: typeof P.Anchor
  Content: typeof PopContent
  Close: typeof P.Close
  Portal: typeof P.Portal
} = (props) => <PopoverRootComponent {...props} />

Popover.Trigger = StyledPopTrigger
Popover.Anchor = P.Anchor
Popover.Content = PopContent
Popover.Close = P.Close
Popover.Portal = P.Portal

Popover.displayName = 'Popover'

/*


export default () => (
  <Popover.Root>
    <Popover.Trigger />
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content>
        <Popover.Close />
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
*/
