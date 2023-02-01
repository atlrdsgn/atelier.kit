import {burn} from './src/burn'
import {fizz} from './src/fizz'
import {helios} from './src/helios'
import {heliotrope} from './src/heliotrope'
import {lime} from './src/lime'
import {mauve} from './src/mauve'
import {moon} from './src/moon'
import {radical} from './src/radical'
import {sky} from './src/sky'
import {slate, slateA} from './src/slate'
import {torch} from './src/torch'
import {gold} from './src/gold'
import {brand} from './src/brand'
import {gray} from './src/gray'

const baseKitThemeColors = {
  white: '#ffffff',
  black: '#000000',
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

  atlr00: brand.atlr00,
  atlr01: brand.atlr01,
  atlr02: brand.atlr02,
  atlr03: brand.atlr03,
  atlr04: brand.atlr04,
  atlr05: brand.atlr05,
  atlr06: brand.atlr06,
  atlr07: brand.atlr07,
  atlr08: brand.atlr08,
  atlr09: brand.atlr09,
  atlr10: brand.atlr10,
  atlr11: brand.atlr11,
  atlr12: brand.atlr12,

  brand1: brand.brand1,
  brand2: brand.brand2,
  brand3: brand.brand3,
  brand4: brand.brand4,
  brand5: brand.brand5,
  brand6: brand.brand6,
  brand7: brand.brand7,
  brand8: brand.brand8,
  brand9: brand.brand9,
  brand10: brand.brand10,
  brand11: brand.brand11,
  brand12: brand.brand12,

  limey: brand.limey,
  purp: brand.purple,

  gray1: gray.gray1,
  gray2: gray.gray2,
  gray3: gray.gray3,
  gray4: gray.gray4,
  gray5: gray.gray5,
  gray6: gray.gray6,
  gray7: gray.gray7,
  gray8: gray.gray8,
  gray9: gray.gray9,
  gray10: gray.gray10,
  gray11: gray.gray11,
  gray12: gray.gray12,

  slate1: slate.slate1,
  slate2: slate.slate2,
  slate3: slate.slate3,
  slate4: slate.slate4,
  slate5: slate.slate5,
  slate6: slate.slate6,
  slate7: slate.slate7,
  slate8: slate.slate8,
  slate9: slate.slate9,
  slate10: slate.slate10,
  slate11: slate.slate11,
  slate12: slate.slate12,

  slateA1: slateA.slateA1,
  slateA2: slateA.slateA2,
  slateA3: slateA.slateA3,
  slateA4: slateA.slateA4,
  slateA5: slateA.slateA5,
  slateA6: slateA.slateA6,
  slateA7: slateA.slateA7,
  slateA8: slateA.slateA8,
  slateA9: slateA.slateA9,
  slateA10: slateA.slateA10,
  slateA11: slateA.slateA11,
  slateA12: slateA.slateA12,

  sky1: sky.sky1,
  sky2: sky.sky2,
  sky3: sky.sky3,
  sky4: sky.sky4,
  sky5: sky.sky5,
  sky6: sky.sky6,
  sky7: sky.sky7,
  sky8: sky.sky8,
  sky9: sky.sky9,
  sky10: sky.sky10,
  sky11: sky.sky11,
  sky12: sky.sky12,
  sky13: sky.sky13,
  sky14: sky.sky14,
  sky15: sky.sky15,

  mauve1: mauve.mauve1,
  mauve2: mauve.mauve2,
  mauve3: mauve.mauve3,
  mauve4: mauve.mauve4,
  mauve5: mauve.mauve5,
  mauve6: mauve.mauve6,
  mauve7: mauve.mauve7,
  mauve8: mauve.mauve8,
  mauve9: mauve.mauve9,
  mauve10: mauve.mauve10,
  mauve11: mauve.mauve11,
  mauve12: mauve.mauve12,
  mauve13: mauve.mauve13,
  mauve14: mauve.mauve14,
  mauve15: mauve.mauve15,

  helios1: helios.helios1,
  helios2: helios.helios2,
  helios3: helios.helios3,
  helios4: helios.helios4,
  helios5: helios.helios5,
  helios6: helios.helios6,
  helios7: helios.helios7,
  helios8: helios.helios8,
  helios9: helios.helios9,
  helios10: helios.helios10,
  helios11: helios.helios11,
  helios12: helios.helios12,
  helios13: helios.helios13,
  helios14: helios.helios14,
  helios15: helios.helios15,

  heliotrope1: heliotrope.heliotrope1,
  heliotrope2: heliotrope.heliotrope2,
  heliotrope3: heliotrope.heliotrope3,
  heliotrope4: heliotrope.heliotrope4,
  heliotrope5: heliotrope.heliotrope5,
  heliotrope6: heliotrope.heliotrope6,
  heliotrope7: heliotrope.heliotrope7,
  heliotrope8: heliotrope.heliotrope8,
  heliotrope9: heliotrope.heliotrope9,
  heliotrope10: heliotrope.heliotrope10,
  heliotrope11: heliotrope.heliotrope11,
  heliotrope12: heliotrope.heliotrope12,

  fizz1: fizz.fizz1,
  fizz2: fizz.fizz2,
  fizz3: fizz.fizz3,
  fizz4: fizz.fizz4,
  fizz5: fizz.fizz5,
  fizz6: fizz.fizz6,
  fizz7: fizz.fizz7,
  fizz8: fizz.fizz8,
  fizz9: fizz.fizz9,
  fizz10: fizz.fizz10,
  fizz11: fizz.fizz11,
  fizz12: fizz.fizz12,

  lime1: lime.lime1,
  lime2: lime.lime2,
  lime3: lime.lime3,
  lime4: lime.lime4,
  lime5: lime.lime5,
  lime6: lime.lime6,
  lime7: lime.lime7,
  lime8: lime.lime8,
  lime9: lime.lime9,
  lime10: lime.lime10,
  lime11: lime.lime11,
  lime12: lime.lime12,

  burn1: burn.burn1,
  burn2: burn.burn2,
  burn3: burn.burn3,
  burn4: burn.burn4,
  burn5: burn.burn5,
  burn6: burn.burn6,
  burn7: burn.burn7,
  burn8: burn.burn8,
  burn9: burn.burn9,
  burn10: burn.burn10,
  burn11: burn.burn11,
  burn12: burn.burn12,

  moon1: moon.moon1,
  moon2: moon.moon2,
  moon3: moon.moon3,
  moon4: moon.moon4,
  moon5: moon.moon5,
  moon6: moon.moon6,
  moon7: moon.moon7,
  moon8: moon.moon8,
  moon9: moon.moon9,
  moon10: moon.moon10,
  moon11: moon.moon11,
  moon12: moon.moon12,

  radical1: radical.radical1,
  radical2: radical.radical2,
  radical3: radical.radical3,
  radical4: radical.radical4,
  radical5: radical.radical5,
  radical6: radical.radical6,
  radical7: radical.radical7,
  radical8: radical.radical8,
  radical9: radical.radical9,
  radical10: radical.radical10,
  radical11: radical.radical11,
  radical12: radical.radical12,

  torch1: torch.torch1,
  torch2: torch.torch2,
  torch3: torch.torch3,
  torch4: torch.torch4,
  torch5: torch.torch5,
  torch6: torch.torch6,
  torch7: torch.torch7,
  torch8: torch.torch8,
  torch9: torch.torch9,
  torch10: torch.torch10,
  torch11: torch.torch11,
  torch12: torch.torch12,

  gold1: gold.gold1,
  gold2: gold.gold2,
  gold3: gold.gold3,
  gold4: gold.gold4,
  gold5: gold.gold5,
  gold6: gold.gold6,
  gold7: gold.gold7,
  gold8: gold.gold8,
  gold9: gold.gold9,
  gold10: gold.gold10,
  gold11: gold.gold11,
  gold12: gold.gold12,
}

export const kitColors = baseKitThemeColors
