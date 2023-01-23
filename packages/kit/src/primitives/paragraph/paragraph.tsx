import * as React from 'react'

import {ParagraphContent} from './paragraph.styles'
import type {ParagraphVariantProps} from './paragraph.styles'

import type {CSS} from '../../theme'

type paragraphProps = {
  children?: React.ReactNode
  size?: string
  weight?: string
  align?: string
}

type ParagraphPrimitiveProps = paragraphProps &
  ParagraphVariantProps &
  React.HTMLAttributes<HTMLParagraphElement>
type ParagraphProps = ParagraphPrimitiveProps & {css?: CSS}

const ParagraphComponent = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props: ParagraphProps, ref) => {
    return (
      <ParagraphContent
        {...props}
        ref={ref}
        size={props.size}
        weight={props.weight}
        align={props.align}
        css={{
          ...props.css,
        }}>
        {props.children}
      </ParagraphContent>
    )
  }
)

export const Paragraph = React.memo(ParagraphComponent)
export type {ParagraphProps}
