type FontType = 'base' | 'mono' | 'kit' | 'pragmatica'

export const baseFace = 'Inter'
export const monoFace = 'EK Modena Mono'
export const kitFace = 'Kit'
export const pragFace = 'Pragmatica'

const lineHeights = [1, 1.2, 1.4]
const letterSpacings = [-0.05, -0.025, -0.0125]
const faceWeights = [400, 500, 600, 700, 800, 900]

const fontFams: Record<FontType, string> = {
  base: `${baseFace}, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
  mono: `${monoFace}, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  kit: `${kitFace}, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  pragmatica: `${pragFace}, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, sans-serif`,
}

export {
  lineHeights,
  //
  letterSpacings,
  //
  faceWeights,
  //
  fontFams,
}
