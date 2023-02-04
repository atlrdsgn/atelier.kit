import * as P from '@radix-ui/react-popover'
import * as React from 'react'
import {baseComponentProps} from '../@shared/types'
import {StyledPopRoot, StyledPopContent, StyledPopTrigger} from './pop.styles'

type PopContentPrimitiveProps = baseComponentProps & React.ComponentProps<typeof StyledPopContent>
export type PopContentProps = PopContentPrimitiveProps

const PopContent = React.forwardRef<HTMLDivElement, PopContentProps>(
  ({children, ...props}, forwardedRef) => {
    return (
      <StyledPopContent {...props} ref={forwardedRef} css={{...props.css}}>
        {children}
      </StyledPopContent>
    )
  }
)

type PopoverProps = React.ComponentProps<typeof StyledPopRoot>

export const Popover: React.FC<PopoverProps> & {
  Trigger: typeof P.Trigger
  Content: typeof PopContent
  Portal: typeof P.Portal
} = (props) => <StyledPopRoot {...props} />

Popover.Content = PopContent
Popover.Portal = P.Portal
Popover.Trigger = StyledPopTrigger

Popover.displayName = 'Popover'
