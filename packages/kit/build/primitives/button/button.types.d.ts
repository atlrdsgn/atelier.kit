import * as React from 'react';
interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     *
     * @state props..
     */
    active?: boolean;
    disabled?: boolean;
    after?: React.ReactNode;
    before?: React.ReactNode;
    /**
     *
     * @router props..
     * as = React.ElementType | 'a' | 'button'
     * href = string = url
     * onClick = () => buttonProps.onClick
     */
    asChild?: boolean;
    as?: React.ElementType<any> | 'a' | 'button';
    href?: string;
    onClick?: () => void;
    /**
     *
     * @styling props..
     */
    className?: string;
    /**
     *
     * @param {React.ReactNode} children
     */
    children?: React.ReactNode;
}
export type { buttonProps };
