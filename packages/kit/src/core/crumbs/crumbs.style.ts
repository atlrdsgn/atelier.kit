import {KitColors, KitTheme, styled} from '../../theme'
import type {VariantProps} from '../../theme'

export const crumbStyles = styled('nav', {
  fontFamily: KitTheme.theme.fonts.sans,

  ol: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    listStyle: 'none',
  },

  '.divider': {
    color: KitColors.silver11,
    padding: '0 0.5rem',

    '.divider-icon': {
      width: 30,
      height: 30,
    },
  },

  variants: {
    default: {
      true: {},
    },
  },
  defaultVariants: {
    default: true,
  },
})

export const StyledCrumbs = crumbStyles
export type CrumbsVariantProps = VariantProps<typeof crumbStyles>
