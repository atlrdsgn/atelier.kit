import * as React from 'react';
import { KitMode } from './context';
/**
 *
 * using baseClass, darkClass, kitClass for now to infer.
 *
 * maybe try to import kit for baseClass.
 */
export interface ThemeProviderProps {
    defaultTheme?: KitMode;
}
export declare const KitProvider: ({ children, }: React.PropsWithChildren<ThemeProviderProps>) => JSX.Element;
//# sourceMappingURL=provider.d.ts.map