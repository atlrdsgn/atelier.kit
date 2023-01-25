import * as React from 'react'
import {ContainerPrimitive} from './container.styles'
import type {ContainerVariantProps} from './container.styles'
import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'

interface containerProps {
  children?: React.ReactNode
  optimal?: boolean
  align?: 'left' | 'center' | 'right' | string
}

type ContainerPrimitiveProps = baseComponentProps & containerProps & ContainerVariantProps
type ContainerProps = ContainerPrimitiveProps

const ContainerComponent = ({
  children,
  optimal = false,
  align = 'center',
  size = 'full',
  dev = false,
  css,
  ...rest
}: ContainerPrimitiveProps) => (
  <ContainerPrimitive
    {...rest}
    /**
     *
     * optimal width prop..
     */
    optimal={optimal}
    /**
     *
     * align | left, center, right
     */
    align={align}
    /**
     *
     * size | sm, md, lg, xl, full
     */
    size={size}
    /**
     *
     * throws a devFlag - small border around the container
     */
    dev={dev}
    css={{
      ...css,
    }}>
    {children}
  </ContainerPrimitive>
)

export const Container = ContainerComponent

applyDisplayName(Container, 'Container')

export type {ContainerProps}
