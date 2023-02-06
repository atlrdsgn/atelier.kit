import * as React from 'react';
type Props = {
    id?: string;
    onMount?: () => void;
    children?: React.ReactNode;
    className?: string;
};
export declare const Portal: ({ children, id, onMount, className }: Props) => React.ReactPortal | null;
export {};
//# sourceMappingURL=portal.d.ts.map