import {KitTheme, KitColors, styled, VariantProps} from '../../theme'

const baseSectionStyle = {
  boxSizing: 'border-box',
  display: 'section',
  position: 'relative',
  width: '100%',
  maxWidth: '100vw',
  margin: 0,

  alignItems: 'center',
  justifyContent: 'center',
}

const sectionStyles = styled('div', {
  variants: {
    /**
     *
     * ..sizing
     */
    size: {
      sm: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 0,
      },
      md: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 0,
        paddingRight: 0,
      },
      lg: {
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 0,
        paddingRight: 0,
      },
      xl: {
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },

    /**
     *
     * ..devFlag - throws a border around
     * the component for development purposes
     */
    dev: {
      true: {
        border: `2px solid ${KitColors.slate5}`,
        backgroundColor: KitColors.slate3,
      },
    },

    /**
     *
     * ..isHero?
     */
    hero: {
      true: {
        paddingLeft: 18,
        paddingRight: 18,
        minWidth: '100vw',
        paddingTop: 30,
        paddingBottom: 30,
      },
    },

    /**
     *
     * ..isFluid?
     */
    fluid: {
      true: {
        padding: 0,
        width: '100%',
        maxWidth: '100vw',
        margin: 'auto',
      },
    },

    /**
     *
     * ..isResponsive?
     */
    responsive: {
      true: {
        '@xs': {
          maxWidth: KitTheme.media.xs,
        },
        '@sm': {
          maxWidth: KitTheme.media.sm,
        },
        '@md': {
          maxWidth: KitTheme.media.md,
        },
        '@lg': {
          maxWidth: KitTheme.media.lg,
        },
        '@xl': {
          maxWidth: KitTheme.media.xl,
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    hero: false,
    dev: false,
    fluid: false,
    responsive: false,
  },
})

export const SectionPrimitive = sectionStyles
export type SectionVariantProps = VariantProps<typeof sectionStyles>
