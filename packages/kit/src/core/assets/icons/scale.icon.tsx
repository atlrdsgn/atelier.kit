import * as React from 'react'
import {VectorProps} from '../types.svg'

const ScaleIcon = React.forwardRef<SVGSVGElement, VectorProps>(
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
          d="M12.2494 11.0057L12.5327 6.97652C12.5327 6.82426 12.4307 6.69542 12.272 6.69542H11.694C11.5466 6.69542 11.4219 6.82426 11.4333 6.97652L11.7166 11.0057C11.7393 11.3337 12.204 11.3337 12.2267 11.0057H12.2494Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M14.6636 7.94868C15.0943 8.5226 14.9696 8.66315 14.3916 8.24149L13.0428 7.28105C12.4647 6.87111 11.5126 6.87111 10.9232 7.28105L9.57443 8.24149C8.99637 8.65144 8.87169 8.5226 9.3024 7.94868L11.2066 5.43044C11.6373 4.85652 12.3514 4.85652 12.7821 5.43044L14.6749 7.94868H14.6636Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M15.0603 17.9748C14.3576 18.0685 14.3122 17.8928 14.947 17.5882L16.4318 16.8738C17.0665 16.5692 17.5539 15.7142 17.4972 14.988L17.3725 13.3014C17.3159 12.5752 17.4859 12.5283 17.7579 13.2077L18.914 16.1593C19.1747 16.8386 18.8233 17.4711 18.1206 17.5648L15.0603 17.9865V17.9748Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.92836 17.9748C9.6311 18.0685 9.67644 17.8928 9.04171 17.5882L7.55689 16.8738C6.92216 16.5692 6.43478 15.7142 6.49146 14.988L6.61613 13.3014C6.67281 12.5752 6.50279 12.5283 6.23076 13.2077L5.08598 16.1593C4.82529 16.8386 5.17666 17.4711 5.8794 17.5648L8.9397 17.9865L8.92836 17.9748Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M13.7342 14.379L16.9758 16.6629C17.1005 16.7449 17.2592 16.7098 17.3385 16.5809L17.6332 16.0539C17.7012 15.925 17.6559 15.7611 17.5199 15.6908L13.9835 13.9339C13.7002 13.7933 13.4735 14.2033 13.7342 14.379Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M10.2545 14.379L7.01284 16.6629C6.88816 16.7449 6.72948 16.7098 6.65014 16.5809L6.35544 16.0539C6.28744 15.925 6.33277 15.7611 6.46879 15.6908L10.0051 13.9339C10.2885 13.7933 10.5152 14.2033 10.2545 14.379Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export {ScaleIcon}

/*
  fill={color}
  fillRule="evenodd"
  clipRule="evenodd"
*/
