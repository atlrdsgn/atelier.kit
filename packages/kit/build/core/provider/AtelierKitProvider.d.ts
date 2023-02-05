import React from 'react';
import { CustomTheme, Mode, Theme } from './provider.types';
type ContextValue = {
    theme?: Theme;
    mode?: Mode;
    customTheme?: CustomTheme;
};
type AtelierKitThemeProviderProps = {
    children?: React.ReactNode;
    theme?: Theme;
    mode?: Mode;
    customTheme?: CustomTheme;
};
export declare const AtelierKitThemeProvider: React.FC<AtelierKitThemeProviderProps>;
export declare const useThemeContext: () => ContextValue;
export {};
//# sourceMappingURL=AtelierKitProvider.d.ts.map