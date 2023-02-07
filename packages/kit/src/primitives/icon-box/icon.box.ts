import {css, styled, KitColors, KitTheme} from '../../theme'

const iconBoxStyles = css({
  boxSizing: 'border-box',
  color: 'inherit',

  margin: 'auto',
  width: 28,
  height: 28,
  borderRadius: KitTheme.theme.radii.base,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',

  variants: {
    /**
     *
     *
     * ...border: boolean
     */
    border: {
      true: {
        border: `1px solid ${KitColors.slate7}`,
      },
    },
    /**
     *
     *
     * ...color:
     * 'default' | 'slate' | 'heliotrope'
     * 'fizz' | 'purple' | 'lime' | string
     */
    color: {
      default: {
        color: KitColors.slate11,
      },
      slate: {
        color: KitColors.slate11,
      },
      heliotrope: {
        color: KitColors.heliotrope5,
        backgroundColor: KitColors.slateA4,

        '&:hover': {
          backgroundColor: KitColors.gray3,
        },
      },
      fizz: {
        color: KitColors.fizz6,
      },
      purple: {
        color: KitColors.helios5,
      },
      lime: {
        color: KitColors.fizz4,
      },
    },
  },
  defaultVariants: {
    color: 'default',
    border: false,
  },
})

export const IconBox = styled('div', iconBoxStyles)
