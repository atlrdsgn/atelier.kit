import {KitColors, KitTheme, css, styled, VariantProps} from '../../theme'

const SPAN_TAG = 'span'

const badgeStyles = css({
  unset: 'all',
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: KitTheme.theme.fonts.sans,
  fontWeight: 'bold',
  justifyContent: 'center',
  lineHeight: '1',
  verticalAlign: 'middle',
  outline: 'none',
  padding: 'auto',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  textAlign: 'center',
  margin: 'auto',

  backgroundColor: KitColors.slate6,
  color: KitColors.slate11,
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',

  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  variants: {
    size: {
      '1': {
        borderRadius: 6,
        height: 'auto',
        fontSize: KitTheme.theme.fontSizes.xs,
        padding: KitTheme.theme.space[1],
        fontWeight: 'bold',
        border: `1px solid`,
      },
      '2': {
        borderRadius: 7,
        height: 'auto',
        fontSize: KitTheme.theme.fontSizes.sm,
        padding: KitTheme.theme.space[1],
        border: `1.5px solid`,
      },
      '3': {
        borderRadius: 9,
        height: 'auto',
        fontSize: KitTheme.theme.fontSizes.md,
        padding: KitTheme.theme.space[2],
        border: `2px solid`,
      },
    },
    color: {
      ghostPill: {
        backgroundColor: KitColors.atelier02,
        color: KitColors.slate11,
        borderColor: KitColors.slate5,
        borderRadius: 9999,
        paddingLeft: 8,
        paddingRight: 8,
      },
      fizz: {
        borderColor: KitColors.fizz5,
        color: KitColors.fizz11,
        backgroundColor: KitColors.fizz3,
      },
      slate: {
        color: KitColors.slate10,
        borderColor: KitColors.slate5,
        backgroundColor: KitColors.slate3,
      },
      helios: {
        borderColor: KitColors.helios5,
        backgroundColor: KitColors.helios3,
        color: KitColors.helios11,
      },
      gold: {
        backgroundColor: KitColors.gold3,
        border: `1px solid ${KitColors.gold5}`,
        color: KitColors.gold11,
        '&:focus': {
          boxShadow: `inset 0 0 0 1px ${KitColors.gold8}, 0 0 0 1px ${KitColors.gold8}`,
        },
      },
    },

    subtle: {
      true: {
        backgroundColor: KitColors.slate4,
        color: KitColors.slate10,
      },
    },
  },
  defaultVariants: {
    size: '1',
    color: 'slate',

    subtle: false,
  },
})

export type BadgeVariantsProps = VariantProps<typeof badgeStyles>
export const BadgePrimitive = styled(SPAN_TAG, badgeStyles)
