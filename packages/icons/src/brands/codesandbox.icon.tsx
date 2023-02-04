import * as React from 'react'

export const CodeSandboxIcon = ({
  color = 'currentColor',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
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
      d="M20 20H4V4H20V20ZM18.3267 5.7C17.56 5.60667 6.1 5.63333 5.68667 5.72667V18.2667C5.74667 18.3 5.78 18.3267 5.81333 18.3267C9.83333 18.3333 13.8467 18.34 17.8667 18.34C17.9933 18.34 18.1133 18.3267 18.24 18.3133C18.2533 18.3133 18.2667 18.2933 18.28 18.28C18.2933 18.2667 18.3067 18.2533 18.3267 18.2333V5.7Z"
      fill={color}
    />
  </svg>
)
