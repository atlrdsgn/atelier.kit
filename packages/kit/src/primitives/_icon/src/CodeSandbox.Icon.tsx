import type {FirstTouchProps} from '../types.icon'

export const CodeSandboxIcon = ({color = 'currentColor', ...props}: FirstTouchProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M19 19H5V5H19V19ZM17.5358 6.4875C16.865 6.40583 6.8375 6.42917 6.47583 6.51083V17.4833C6.52833 17.5125 6.5575 17.5358 6.58667 17.5358C10.1042 17.5417 13.6158 17.5475 17.1333 17.5475C17.2442 17.5475 17.3492 17.5358 17.46 17.5242C17.4717 17.5242 17.4833 17.5067 17.495 17.495C17.5067 17.4833 17.5183 17.4717 17.5358 17.4542V6.4875Z"
        fill={color}
      />
    </svg>
  )
}
