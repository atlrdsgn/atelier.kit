import {KitColors, KitTheme, styled, VariantProps} from '../../theme'

const coreDefaults = {
  boxSizing: 'border-box',
  display: 'flex',
  padding: 0,
  margin: 'auto',
  width: '100%',
  height: 'auto',

  backgroundColor: 'transparent',
  background: 'none',

  color: KitColors.slate12,

  fontFamily: KitTheme.theme.fonts.sans,
  font: KitTheme.theme.fonts.sans,
}

export const flexStyles = styled('div', {
  ...coreDefaults,

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'left',
      },
      center: {
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      1: {
        gap: KitTheme.theme.space[1],
      },
      2: {
        gap: KitTheme.theme.space[2],
      },
      3: {
        gap: KitTheme.theme.space[3],
      },
      4: {
        gap: KitTheme.theme.space[4],
      },
      5: {
        gap: KitTheme.theme.space[5],
      },
      6: {
        gap: KitTheme.theme.space[6],
      },
      7: {
        gap: KitTheme.theme.space[7],
      },
      8: {
        gap: KitTheme.theme.space[8],
      },
      9: {
        gap: KitTheme.theme.space[9],
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
    gap: 2,
  },
})

export const FlexPrimitive = flexStyles
export type FlexVariantProps = VariantProps<typeof flexStyles>
