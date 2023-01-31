import type {FirstTouchProps} from '../types.icon'

export const FourKIcon = ({color = 'currentColor', ...props}: FirstTouchProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M8.17143 14.6515H4V13.3333L7.68571 9H9.78571V13.3939H11V14.6515H9.78571V16H8.17143V14.6515ZM8.17143 10.4242L5.7 13.3939H8.17143V10.4242Z"
        fill={color}
      />
      <path
        d="M17.1756 9H19.7486L16.525 11.8147L20 16H17.4122L15.0166 12.9642L13.9076 13.9221V16H12V9H13.9076V12.0211L17.1756 9Z"
        fill={color}
      />
    </svg>
  )
}
