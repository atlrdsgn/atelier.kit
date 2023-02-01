export type CSSVariables = Array<[cssVariableName: string, value: string]>

export type ThemeScaleObject = {
  [key: string]: ThemeScaleObject | string
}
