import {css, KitColors, styled} from '../../theme'

const coreDefaults = {
  all: 'unset',
  boxSizing: 'border-box',
  color: KitColors.slate12,
}

const boxStyles = css({
  ...coreDefaults,
})

export const BoxPrimitive = styled('div', boxStyles)
