import React from 'react'
import type {CSS} from '../../../theme'

// baseComponentProps..
export interface baseElementProps {
  /**
   * Adds the specified classes to the root element of the component.
   * @deprecated Custom CSS is not supported. For other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).
   */
  className?: string
  // we also support data-* attributes, but they are always implicitly allowed by typescript
  // http://www.typescriptlang.org/docs/handbook/jsx.html#attribute-type-checking
  // "Note: If an attribute name is not a valid JS identifier (like a data-* attribute), it is not considered to be an error"
  css?: CSS
}

/**
 * Component helper type to be extended by component types, e.g.:
 * type CustomComponentProps = BaseProps<HTMLDivElement> & { ... }
 *
 * Example use:
 * const CustomComponent = forwardRef<HTMLDivElement, CustomComponentProps>(({className, ...props}, ref) => { ... })
 * // OR:
 * const CustomComponent = forwardRef(({className: CustomComponentProps, ...props}, ref: Ref<HTMLDivElement>) => { ... })
 */
export type BaseProps<T> = {
  className?: string
  id?: string
  ref?: React.Ref<T>
}
