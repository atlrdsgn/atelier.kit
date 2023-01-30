import {KitColors, KitTheme, styled, VariantProps} from '../../theme'

const baseCardStyles = {
  all: 'unset',

  width: '100%',
  maxWidth: 320,
  height: 'auto',

  border: `2px solid ${KitColors.transparent}`,
  borderRadius: KitTheme.theme.radii['2xl'],
  boxShadow: `0 4px 8px 1px ${KitColors.slateA5}`,

  cursor: 'grab',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * root.
 */
const StyledCard = styled('div', {
  ...baseCardStyles,

  /**
   *
   * variants.
   */
  variants: {
    dev: {
      true: {
        border: `2px solid ${KitColors.helios5}`,
      },
    },
  },
  defaultVariants: {
    dev: false,
  },
})

/**
 *
 *
 *
 *
 *
 *
 *
 *
 * image holder.
 */
const StyledImageHolder = styled('img', {
  width: '100%',

  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,

  objectFit: 'cover',
  objectPosition: 'center',

  borderTopLeftRadius: KitTheme.theme.radii['2xl'],
  borderTopRightRadius: KitTheme.theme.radii['2xl'],
  borderBottomLeftRadius: KitTheme.theme.radii.sm,
  borderBottomRightRadius: KitTheme.theme.radii.sm,

  pointerEvents: 'none',
  userSelect: 'none',
})

export {StyledCard}
export {StyledImageHolder}
export type CardVariantProps = VariantProps<typeof StyledCard>
