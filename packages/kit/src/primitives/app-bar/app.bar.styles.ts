import {KitColors, KitTheme, css, styled, VariantProps} from '../../theme'

const baseBarStyles = {
  boxSizing: 'border-box',
  zIndex: '9999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignContent: 'center',
  width: '100%',
  height: 'auto',
  fontFamily: KitTheme.theme.fonts.sans,
  color: 'inherit',
}

const appbarSpot = styled('div', {
  display: 'flex',
  width: '100%',
  height: 'auto',
  padding: 0,

  variants: {
    alignment: {
      start: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      center: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      end: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      },
    },
  },
})

/**
 *
 *
 *
 * Main Appbar
 */
const appbar = css({
  ...baseBarStyles,

  /**
   *
   * @variants...
   *
   */
  variants: {
    /**
     *
     * ..sizing
     */
    size: {
      sm: {
        paddingTop: 8,
        paddingBottom: 8,
      },
      md: {
        paddingTop: 12,
        paddingBottom: 12,
      },
      lg: {
        paddingTop: 20,
        paddingBottom: 20,
      },
    },

    /**
     *
     * ..isFixed
     */
    fixed: {
      true: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        paddingLeft: 12,
        paddingRight: 12,
      },
    },

    /**
     *
     * ..isSticky
     */
    sticky: {
      true: {
        position: 'sticky',
        width: '100%',
        top: 0,
        left: 0,
      },
    },

    /**
     *
     * ..isBlurred
     */
    glass: {
      true: {
        backgroundColor: 'transparent',
        backdropFilter: 'saturate(140%) blur(14px)',
        WebkitBackdropFilter: 'saturate(140%) blur(14px)',
      },
    },

    /**
     *
     * ..hasBorder
     */
    border: {
      // boolean
      true: {
        borderBottom: '1px solid',
        borderColor: KitColors.slateA6,
      },
    },

    /**
     *
     * ..backgroundColor
     */
    color: {
      transparent: {
        backgroundColor: 'transparent',
        color: KitColors.slate10,
      },
      loContrast: {
        backgroundColor: KitColors.fizz2,
      },
      plain: {
        backgroundColor: KitColors.slate2,
      },
      accent: {
        backgroundColor: KitColors.helios4,
      },
    },
  },

  /**
   *
   * @defaultVariants...
   *
   */
  defaultVariants: {
    size: 'sm',
    color: 'transparent',
    border: true,
    fixed: false,
    sticky: false,
    glass: false,
  },
})

export const AppbarPrimitive = styled(appbar, {})
export const AppbarSpotComponent = appbarSpot

export type AppbarVariantProps = VariantProps<typeof appbar>
export type AppbarSpotVariantProps = VariantProps<typeof appbarSpot>
