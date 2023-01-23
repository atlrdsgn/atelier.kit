import {css, styled, KitColors} from '../../theme'

const iconBoxStyles = css({
  boxSizing: 'border-box',
  color: 'inherit',

  margin: 'auto',
  width: 24,
  height: 24,
  borderRadius: 6,
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
        color: KitColors.heliotrope6,
      },
      fizz: {
        color: KitColors.fizz6,
      },
      purple: {
        color: KitColors.atlrPurple00,
      },
      lime: {
        color: KitColors.atlrLime00,
      },
    },
  },
  defaultVariants: {
    color: 'default',
    border: false,
  },
})

export const IconBox = styled('div', iconBoxStyles)
