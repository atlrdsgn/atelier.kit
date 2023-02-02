import type { CSSVariables, ThemeScaleObject } from '../core.types';
declare const generateCSSVariablesMap: (scaleName: string, themeScaleObject: ThemeScaleObject, rootScale?: boolean) => CSSVariables;
/**
 * Given a theme scale object, this returns a modified version with the
 * values converted to CSS vars (ie `var(--scaleName-some-key)`).
 *
 * Returns a tuple of `scale` and `cssVars`.
 *
 * `scale` is an object with the same structure as the input object
 * but values are transformed to:
 * `var(--scaleName-some-key)`.
 *
 * `cssVars` is an array of tuples that contain the variable key and original value:
 * `[['--scaleName-some-key', '#131313']]`
 */
declare const generateThemeCssVariables: <T extends ThemeScaleObject>(scaleName: string, scale: T) => [scale: T, cssVars: CSSVariables];
export { generateCSSVariablesMap, generateThemeCssVariables };
//# sourceMappingURL=generate-css-vars.d.ts.map