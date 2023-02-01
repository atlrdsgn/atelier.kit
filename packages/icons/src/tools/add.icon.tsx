import * as React from 'react'

export const AddIcon = ({color = 'currentColor', ...props}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    role="img"
    {...props}>
    <path fill={color} d="M11.25 2v9.25H2v1.5h9.25V22h1.5v-9.25H22v-1.5h-9.25V2h-1.5z" />
  </svg>
)
