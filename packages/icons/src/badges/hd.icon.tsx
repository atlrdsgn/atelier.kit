import * as React from 'react'

export const HDIcon = ({color = 'currentColor', ...props}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    role="img"
    {...props}>
    <path
      d="M4 9H5.78437V11.4854H9.48057V9H11.2649V15.6278H9.48057V12.7424H5.78437V15.6278H4V9Z"
      fill={color}
    />
    <path
      d="M12.5253 9H16.6181C18.8698 9 19.8469 10.3141 19.8469 12.3139C19.8469 14.3136 18.8273 15.6278 16.7738 15.6278H12.5253V9ZM14.3097 14.3708H16.2923C17.4819 14.3708 18.0059 13.6709 18.0059 12.2567C18.0059 11.0283 17.4961 10.2713 16.1224 10.2713H14.2955V14.3708H14.3097Z"
      fill={color}
    />
  </svg>
)
