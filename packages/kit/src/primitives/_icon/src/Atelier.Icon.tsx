import type {FirstTouchProps} from '../types.icon'

export const AtelierIcon = ({color = 'currentColor', ...props}: FirstTouchProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {/**
       *
       *
       *
       * <!-- Stroke -->
       */}
      <path
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        d="M9.9,19h4.2c3.5,0,4.9-1.4,4.9-4.9V9.9C19,6.4,17.6,5,14.1,5H9.9C6.4,5,5,6.4,5,9.9v4.2C5,17.6,6.4,19,9.9,19z"
      />

      {/**
       *
       *
       *
       * <!-- A[Logo] -->
       */}
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5,14.2H10l0.4-0.8h3.4l0.4,0.8h2.5l-2.9-5h-3.4L7.5,14.2z M11,12.3l1.1-2l1.1,2H11z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9,10.9L15.9,10.9c0.5,0,0.8-0.4,0.8-0.8v0c0-0.5-0.4-0.8-0.8-0.8h0c-0.5,0-0.8,0.4-0.8,0.8v0
		C15.1,10.5,15.4,10.9,15.9,10.9z M15.3,10L15.3,10c0-0.4,0.3-0.7,0.6-0.7h0c0.4,0,0.6,0.3,0.6,0.7v0c0,0.4-0.3,0.7-0.6,0.7h0
		C15.6,10.7,15.3,10.4,15.3,10z M15.6,10.5h0.2v-0.3H16c0.1,0,0.1,0,0.1,0.1v0.1c0,0.1,0,0.1,0,0.1h0.2v0c0,0,0,0,0-0.1v-0.1
		c0-0.1,0-0.1-0.1-0.2c0.1,0,0.1-0.1,0.1-0.2v0c0-0.2-0.1-0.2-0.3-0.2h-0.4V10.5z M15.8,10V9.7H16c0.1,0,0.1,0,0.1,0.1v0
		c0,0.1,0,0.1-0.1,0.1H15.8z"
      />
    </svg>
  )
}
