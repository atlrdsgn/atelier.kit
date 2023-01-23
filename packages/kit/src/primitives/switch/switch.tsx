import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

import type {CSS} from '../../theme'
import {SwitchRoot, SwitchThumb} from './switch.styles'

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
        <SwitchThumb
          as={SwitchThumb}
          asChild={props.asChild}
          css={{
            ...props.css,
          }}
        />
      </SwitchRoot>
    )
  }
)

export const Switch = React.memo(SwitchComponent)
export type {SwitchProps}

export {SwitchThumb}

Switch.displayName = 'Switch'
