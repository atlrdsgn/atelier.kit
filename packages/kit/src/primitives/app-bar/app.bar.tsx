import * as React from 'react'

import type {CSS} from '../../theme'
import type {AppbarVariantProps, AppbarSpotVariantProps} from './app.bar.styles'
import {AppbarPrimitive, AppbarSpotComponent} from './app.bar.styles'

/**
 *
 * ..Appbar[Root].
 */
type AppbarPrimitiveProps = AppbarVariantProps & React.HTMLAttributes<HTMLDivElement>
type AppbarProps = AppbarPrimitiveProps & {css?: CSS}

const AppbarComponent = React.forwardRef<HTMLDivElement, AppbarProps>(
  ({...props}, forwardedRef) => {
    return (
      <AppbarPrimitive
        {...props}
        ref={forwardedRef}
        size={props.size}
        color={props.color}
        glass={props.glass}
        border={props.border}
        fixed={props.fixed}
        sticky={props.sticky}
        css={{
          ...props.css,
        }}>
        {props.children}
      </AppbarPrimitive>
    )
  }
)

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
type AppbarSpotPrimitiveProps = AppbarSpotVariantProps & React.HTMLAttributes<HTMLDivElement>
type AppbarSpotProps = AppbarSpotPrimitiveProps & {css?: CSS}

const SpotComponent = React.forwardRef<HTMLDivElement, AppbarSpotProps>(
  ({...props}, forwardedRef) => {
    return (
      <AppbarSpotComponent
        {...props}
        ref={forwardedRef}
        alignment={props.alignment}
        css={{
          ...props.css,
        }}>
        {props.children}
      </AppbarSpotComponent>
    )
  }
)

export const Appbar = AppbarComponent
export const AppbarSpot = SpotComponent

Appbar.displayName = 'Appbar'
AppbarSpot.displayName = 'AppbarSpot'

export type {AppbarProps}
export type {AppbarSpotProps}
