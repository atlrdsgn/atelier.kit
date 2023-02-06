import {styled} from '../../theme'

const coreDefaults = {
  all: 'unset',
  boxSizing: 'border-box',
  color: 'inherit',
}

const boxStyles = styled('div', {
  ...coreDefaults,
})

export const BoxPrimitive = boxStyles

const spanStyles = styled('div', {})

export const BoxComponent = spanStyles
