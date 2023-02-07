import * as React from 'react'
import type {baseComponentProps} from '../@shared/types'
import {StyledAvatarRoot, StyledAvatarImage, StyledAvatarFallback} from './avatar.styles'
import type {AvatarVariantProps} from './avatar.styles'

//////////////////// Fallback ////////////////////

type AvatarFallbackPrimitiveProps = baseComponentProps &
  React.ComponentPropsWithRef<typeof StyledAvatarFallback>
type AvatarFallbackProps = AvatarFallbackPrimitiveProps

const AvatarFallbackComponent = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  (props, ref) => {
    const {children, ...rest} = props
    return (
      <StyledAvatarFallback ref={ref} {...rest} asChild={rest.asChild} delayMs={rest.delayMs}>
        {children}
      </StyledAvatarFallback>
    )
  }
)

//////////////////// Image ////////////////////

export interface aviProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
  onLoadingStatusChange?: (isLoading: boolean) => void
}

type AvatarImagePrimitiveProps = baseComponentProps &
  aviProps &
  React.ComponentProps<typeof StyledAvatarImage>
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

///////////////////////// Root /////////////////////////

export interface avatarProps {
  asChild?: boolean
}

type AvatarPrimitiveProps = avatarProps &
  baseComponentProps &
  AvatarVariantProps &
  React.ComponentPropsWithRef<typeof StyledAvatarRoot>
type AvatarProps = AvatarPrimitiveProps

export const Avatar: React.FC<AvatarProps> & {
  Fallback: typeof AvatarFallbackComponent
  Image: typeof AvatarImageComponent
} = (props) => <StyledAvatarRoot {...props} />

/** -------------- exports ----------------- */
Avatar.Fallback = AvatarFallbackComponent
Avatar.Image = AvatarImageComponent

Avatar.displayName = 'Avatar'
/** ----------------------------------------- */
