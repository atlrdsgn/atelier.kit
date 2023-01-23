import * as React from 'react'
import {CSS} from '../../theme'
import {PrimitivePropsWithRef} from '../primitive'
import {BoxPrimitive} from './box.styles'

type bProps = PrimitivePropsWithRef<typeof BoxPrimitive> & {
  children?: React.ReactNode
  as?: React.ElementType<any> | keyof JSX.IntrinsicElements | React.ComponentType<any>
}

type BoxPrimitiveProps = bProps & React.HTMLAttributes<HTMLDivElement>
type BoxProps = BoxPrimitiveProps & {css?: CSS}

const BoxComponent = React.forwardRef<HTMLDivElement, BoxProps>(({...props}, ref) => {
  return (
    <BoxPrimitive
      {...props}
      ref={ref}
      as={props.as}
      css={{
        ...props.css,
      }}>
      {props.children}
    </BoxPrimitive>
  )
})

export const Box = BoxComponent

Box.displayName = 'Box'

export type {BoxProps}
