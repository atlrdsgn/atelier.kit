import {fizz} from './src/fizz'
import {helios} from './src/helios'

import {slateA} from './src/slate'
import {brand} from './src/brand'

import {slateDark} from './src/slate'

const baseKitDarkThemeColors = {
  white: '#000',
  black: '#FFF',
  primaryGray: '#232A2F',
  secondaryGray: '#161D1D',
  accentHeliotrope: helios.helios7,
  accentFizz: fizz.fizz7,
  transparent: 'transparent',

  panel: slateA.slateA2,
  transparentPanel: 'hsl(0 0% 0% / 97%)',
  shadowLight: 'hsl(206 22% 7% / 35%)',
  shadowDark: 'hsl(206 22% 7% / 20%)',

  primaryBorder: `rgba(66, 76, 85, 0.5)`,
  primaryBorderHover: `rgba(66, 76, 85, 0.8)`,
  secondaryBorder: `rgba(40, 40, 40, 0.2)`,

  flag: 'rgba(74, 74, 74, 0.2)',
  blur: 'rgba(240,240,240,0.4)',

  atelier00: '#CEFE71',
  atelier01: '#BEBCA6',
  atelier02: '#A493F8',
  atelier03: '#837E95',

  atlr00: brand.atlrGray1,
  atlr01: brand.atlrGray2,
  atlr02: brand.atlrGray3,
  atlr03: brand.atlrGray4,
  atlr04: brand.atlrGray5,

  atlrLime00: brand.atlrLime1,
  atlrLime01: brand.atlrLime2,

  atlrPurple00: brand.atlrPurple1,
  atlrPurple01: brand.atlrPurple2,

  limey: brand.limey,
  purp: brand.purple,

  slate1: slateDark.slate1,
  slate2: slateDark.slate2,
  slate3: slateDark.slate3,
  slate4: slateDark.slate4,
  slate5: slateDark.slate5,
  slate6: slateDark.slate6,
  slate7: slateDark.slate7,
  slate8: slateDark.slate8,
  slate9: slateDark.slate9,
  slate10: slateDark.slate10,
  slate11: slateDark.slate11,
  slate12: slateDark.slate12,
}

export const kitDarkColors = baseKitDarkThemeColors
