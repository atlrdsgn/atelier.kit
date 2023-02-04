import type {ThemeScaleObject} from './theme-scale-object'

const hasMoreKeys = (keys: string[]): keys is [string, ...string[]] => {
  if (keys.length) return true

  return false
}

const setThemeScaleValue = <T extends ThemeScaleObject>(
  scale: T,
  [first, ...rest]: [string, ...string[]],
  value: string
): T => {
  const newScale = scale[first] ?? {}

  return {
    ...scale,
    [first]:
      typeof newScale === 'object' && hasMoreKeys(rest)
        ? setThemeScaleValue(newScale, rest, value)
        : value,
  }
}

export {setThemeScaleValue}
