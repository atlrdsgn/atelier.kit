import React from 'react'

import {styled, KitColors, VariantProps} from '../../theme'
import type {baseElementProps} from '../@shared'

// styled.
export const StyledDivider = styled('hr', {
  border: 0,
  backgroundColor: KitColors.gray10,
  variants: {
    orientation: {
      horizontal: {height: 1, width: '100%'},
      vertical: {height: '100%', width: 1, minHeight: '$3'},
    },

    slate: {
      true: {backgroundColor: KitColors.slate10},
    },
    helios: {
      true: {backgroundColor: KitColors.helios5},
    },
    fizz: {
      true: {backgroundColor: KitColors.fizz4},
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    slate: false,
    helios: false,
    fizz: false,
  },
})

// typs.
type DividerVariantProps = VariantProps<typeof StyledDivider>

export interface dividerProps {
  orientation?: 'horizontal' | 'vertical' | string
}

type DividerPrimitiveProps = baseElementProps &
  dividerProps &
  DividerVariantProps &
  React.HTMLAttributes<HTMLHRElement>
type DividerProps = DividerPrimitiveProps

const DividerComponent: React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledDivider>
> = React.forwardRef(({orientation = 'horizontal', ...rest}, forwardedRef) => {
  return (
    <StyledDivider {...rest} ref={forwardedRef} orientation={orientation} css={{...rest.css}} />
  )
})

export const Divide = DividerComponent
Divide.displayName = 'Divide'
