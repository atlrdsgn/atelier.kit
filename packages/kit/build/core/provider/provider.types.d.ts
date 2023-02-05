import { Languages as Lang } from './localizations';
export type Languages = Lang;
export type Theme = 'auto' | 'soft' | 'midnight';
export type Mode = 'light' | 'dark' | 'auto';
export type CustomTheme = any;
export type All = {
    theme?: Theme;
    mode?: Mode;
    customTheme?: CustomTheme;
    lang?: Languages;
};
//# sourceMappingURL=provider.types.d.ts.map