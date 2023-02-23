import * as React from 'react';
/**
 *
 * const useTheme = () => React.useContext(ThemeContext)
 *
 * KitTheme.light
 * KitTheme.dark
 */
type KitMode = 'auto-theme' | 'light-theme' | 'dark-theme';
type ThemeContextValue = {
    theme: KitMode;
    toggleTheme: any;
};
declare const ThemeContext: React.Context<ThemeContextValue>;
declare const useTheme: () => ThemeContextValue;
export { ThemeContext };
export type { ThemeContextValue };
export type { KitMode };
export declare const themeModeAttribute = "data-theme";
export { useTheme };
//# sourceMappingURL=context.d.ts.map