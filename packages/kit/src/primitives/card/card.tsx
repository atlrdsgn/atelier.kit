import * as React from 'react'
import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'

import {CardVariantProps, StyledCard, StyledImageHolder} from './card.styles'

export interface cardProps {
  children: React.ReactNode
  imageSrc?: string
}

type CardPrimitiveProps = baseComponentProps &
  cardProps &
  CardVariantProps &
  React.HTMLAttributes<HTMLDivElement>
type CardProps = CardPrimitiveProps

const CardComponent = ({children, imageSrc, dev = false, ...rest}: CardProps) => {
  return (
    <StyledCard {...rest} dev={dev}>
      <>
        {imageSrc && (
          <StyledImageHolder>
            <img src={imageSrc} />
          </StyledImageHolder>
        )}
      </>

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
