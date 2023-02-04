import {keyframes} from '../../../theme'

export const slideUpAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'},
})
export const slideRightAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(-2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
})
export const slideDownAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(-2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'},
})
export const slideLeftAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
})

export const fadeIn = keyframes({
  '0%': {opacity: 0},
  '100%': {opacity: 1},
})
export const fadeOut = keyframes({
  '0%': {opacity: 1},
  '100%': {opacity: 0},
})

export const slideInLeft = keyframes({
  '0%': {transform: 'translateX(-100%)'},
  '100%': {transform: 'translateX(0)'},
})

export const slideOutLeft = keyframes({
  '0%': {transform: 'translateX(0)'},
  '100%': {transform: 'translateX(-100%)'},
})
