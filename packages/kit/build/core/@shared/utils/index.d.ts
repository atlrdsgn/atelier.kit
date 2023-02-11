/// <reference types="react" />
export declare const tuple: <T extends string[]>(...args: T) => T;
export type Partial<T> = {
    [P in keyof T]?: T[P];
};
export type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Exclude<T, U> = T extends U ? never : T;
export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
export type ReplaceProps<Inner extends React.ElementType, P> = Omit<React.ComponentPropsWithRef<Inner>, P> & P;
export { applyDisplayName } from './apply-display-name';
export { useDOMRef } from './use-dom-ref';
//# sourceMappingURL=index.d.ts.map