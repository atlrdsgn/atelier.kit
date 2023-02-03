import * as React from 'react'
import {motion} from 'framer-motion'
import {StyledSwitchThumb} from './switch.styles'

import * as SwitchPrimitive from '@radix-ui/react-switch'

import {baseComponentProps} from '../@shared/types'
import {PrimitivePropsWithRef} from '../primitive'
import type {SwitchVariantProps} from './switch.styles'

/**
 * This is an example of layout animations in Framer Motion 2.
 *
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

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
  PrimitivePropsWithRef<typeof SwitchPrimitive.Thumb>
type SwitchProps = SwitchPrimitiveProps

const FramerThumb = ({
  /**
   *
   * React.ReactNode - always
   */
  children,
  asChild = true,
  onClick = () => {},
  css,
  ...rest
}: SwitchProps) => {
  const [isOn, setIsOn] = React.useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <>
      <StyledSwitchThumb
        {...rest}
        asChild={asChild}
        data-isOn={isOn}
        onClick={toggleSwitch}
        css={{
          ...css,
        }}>
        <motion.div layout className="switch" transition={spring} />
      </StyledSwitchThumb>
    </>
  )
}

export const FramerSwitchThumb = FramerThumb
