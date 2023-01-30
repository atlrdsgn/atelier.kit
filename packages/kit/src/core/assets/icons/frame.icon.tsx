import * as React from 'react'
import {VectorProps} from '../types.svg'

const FrameIcon = React.forwardRef<SVGSVGElement, VectorProps>(
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
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2667 14.1333C18.6717 14.1333 19 14.4617 19 14.8667V16.4C19 17.0896 18.7261 17.7509 18.2385 18.2385C17.7509 18.7261 17.0896 19 16.4 19H14.8667C14.4617 19 14.1333 18.6717 14.1333 18.2667C14.1333 17.8617 14.4617 17.5333 14.8667 17.5333H16.4C16.7006 17.5333 16.9888 17.4139 17.2014 17.2014C17.4139 16.9888 17.5333 16.7006 17.5333 16.4V14.8667C17.5333 14.4617 17.8617 14.1333 18.2667 14.1333Z"
        />
        <path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.1333 5.73333C14.1333 5.32832 14.4617 5 14.8667 5H16.4C17.0896 5 17.7509 5.27393 18.2385 5.76152C18.7261 6.24912 19 6.91044 19 7.6V9.13333C19 9.53834 18.6717 9.86667 18.2667 9.86667C17.8617 9.86667 17.5333 9.53834 17.5333 9.13333V7.6C17.5333 7.29942 17.4139 7.01115 17.2014 6.79861C16.9888 6.58607 16.7006 6.46667 16.4 6.46667H14.8667C14.4617 6.46667 14.1333 6.13834 14.1333 5.73333Z"
        />
        <path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.73333 14.1333C6.13834 14.1333 6.46667 14.4617 6.46667 14.8667V16.4C6.46667 16.7006 6.58607 16.9888 6.79861 17.2014C7.01115 17.4139 7.29942 17.5333 7.6 17.5333H9.13333C9.53834 17.5333 9.86667 17.8617 9.86667 18.2667C9.86667 18.6717 9.53834 19 9.13333 19H7.6C6.91044 19 6.24912 18.7261 5.76152 18.2385C5.27393 17.7509 5 17.0896 5 16.4V14.8667C5 14.4617 5.32832 14.1333 5.73333 14.1333Z"
        />
        <path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.6 6.46667C7.29942 6.46667 7.01115 6.58607 6.79861 6.79861C6.58607 7.01115 6.46667 7.29942 6.46667 7.6V9.13333C6.46667 9.53834 6.13834 9.86667 5.73333 9.86667C5.32832 9.86667 5 9.53834 5 9.13333V7.6C5 6.91044 5.27393 6.24912 5.76152 5.76152C6.24912 5.27393 6.91044 5 7.6 5H9.13333C9.53834 5 9.86667 5.32832 9.86667 5.73333C9.86667 6.13834 9.53834 6.46667 9.13333 6.46667H7.6Z"
        />
      </svg>
    )
  }
)

export {FrameIcon}

/*
  fill={color}
  fillRule="evenodd"
  clipRule="evenodd"
*/