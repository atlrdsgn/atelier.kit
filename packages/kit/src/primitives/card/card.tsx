import * as React from 'react'
import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'

import {CardVariantProps, StyledCard, StyledImageHolder} from './card.styles'

export interface cardProps {
  children: React.ReactNode
}

export interface imgProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string

  alt?: string

  width?: number

  height?: number

  style?: React.CSSProperties

  className?: string

  loading?: 'eager' | 'lazy'

  sizes?: string
}

type CardPrimitiveProps = baseComponentProps &
  CardVariantProps &
  React.HTMLAttributes<HTMLDivElement>
type CardProps = CardPrimitiveProps & imgProps

const CardComponent = ({children, src, dev = false, ...rest}: CardProps) => {
  return (
    <StyledCard {...rest} dev={dev}>
      <>{src && <StyledImageHolder src={src} />}</>

      {/* <!-- CardTitle and CTA will be added here --> */}
      {children}
    </StyledCard>
  )
}

export const Card = CardComponent
export const CardImage = StyledImageHolder

applyDisplayName(Card, 'Card')
applyDisplayName(CardImage, 'CardImage')

export type {CardProps}
