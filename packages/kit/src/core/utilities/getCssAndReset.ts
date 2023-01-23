import {getCssText, reset} from '../../theme'
import {coreStyles} from '../globals/global.styles'
import {cssReset} from '../globals/reset'

const getCssScript = () => {
  const css = getCssText()

  reset()
  cssReset()
  coreStyles()

  return css
}

export const getCssAndReset = getCssScript
