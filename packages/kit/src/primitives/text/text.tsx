import * as React from 'react'

import type {CSS} from '../../theme'
import {TextPrimitive} from './text.styles'
import type {TextVariantProps} from './text.styles'

type textProps = {
  children?: React.ReactNode
  mono?: boolean

  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'heavy' | 'lite' | 'superlite' | string
  color?: 'primary' | 'secondary' | 'slate' | string

  className?: string

  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | string
}

type TextPrimitiveProps = textProps & TextVariantProps & React.HTMLAttributes<HTMLParagraphElement>
type TextProps = TextPrimitiveProps & {css?: CSS}

const TextComponent = React.forwardRef<HTMLParagraphElement, TextProps>((props, forwardedRef) => {
  return (
    <TextPrimitive
      {...props}
      ref={forwardedRef}
      className={props.className}
      size={props.size}
      weight={props.weight}
      color={props.color}
      align={props.align}
      mono={props.mono}
      css={{
        ...props.css,
      }}>
      {props.children}
    </TextPrimitive>
  )
})

export const Text = React.memo(TextComponent)
export type {TextProps}

Text.displayName = 'Text'
