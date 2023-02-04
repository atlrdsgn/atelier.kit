import * as React from 'react'
import {VectorProps} from '../types.svg'

const CloseIcon = React.forwardRef<SVGSVGElement, VectorProps>(
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
          d="M13.5453 11.9993L18.6733 6.8654C19.0992 6.43952 19.0992 5.74529 18.6733 5.31941C18.2474 4.89353 17.5532 4.89353 17.1273 5.31941L11.9993 10.4474L6.8654 5.31941C6.43952 4.89353 5.74529 4.89353 5.31941 5.31941C4.89353 5.74529 4.89353 6.43952 5.31941 6.8654L10.4474 11.9934L5.31941 17.1273C4.89353 17.5532 4.89353 18.2474 5.31941 18.6733C5.5236 18.8775 5.80363 19 6.08365 19C6.36368 19 6.64371 18.895 6.8479 18.6733L11.9934 13.5453L17.1215 18.6733C17.3257 18.8775 17.6057 19 17.8857 19C18.1657 19 18.4458 18.895 18.65 18.6733C19.0758 18.2474 19.0758 17.5532 18.65 17.1273L13.5336 11.9993H13.5453Z"
          fill={color}
        />
      </svg>
    )
  }
)

export {CloseIcon}
