import {KitColors, styled} from '../../theme'
import {Text} from '../text'

const ANCHOR_TAG = 'a'

const linkStyles = styled(ANCHOR_TAG, {
  alignItems: 'center',
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: KitColors.slate8,
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },
  [`& ${Text}`]: {
    color: 'inherit',
  },
  variants: {
    inherit: {
      true: {
        color: 'inherit',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
      },
    },
  },
  defaultVariants: {
    inherit: true,
  },
})

export const Link = linkStyles
