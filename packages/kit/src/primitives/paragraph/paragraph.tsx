import * as React from 'react'

import {ParagraphContent} from './paragraph.styles'
import type {ParagraphVariantProps} from './paragraph.styles'

import {applyDisplayName} from '../@shared/utils'
import {baseComponentProps} from '../@shared/types'

type paragraphProps = {
  children?: React.ReactNode
}

type ParagraphPrimitiveProps = baseComponentProps &
  paragraphProps &
  ParagraphVariantProps &
  React.HTMLAttributes<HTMLParagraphElement>
type ParagraphProps = ParagraphPrimitiveProps

const ParagraphElement = ({
  children,
  size = 'md',
  color,
  align,
  weight,
  css,
  ...rest
}: ParagraphProps) => (
  <ParagraphContent
    {...rest}
    size={size}
    weight={weight}
    align={align}
    css={{
      ...css,
    }}>
    {children}
  </ParagraphContent>
)

export const Paragraph = ParagraphElement

applyDisplayName(Paragraph, 'Paragraph')

export type {ParagraphProps}
