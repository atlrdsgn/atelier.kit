import * as React from 'react'

export const ALogoIcon = ({color = 'currentColor', ...props}: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.31992 15.84H8.56232L9.30286 14.4649H15.0891L15.8171 15.84H20.1599L15.1895 7.20001H9.29031L4.31992 15.84ZM10.3697 12.4449L12.2023 9.02536L14.0097 12.4449H10.3697Z"
      fill={color}
    />
    <path
      d="M18.7043 10.08H18.7355C19.5352 10.08 20.1599 9.45176 20.1599 8.65556V8.62446C20.1599 7.82826 19.5352 7.20001 18.7355 7.20001H18.7043C17.9046 7.20001 17.2799 7.82826 17.2799 8.62446V8.65556C17.2799 9.45176 17.9046 10.08 18.7043 10.08ZM17.611 8.65556V8.62446C17.611 7.99621 18.0858 7.50481 18.7043 7.50481H18.7355C19.354 7.50481 19.8288 7.99621 19.8288 8.62446V8.65556C19.8288 9.28381 19.354 9.77522 18.7355 9.77522H18.7043C18.0858 9.77522 17.611 9.28381 17.611 8.65556ZM18.1608 9.35846H18.4856V8.78619H18.8042C18.9542 8.78619 18.9917 8.82351 18.9917 8.96658V9.17807C18.9917 9.26515 19.0167 9.31492 19.0541 9.35846H19.379V9.32736C19.3478 9.29625 19.329 9.24649 19.329 9.16563V8.93548C19.329 8.77997 19.2478 8.68666 19.0854 8.67422C19.2291 8.62446 19.3415 8.51872 19.3415 8.33211V8.30101C19.3415 8.03975 19.1853 7.88425 18.8605 7.88425H18.1608V9.35846ZM18.4856 8.56226V8.13928H18.798C18.9354 8.13928 18.9854 8.19526 18.9854 8.33211V8.36321C18.9854 8.48761 18.9354 8.56226 18.798 8.56226H18.4856Z"
      fill={color}
    />
  </svg>
)