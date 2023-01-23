import * as React from 'react'
import type {PrimitivePropsWithRef} from '../primitive'
import type {CSS} from '../../theme'
import type {FlexVariantProps} from './flex.styles'
import {FlexPrimitive} from './flex.styles'

type flexProps = PrimitivePropsWithRef<typeof FlexPrimitive> & {
  children?: React.ReactNode
  className?: string
}

type FlexPrimitiveProps = flexProps & FlexVariantProps
type FlexProps = FlexPrimitiveProps & {css?: CSS}

const FlexComponent = React.forwardRef<React.ElementRef<typeof FlexPrimitive>, FlexProps>(
  (props, forwardedRef) => {
    return (
      <FlexPrimitive
        {...props}
        ref={forwardedRef}
        className={props.className}
        direction={props.direction}
        align={props.align}
        justify={props.justify}
        wrap={props.wrap}
        gap={props.gap}
        css={{
          ...props.css,
        }}>
        {props.children}
      </FlexPrimitive>
    )
  }
)

export const Flex = FlexComponent
export type {FlexProps}

Flex.displayName = 'Flex'
