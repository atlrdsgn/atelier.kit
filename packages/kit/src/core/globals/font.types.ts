type FontType = 'base' | 'mono' | 'pragmatica'

export const baseFace = 'Inter'
export const monoFace = 'EK Modena Mono'
export const pragmaticaFace = 'Pragmatica'

const fontFamilies: Record<FontType, string> = {
  base: `${baseFace}, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
  mono: `${monoFace}, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  pragmatica: `${pragmaticaFace}, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, sans-serif`,
}

const fontSizes = [16, 18, 24, 36, 72, 96, 144]

const lineHeights = [1, 1.2, 1.4]

const letterSpacings = [-0.05, -0.025, -0.0125]

export {fontFamilies, fontSizes, lineHeights, letterSpacings}
