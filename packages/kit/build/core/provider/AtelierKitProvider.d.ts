import * as React from 'react';
import { CustomTheme, Mode, Theme, All } from './provider.types';
type ContextValue = {
    theme?: Theme;
    mode?: Mode;
    autoTheme?: All['autoTheme'];
    lightTheme?: All['lightTheme'];
    darkTheme?: All['darkTheme'];
    customTheme?: CustomTheme;
};
type AtelierKitThemeProviderProps = {
    children?: React.ReactNode;
    theme?: Theme;
    mode?: Mode;
    autoTheme?: All['autoTheme'];
    lightTheme?: All['lightTheme'];
    darkTheme?: All['darkTheme'];
    customTheme?: CustomTheme;
};
export declare const AtelierKitThemeProvider: React.FC<AtelierKitThemeProviderProps>;
export declare const useThemeContext: () => ContextValue;
export {};
/**
 *
 * usage:
 *
 * So perfect case scenario, you have a theme provider at the root of your app.
 * We can then pass the theme value and the mode value to the provider, like so:
 *
 * <AtelierKitThemeProvider theme="light" mode="light" autoTheme>
 */
//# sourceMappingURL=AtelierKitProvider.d.ts.map