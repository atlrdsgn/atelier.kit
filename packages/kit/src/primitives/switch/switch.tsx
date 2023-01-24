import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

import type {CSS} from '../../theme'
import {SwitchRoot, StyledSwitchThumb} from './switch.styles'

type switchProps = {
  asChild?: boolean
  defaultChecked?: boolean
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
}

type SwitchPrimitiveProps = switchProps & React.ComponentProps<typeof SwitchPrimitive.Root>
type SwitchProps = SwitchPrimitiveProps & {css?: CSS}

const SwitchComponent = React.forwardRef<React.ElementRef<typeof SwitchRoot>, SwitchProps>(
  ({...props}, forwardedRef) => {
    return (
      <>
        <form>
          <SwitchRoot
            {...props}
            ref={forwardedRef}
            asChild={props.asChild}
            defaultChecked={props.defaultChecked}
            checked={props.checked}
            onCheckedChange={props.onCheckedChange}
            disabled={props.disabled}
            required={props.required}
            name={props.name}
            value={props.value}
            css={{
              ...props.css,
            }}>
            {props.children}
          </SwitchRoot>
        </form>
      </>
    )
  }
)

export const Switch = SwitchComponent
export const SwitchThumb = StyledSwitchThumb
export type {SwitchProps}

Switch.displayName = 'Switch'
SwitchThumb.displayName = 'SwitchThumb'
