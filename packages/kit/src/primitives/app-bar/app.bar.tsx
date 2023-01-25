import * as React from 'react'

import {applyDisplayName} from '../@shared/utils'
import type {CSS} from '../../theme'
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
type AppbarProps = AppbarPrimitiveProps & {css?: CSS}

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
type AppbarSpotProps = AppbarSpotPrimitiveProps & {css?: CSS}

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

export const Appbar = AppbarComponent
export const AppbarSpot = Spot

applyDisplayName(Appbar, 'Appbar')
applyDisplayName(AppbarSpot, 'AppbarSpot')

export type {AppbarProps}
export type {AppbarSpotProps}
