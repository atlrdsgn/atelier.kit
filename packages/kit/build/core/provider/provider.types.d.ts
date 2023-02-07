import { Languages as Lang } from './localizations';
export type Languages = Lang;
import { autoTheme, lightTheme, darkTheme } from '../../theme';
export type Theme = 'auto' | 'soft' | 'midnight';
export type themeContext = 'auto' | 'light-theme' | 'dark-theme';
export type Mode = 'auto' | 'light' | 'dark';
export type CustomTheme = any;
export type All = {
    theme?: Theme;
    context?: themeContext;
    autoTheme?: boolean | typeof autoTheme;
    lightTheme?: boolean | typeof lightTheme;
    darkTheme?: boolean | typeof darkTheme;
    mode?: Mode;
    customTheme?: CustomTheme;
    lang?: Languages;
};
//# sourceMappingURL=provider.types.d.ts.map