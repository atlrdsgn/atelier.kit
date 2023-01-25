import * as SwitchPrimitive from '@radix-ui/react-switch'

import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'
import {PrimitivePropsWithRef} from '../primitive'
import type {SwitchVariantProps} from './switch.styles'
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

type SwitchPrimitiveProps = switchProps &
  baseComponentProps &
  SwitchVariantProps &
  PrimitivePropsWithRef<typeof SwitchPrimitive.Root>
type SwitchProps = SwitchPrimitiveProps

const SwitchComponent = ({
  /**
   *
   * React.ReactNode - always
   */
  children,
  /**
   *
   * Change the component to the HTML tag or custom component of the only child.
   * This will merge the original component props with the props of the supplied
   * element/component and change the underlying DOM node.
   *
   * (boolean)
   */
  asChild,
  /**
   *
   * The state of the switch when it is initially rendered.
   * Use when you do not need to control its state.
   */
  defaultChecked,
  /**
   *
   * The controlled state of the switch.
   * Must be used in conjunction with onCheckedChange.
   */
  checked,
  onCheckedChange,
  /**
   *
   * Whether the switch is disabled.
   */
  disabled,
  /**
   *
   * Whether the switch is required.
   */
  required,
  name,
  value,
  css,
  ...rest
}: SwitchProps) => {
  return (
    <>
      <form>
        <SwitchRoot
          {...rest}
          asChild={asChild}
          defaultChecked={defaultChecked}
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          required={required}
          value={value}
          css={{
            ...css,
          }}>
          {children}
        </SwitchRoot>
      </form>
    </>
  )
}

export const Switch = SwitchComponent
export const SwitchThumb = StyledSwitchThumb
export type {SwitchProps}

applyDisplayName(Switch, 'Switch')
applyDisplayName(SwitchThumb, 'SwitchThumb')
