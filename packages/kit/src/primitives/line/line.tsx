import * as React from 'react'
import type {CSS} from '../../theme'

import {Line} from './line.styles'
import type {LineVariantProps} from './line.styles'

interface lineProps {
  children?: never
  orientation?: 'horizontal' | 'vertical' | string
  weight?: '1' | '2' | '3' | '4' | '5' | string
}

type LineComponentProps = React.HTMLAttributes<HTMLDivElement> & lineProps
type LineProps = LineComponentProps & LineVariantProps & {css?: CSS}

const LineComponent = React.forwardRef<React.ElementRef<typeof Line>, LineProps>(
  ({orientation = 'horizontal', ...props}, forwardedRef) => {
    return (
      <>
        <Line
          {...props}
          ref={forwardedRef}
          data-orientation={orientation}
          color={props.color}
          size={props.size}
          weight={props.weight}
          css={{
            ...props.css,
          }}
        />
      </>
    )
  }
)

export {LineComponent}
export type {LineProps}
