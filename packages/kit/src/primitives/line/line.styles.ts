import * as Separator from '@radix-ui/react-separator'
import {css, KitMedia, KitColors, styled, VariantProps} from '../../theme'

const coreStyles = {
  all: 'unset',
  border: 'none',
  width: 'auto',
}

const lineRoot = styled(Separator.Root, {
  ...coreStyles,

  backgroundColor: KitColors.slate6,
  '&[data-orientation=horizontal]': {height: 1, width: '100%'},
  '&[data-orientation=vertical]': {height: '100%', width: 1},

  variants: {
    size: {
      /**
       *
       * ...use pixel values as max-widths.
       */
      px50: {maxWidth: 50},
      px100: {maxWidth: 100},

      /**
       *
       * ...use breakpoints as max-widths.
       */
      xs: {maxWidth: KitMedia.xs},
      sm: {maxWidth: KitMedia.sm},
      md: {maxWidth: KitMedia.md},
      lg: {maxWidth: KitMedia.lg},
      xl: {maxWidth: KitMedia.xl},

      max: {width: '100%'},
    },
    color: {
      slate: {backgroundColor: KitColors.slate6},
      helios: {backgroundColor: KitColors.helios7},
      white: {backgroundColor: KitColors.white},
      contrast: {backgroundColor: KitColors.slate12},
    },
    weight: {
      '1': {height: 1},
      '2': {height: 2},
      '3': {height: 3},
      '4': {height: 4},
      '5': {height: 5},
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'slate',
    weight: '1',
  },
})

export const Line = lineRoot
export const StyledLine = styled(Separator.Root, lineRoot)
export type LineVariantProps = VariantProps<typeof lineRoot>
