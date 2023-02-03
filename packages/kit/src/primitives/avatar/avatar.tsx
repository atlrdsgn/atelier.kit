import * as React from 'react'
import type {baseComponentProps} from '../@shared/types'
import {StyledAvatarRoot, StyledAvatarImage, StyledAvatarFallback} from './avatar.styles'
import type {AvatarVariantProps} from './avatar.styles'

///////////////////////// Avatar /////////////////////////

export interface avatarProps {
  asChild?: boolean
}

type AvatarPrimitiveProps = avatarProps &
  baseComponentProps &
  AvatarVariantProps &
  React.HTMLAttributes<HTMLDivElement> &
  React.ComponentPropsWithRef<typeof StyledAvatarRoot>
type AvatarProps = AvatarPrimitiveProps

const AvatarRootComponent = React.forwardRef<HTMLDivElement, AvatarProps>((props, forwardedRef) => {
  const {children, ...rest} = props
  return (
    <StyledAvatarRoot
      {...rest}
      ref={forwardedRef}
      size={props.size}
      css={{
        ...props.css,
      }}>
      {children}
    </StyledAvatarRoot>
  )
})

//////////////////// Fallback ////////////////////

type fallbackProps = {
  asChild?: boolean
  delayMs?: number
}

type AvatarFallbackPrimitiveProps = baseComponentProps &
  fallbackProps &
  React.HTMLAttributes<HTMLDivElement> &
  React.ComponentPropsWithRef<typeof StyledAvatarFallback>
type AvatarFallbackProps = AvatarFallbackPrimitiveProps

const AvatarFallbackComponent = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  (props, ref) => {
    const {children, ...rest} = props
    return (
      <StyledAvatarFallback ref={ref} {...rest}>
        CH
      </StyledAvatarFallback>
    )
  }
)

//////////////////// Image ////////////////////

type imageProps = {
  asChild?: boolean
  src?: string
  alt?: string
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
  onLoadingStatusChange?: (status: boolean) => void
}

type AvatarImagePrimitiveProps = baseComponentProps &
  imageProps &
  React.HTMLAttributes<HTMLImageElement> &
  React.ComponentPropsWithRef<typeof StyledAvatarImage>
type AvatarImageProps = AvatarImagePrimitiveProps

const AvatarImageComponent = React.forwardRef<
  React.ElementRef<typeof StyledAvatarImage>,
  AvatarImageProps
>((props, ref) => {
  const {children, asChild = false, ...rest} = props
  return (
    <>
      <StyledAvatarImage ref={ref} {...rest} src={props.src} alt={props.alt} asChild={asChild} />
      <AvatarFallbackComponent delayMs={500} />
    </>
  )
})

////////////////////// Exports. /////////////////////////////

export const Avatar = AvatarRootComponent
export const AvatarImage = AvatarImageComponent
