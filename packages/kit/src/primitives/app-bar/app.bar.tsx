import * as React from 'react'
import type {AppbarVariantProps, AppbarSpotVariantProps} from './app.bar.styles'
import type {baseComponentProps} from '../@shared/types'
import {AppbarPrimitive, AppbarSpotComponent} from './app.bar.styles'

/**
 *
 * ..Appbar[Root].
 */
type AppbarPrimitiveProps = baseComponentProps &
  AppbarVariantProps &
  React.HTMLAttributes<HTMLDivElement>
type AppbarProps = AppbarPrimitiveProps

/*
    size: 'sm',
    color: 'transparent',
    border: true,
    fixed: false,
    sticky: false,
    glass: false,
    */

const AppbarComponent = ({
  children,

  color = 'transparent',
  glass = false,
  size = 'sm',
  border = true,
  fixed = false,
  sticky = false,
  css,
  ...rest
}: AppbarProps) => {
  // const AppbarComponent = React.forwardRef<HTMLDivElement, AppbarProps>(
  // ({...props}, forwardedRef) => {
  return (
    <AppbarPrimitive
      {...rest}
      size={size}
      color={color}
      glass={glass}
      border={border}
      fixed={fixed}
      sticky={sticky}
      css={{
        ...css,
      }}>
      {children}
    </AppbarPrimitive>
  )
}

/**
 *
 * ..Appbar[Spot].
 * this element helps with placement of items in the Appbar Primitive.
 *
 * the alignment prop has 3 options:
 * ..left _ 'flex-end'
 * ..center _ 'center'
 * ..right _ 'flex-start'
 */
type AppbarSpotPrimitiveProps = baseComponentProps &
  AppbarSpotVariantProps &
  React.HTMLAttributes<HTMLDivElement>
type AppbarSpotProps = AppbarSpotPrimitiveProps

const Spot = ({children, alignment = 'center', css, ...rest}: AppbarSpotProps) => {
  return (
    <AppbarSpotComponent
      {...rest}
      alignment={alignment}
      css={{
        ...css,
      }}>
      {children}
    </AppbarSpotComponent>
  )
}

export const Appbar: React.FC<AppbarProps> & {
  Spot: typeof Spot
} = (props) => <AppbarComponent {...props} />

Appbar.Spot = Spot

Appbar.displayName = 'Appbar'

export type {AppbarProps}
export type {AppbarSpotProps}
