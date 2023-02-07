import {atelierTheme, lightTheme} from '../../theme/base'

const TestStyled = atelierTheme('div', {
  boxSizing: 'border-box',
  height: 50,
  width: 50,
  position: 'relative',

  backgroundColor: lightTheme.colors.fizz6,
})

export const TestBox = TestStyled
