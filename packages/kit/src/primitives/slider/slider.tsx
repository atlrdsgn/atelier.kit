import * as React from 'react'
import type {CSS} from '../../theme'

import {
  StyledSliderRoot,
  StyledSliderTrack,
  StyledSliderThumb,
  StyledSliderRange,
} from './slider.styles'

type SliderRootPrimitiveProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof StyledSliderRoot>
type SliderRootProps = SliderRootPrimitiveProps & {css?: CSS}

const SliderRoot = React.forwardRef<HTMLDivElement, SliderRootProps>((props, ref) => {
  const {children, ...rest} = props
  return (
    <form>
      <StyledSliderRoot {...rest} ref={ref}>
        {children}
      </StyledSliderRoot>
    </form>
  )
})

type SliderTrackPrimitiveProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof StyledSliderTrack>
type SliderTrackProps = SliderTrackPrimitiveProps & {css?: CSS}

const SliderTrackComponent = React.forwardRef<HTMLDivElement, SliderTrackProps>((props, ref) => {
  const {children, ...rest} = props
  return (
    <StyledSliderTrack {...rest} ref={ref}>
      {children}
    </StyledSliderTrack>
  )
})

type SliderThumbPrimitiveProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof StyledSliderThumb>
type SliderThumbProps = SliderThumbPrimitiveProps & {css?: CSS}

const SliderThumbComponent = React.forwardRef<HTMLDivElement, SliderThumbProps>((props, ref) => {
  const {children, ...rest} = props
  return (
    <StyledSliderThumb {...rest} ref={ref}>
      {children}
    </StyledSliderThumb>
  )
})

type SliderRangePrimitiveProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof StyledSliderRange>
type SliderRangeProps = SliderRangePrimitiveProps & {css?: CSS}

const SliderRangeComponent = React.forwardRef<HTMLDivElement, SliderRangeProps>((props, ref) => {
  const {children, ...rest} = props
  return (
    <StyledSliderRange {...rest} ref={ref}>
      {children}
    </StyledSliderRange>
  )
})

export const Slider = SliderRoot
export const SliderTrack = SliderTrackComponent
export const SliderThumb = SliderThumbComponent
export const SliderRange = SliderRangeComponent

Slider.displayName = 'Slider'
SliderTrack.displayName = 'SliderTrack'
SliderThumb.displayName = 'SliderThumb'
SliderRange.displayName = 'SliderRange'

export type {SliderRootProps, SliderTrackProps, SliderThumbProps, SliderRangeProps}

// Path: src/primitives/slider/slider.tsx
