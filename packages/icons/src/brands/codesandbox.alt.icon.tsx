import * as React from 'react'

export const CodeSandboxAltIcon = ({
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
      d="M11.9242 4C11.9242 4 11.9688 4 11.9955 4C13.2983 4.76324 14.6099 5.51751 15.9127 6.28075C16.9299 6.87339 17.956 7.45705 19 8.05867V16.1042C16.6801 17.4421 14.3333 18.798 11.9777 20.1538C9.6399 18.8069 7.31995 17.46 5 16.1221V8.04969C5.08923 7.99581 5.17846 7.93295 5.27661 7.87908C6.94519 6.91829 8.61377 5.9575 10.2823 4.98773C10.8356 4.66447 11.3799 4.33224 11.9242 4V4ZM6.38305 12.9255C7.13257 13.3475 7.86425 13.7606 8.62269 14.1826V16.5531C9.50606 17.065 10.3716 17.5678 11.2728 18.0886V12.5124C9.65775 11.5875 8.0427 10.6627 6.39197 9.71984V12.9345L6.38305 12.9255ZM17.5723 9.71984C15.9216 10.6627 14.3155 11.5875 12.7094 12.4945V18.0706C13.6106 17.5498 14.4672 17.047 15.3505 16.5352V14.1736C16.1001 13.7516 16.8317 13.3385 17.5723 12.9255V9.71087V9.71984ZM11.9688 11.2463C13.6017 10.3125 15.2167 9.37863 16.8764 8.42682C15.9841 7.915 15.1275 7.43011 14.2798 6.94523C13.5124 7.38521 12.754 7.81622 11.9955 8.25621C11.2282 7.81622 10.4697 7.37623 9.69344 6.93625C8.82792 7.43909 7.97132 7.93295 7.07011 8.46274C8.73869 9.41455 10.3359 10.3304 11.9598 11.2553L11.9688 11.2463Z"
      fill={color}
    />
  </svg>
)
