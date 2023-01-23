import {KitColors, KitTheme, css, styled, VariantProps} from '../../theme'

const container = css({
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,

  margin: 'auto',

  paddingLeft: KitTheme.theme.space[5],
  paddingRight: KitTheme.theme.space[5],
  paddingTop: KitTheme.theme.space[2],
  paddingBottom: KitTheme.theme.space[2],

  variants: {
    /**
     *
     * ..sizing
     */
    size: {
      sm: {
        width: '100%',
        maxWidth: '430px',
      },
      md: {
        width: '100%',
        maxWidth: 715,
      },
      lg: {
        width: '100%',
        maxWidth: 1145,
      },
      xl: {
        width: '100%',
        maxWidth: 1440,
      },
      full: {
        width: '100%',
        minWidth: 'none',
      },
    },

    /**
     *
     * ..alignment
     */
    align: {
      left: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
      },
      center: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
      right: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
      },
    },

    /**
     *
     * ..retina
     */
    optimal: {
      true: {
        width: '100%',
        maxWidth: 528,
      },
    },

    /**
     *
     * ..devFlag
     */
    dev: {
      true: {
        border: `1px dashed ${KitColors.heliotrope5}`,
        borderRadius: 6,
      },
    },
  },
  defaultVariants: {
    optimal: false,
    size: 'md',
    align: 'left',
    dev: false,
  },
})

export const ContainerPrimitive = styled('div', container)
export type ContainerVariantProps = VariantProps<typeof container>
