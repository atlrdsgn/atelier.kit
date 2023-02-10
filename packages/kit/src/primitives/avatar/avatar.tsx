import * as React from 'react'
import type {baseComponentProps} from '../@shared/types'
import {StyledAvatarRoot, StyledAvatarImage, StyledAvatarFallback} from './avatar.styles'
import type {AvatarVariantProps} from './avatar.styles'
import Avatar from 'boring-avatars'

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

//////////////////// BoringAvatar ////////////////////

type randomAvatarProps = {
  name: string
  variant?: AvatarVariantProps
  size?: number
  colors?: string[]
  square?: boolean
}

type RandomAvatarPrimitiveProps = baseComponentProps &
  randomAvatarProps &
  React.ComponentPropsWithRef<typeof Avatar>
type RandomAvatarProps = RandomAvatarPrimitiveProps

const AvatarRandomComponent = ({
  size = 45,
  variant = 'marble',
  colors = ['#A78BFA', '#FBCFE8', '#88D7B6'],
  square = false,
  ...rest
}: RandomAvatarProps) => {
  return (
    <Avatar
      size={size}
      variant={variant}
      colors={colors}
      square={square}
      css={{...rest.css}}
      {...rest}
    />
  )
}

///////////////////////// Root /////////////////////////

export interface avatarProps {
  asChild?: boolean
}

type AvatarPrimitiveProps = avatarProps &
  baseComponentProps &
  AvatarVariantProps &
  React.ComponentPropsWithRef<typeof StyledAvatarRoot>
type AvatarProps = AvatarPrimitiveProps

export const Avi: React.FC<AvatarProps> & {
  Fallback: typeof AvatarFallbackComponent
  Image: typeof AvatarImageComponent
  Random: typeof AvatarRandomComponent
} = (props) => <StyledAvatarRoot {...props} />

/** -------------- exports ----------------- */
Avi.Fallback = AvatarFallbackComponent
Avi.Image = AvatarImageComponent
Avi.Random = AvatarRandomComponent

Avi.displayName = 'Avatar'
/** ----------------------------------------- */
