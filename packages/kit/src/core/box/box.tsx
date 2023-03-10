import * as React from 'react'
import type {baseElementProps} from '../@shared'
import {applyDisplayName} from '../@shared/utils'
import {PrimitivePropsWithRef} from '../../primitives'
import {BoxPrimitive} from './box.styles'

type bProps = PrimitivePropsWithRef<typeof BoxPrimitive> & {
  children?: React.ReactNode
}

type BoxPrimitiveProps = baseElementProps & bProps & React.HTMLAttributes<HTMLDivElement>
type BoxProps = BoxPrimitiveProps

const BoxComponent = ({children, css, ...rest}: BoxProps) => (
  <BoxPrimitive
    {...rest}
    css={{
      ...css,
    }}>
    {children}
  </BoxPrimitive>
)

export const Box = BoxComponent

applyDisplayName(Box, 'Box')

export type {BoxProps}
