import * as React from 'react'
import type {CSS} from '../../theme'

import {StyledLine} from './line.styles'
import type {LineVariantProps} from './line.styles'

interface lineProps {
  children?: never
  orientation?: 'horizontal' | 'vertical' | string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'max' | string
  weight?: '1' | '2' | '3' | '4' | '5' | string
  color?: 'slate' | 'helios' | 'white' | 'contrast' | string
}

type LineComponentProps = React.HTMLAttributes<HTMLDivElement> & lineProps
type LineProps = LineComponentProps & LineVariantProps & {css?: CSS}

const LineComponent = React.forwardRef<HTMLDivElement, LineProps>(
  ({orientation = 'horizontal', ...props}, forwardedRef) => {
    const {size, weight, color, ...rest} = props
    return (
      <>
        <StyledLine
          {...props}
          ref={forwardedRef}
          data-orientation={orientation}
          color={props.color}
          size={props.size}
          weight={props.weight}
          css={{}}
        />
      </>
    )
  }
)

export {LineComponent}
export type {LineProps}
