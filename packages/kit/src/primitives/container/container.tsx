import * as React from 'react'
import {CSS} from '../../theme'
import {ContainerPrimitive} from './container.styles'
import type {ContainerVariantProps} from './container.styles'

interface containerProps {
  children?: React.ReactNode
  optimal?: boolean
  align?: 'left' | 'center' | 'right' | string
}

type ContainerPrimitiveProps = containerProps & ContainerVariantProps
type ContainerProps = ContainerPrimitiveProps & {css?: CSS}

const ContainerComponent = React.forwardRef<
  React.ElementRef<typeof ContainerPrimitive>,
  ContainerProps
>((props, forwardedRef) => {
  return (
    <ContainerPrimitive
      {...props}
      ref={forwardedRef}
      /**
       *
       * optimal width prop..
       */
      optimal={props.optimal}
      /**
       *
       * align | left, center, right
       */
      align={props.align}
      /**
       *
       * size | sm, md, lg, xl, full
       */
      size={props.size}
      /**
       *
       * throws a devFlag - small border around the container
       */
      dev={props.dev}
      css={{
        ...props.css,
      }}>
      {props.children}
    </ContainerPrimitive>
  )
})

export const Container = ContainerComponent

Container.displayName = 'Container'

export type {ContainerProps}
