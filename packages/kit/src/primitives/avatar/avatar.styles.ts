import * as Avi from '@radix-ui/react-avatar'
import Avatar from 'boring-avatars'
import {styled, KitColors, KitTheme} from '../../theme'
import type {VariantProps} from '../../theme'

const aviBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',

  borderRadius: KitTheme.theme.radii.pill,
  backgroundColor: KitColors.slate4,
}

const styledAvatarRoot = styled(Avi.Root, {
  ...aviBase,

  border: `2px solid ${KitColors.fizz4}`,

  width: '',
  height: '',

  variants: {
    size: {
      xs: {
        width: 35,
        height: 35,
      },
      sm: {
        width: 45,
        height: 45,
      },
      md: {
        width: 55,
        height: 55,
      },
      lg: {
        width: 65,
        height: 65,
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

const styledAvatarImage = styled(Avi.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: KitTheme.theme.radii.pill,
})

const styledAvatarFallback = styled(Avi.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: KitColors.slate9,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

const styledBoringAvatar = styled(Avatar, {})

export const StyledAvatarRoot = styledAvatarRoot
export const StyledAvatarImage = styledAvatarImage
export const StyledAvatarFallback = styledAvatarFallback

export type AvatarVariantProps = VariantProps<typeof StyledAvatarRoot>
