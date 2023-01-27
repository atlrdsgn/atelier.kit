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
  fontWeight: KitTheme.theme.fontWeights.semibold,
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
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',

  borderRadius: 'inherit',

  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  variants: {
    pill: {
      true: {
        borderRadius: 9999,
      },
    },
    size: {
      sm: {
        height: 'auto',
        fontSize: KitTheme.theme.fontSizes.xs,
        fontWeight: KitTheme.theme.fontWeights.medium,
        border: `1px solid`,
        borderColor: 'inherit',

        paddingTop: KitTheme.theme.space[1],
        paddingBottom: KitTheme.theme.space[1],
        paddingLeft: KitTheme.theme.space[2],
        paddingRight: KitTheme.theme.space[2],
      },
      md: {
        height: 'auto',
        fontSize: KitTheme.theme.fontSizes.sm,
        fontWeight: KitTheme.theme.fontWeights.medium,
        border: `1.4px solid`,
        borderColor: 'inherit',

        paddingTop: KitTheme.theme.space[1],
        paddingBottom: KitTheme.theme.space[1],
        paddingLeft: KitTheme.theme.space[2],
        paddingRight: KitTheme.theme.space[2],
      },
      lg: {
        height: 'auto',
        fontSize: KitTheme.theme.fontSizes.base,
        fontWeight: KitTheme.theme.fontWeights.medium,
        border: `1.8px solid`,
        borderColor: 'inherit',

        paddingTop: KitTheme.theme.space[2],
        paddingBottom: KitTheme.theme.space[2],
        paddingLeft: KitTheme.theme.space[3],
        paddingRight: KitTheme.theme.space[3],
      },
    },

    color: {
      initial: {
        backgroundColor: KitColors.atelier02,
        borderColor: KitColors.fizz5,
        color: KitColors.slate2,
      },
      subtle: {
        backgroundColor: KitColors.slateA4,
        borderColor: KitColors.heliotrope4,
        color: KitColors.slate9,
      },
      fizz: {
        backgroundColor: KitColors.fizz3,
        borderColor: KitColors.fizz5,
        color: KitColors.fizz10,
      },
      slate: {
        backgroundColor: KitColors.slate3,
        borderColor: KitColors.slate5,
        color: KitColors.slate10,
      },
      helios: {
        backgroundColor: KitColors.helios3,
        borderColor: KitColors.helios5,
        color: KitColors.helios11,
      },
      heliotrope: {
        backgroundColor: KitColors.heliotrope4,
        borderColor: KitColors.heliotrope6,
        color: KitColors.heliotrope1,
      },
      gold: {
        backgroundColor: KitColors.gold3,
        borderColor: KitColors.gold5,
        color: KitColors.gold11,
        '&:focus': {
          boxShadow: `inset 0 0 0 1px ${KitColors.gold8}, 0 0 0 1px ${KitColors.gold8}`,
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'initial',
    pill: true,
  },
})

export type BadgeVariantsProps = VariantProps<typeof badgeStyles>
export const BadgePrimitive = styled(SPAN_TAG, badgeStyles)
