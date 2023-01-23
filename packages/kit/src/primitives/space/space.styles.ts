import {KitColors, KitTheme, styled, VariantProps} from '../../theme'

const SpaceStyles = styled('div', {
  all: 'unset',
  display: 'block',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  width: '100%',
  height: 'auto',
  minWidth: '100%',

  variants: {
    size: {
      xs: {
        height: KitTheme.theme.space[1], // 8px
      },
      sm: {
        height: KitTheme.theme.space[3], // 12px
      },
      md: {
        height: KitTheme.theme.space[8], // 32px
      },
      lg: {
        height: KitTheme.theme.space[12], // 60px
      },
      xl: {
        height: KitTheme.theme.space[16], // 100px
      },
      xxl: {
        height: KitTheme.theme.space[20], // 140px
      },
    },
    devFlag: {
      true: {
        backgroundColor: KitColors.flag,
        border: `1px dashed ${KitColors.accentHeliotrope}`,
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    devFlag: false,
  },
})

export const SpacePrimitive = SpaceStyles
export type SpaceVariantProps = VariantProps<typeof SpaceStyles>
