import * as React from 'react'
import {VectorProps} from '../types.svg'

const AtelierIcon = React.forwardRef<SVGSVGElement, VectorProps>(
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
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.52002 14.24H9.99476L10.4267 13.4379H13.802L14.2267 14.24H16.76L13.8606 9.20001H10.4194L7.52002 14.24ZM11.0491 12.2595L12.1181 10.2648L13.1724 12.2595H11.0491Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M15.911 10.88H15.9292C16.3957 10.88 16.7601 10.5135 16.7601 10.0491V10.0309C16.7601 9.56649 16.3957 9.20001 15.9292 9.20001H15.911C15.4445 9.20001 15.0801 9.56649 15.0801 10.0309V10.0491C15.0801 10.5135 15.4445 10.88 15.911 10.88ZM15.2732 10.0491V10.0309C15.2732 9.66446 15.5502 9.37781 15.911 9.37781H15.9292C16.29 9.37781 16.5669 9.66446 16.5669 10.0309V10.0491C16.5669 10.4156 16.29 10.7022 15.9292 10.7022H15.911C15.5502 10.7022 15.2732 10.4156 15.2732 10.0491ZM15.5939 10.4591H15.7834V10.1253H15.9693C16.0567 10.1253 16.0786 10.1471 16.0786 10.2305V10.3539C16.0786 10.4047 16.0932 10.4337 16.115 10.4591H16.3045V10.441C16.2863 10.4228 16.2754 10.3938 16.2754 10.3466V10.2124C16.2754 10.1217 16.228 10.0672 16.1333 10.06C16.2171 10.0309 16.2827 9.96926 16.2827 9.8604V9.84226C16.2827 9.68986 16.1916 9.59915 16.0021 9.59915H15.5939V10.4591ZM15.7834 9.99466V9.74792H15.9656C16.0458 9.74792 16.075 9.78057 16.075 9.8604V9.87854C16.075 9.95111 16.0458 9.99466 15.9656 9.99466H15.7834Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export {AtelierIcon}

/*
  fill={color}
  fillRule="evenodd"
  clipRule="evenodd"
*/
