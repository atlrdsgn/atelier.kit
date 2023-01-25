import * as React from 'react'
import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'
import {PrimitivePropsWithRef} from '../primitive'
import {BoxPrimitive} from './box.styles'

type bProps = PrimitivePropsWithRef<typeof BoxPrimitive> & {
  children?: React.ReactNode
  as?: React.ElementType<any> | keyof JSX.IntrinsicElements | React.ComponentType<any>
}

type BoxPrimitiveProps = baseComponentProps & bProps & React.HTMLAttributes<HTMLDivElement>
type BoxProps = BoxPrimitiveProps

const BoxComponent = ({children, as = 'div', css, ...props}: BoxPrimitiveProps) => (
  <BoxPrimitive
    {...props}
    as={as}
    css={{
      ...css,
    }}>
    {children}
  </BoxPrimitive>
)

export const Box = BoxComponent

applyDisplayName(Box, 'Box')

export type {BoxProps}
