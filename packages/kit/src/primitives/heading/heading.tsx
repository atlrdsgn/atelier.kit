import * as React from 'react'

import {HeadingContent} from './heading.styles'
import type {HeadingVariantProps} from './heading.styles'

import type {CSS} from '../../theme'

type headingProps = {
  children?: React.ReactNode
  weight?: 'default' | 'heavy' | 'black' | 'lite' | string
  size?: '1' | '2' | '3' | '4' | '5' | '6' | string
  color?: 'primary' | 'secondary' | 'helios' | 'white' | 'black' | 'fizz' | 'slate' | string
  gradient?: boolean
}

type HeadingPrimitiveProps = headingProps &
  HeadingVariantProps &
  React.HTMLAttributes<HTMLParagraphElement>
type HeadingProps = HeadingPrimitiveProps & {css?: CSS}

const HeadingComponent = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  (props: HeadingProps, ref) => {
    return (
      <HeadingContent
        {...props}
        ref={ref}
        size={props.size}
        weight={props.weight}
        color={props.color}
        css={{
          ...props.css,
        }}>
        {props.children}
      </HeadingContent>
    )
  }
)

export const Heading = React.memo(HeadingComponent)
export type {HeadingProps}

Heading.displayName = 'Heading'
