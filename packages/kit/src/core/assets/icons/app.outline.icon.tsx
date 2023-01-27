import * as React from 'react'
import {VectorProps} from '../types.svg'

const AppOutlineIcon = React.forwardRef<SVGSVGElement, VectorProps>(
  ({color = 'currentColor', ...props}, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}>
        <path
          d="M9.9 19H14.1C17.6 19 19 17.6 19 14.1V9.9C19 6.4 17.6 5 14.1 5H9.9C6.4 5 5 6.4 5 9.9V14.1C5 17.6 6.4 19 9.9 19Z"
          stroke={color}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )
  }
)

export {AppOutlineIcon}

/*
  fill={color}
  fillRule="evenodd"
  clipRule="evenodd"
*/
