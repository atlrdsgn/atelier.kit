import * as React from 'react'
import {KitColors} from 'atlr.kit'
interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string
  width?: number
}

const AtelierKitLogo = ({color = KitColors.slate9, width, ...props}: IconProps) => {
  return (
    <svg
      width="300"
      height="80"
      viewBox="0 0 400 80"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M298.9,10.3h13.2v34.6l15.6-17.7h14.8L324.4,47l18.3,23.2h-15.4l-15.1-20.1v20.1h-13.2V10.3z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M345.3,10.3h13.2v10.5h-13.2V10.3z M345.3,27.2h13.2v43h-13.2V27.2z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M369.8,60V36.9h-6.7v-9.7h5.1c1.5,0,2.2-0.8,2.2-2.3v-9.4H383v11.7h10.1v9.7H383v19.5c0,3,1.2,4,4,4h6.2v9.9h-13
		C372.7,70.2,369.8,67.2,369.8,60z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M264.8,25.3v-0.2c0-5.7,4.5-10.3,10.2-10.3h0.2c5.7,0,10.2,4.5,10.2,10.3v0.2c0,5.7-4.5,10.3-10.2,10.3h-0.2
		C269.3,35.6,264.8,31.1,264.8,25.3z M275.1,33.4h0.2c4.4,0,7.8-3.5,7.8-8.1v-0.2c0-4.5-3.4-8.1-7.8-8.1h-0.2
		c-4.4,0-7.8,3.5-7.8,8.1v0.2C267.2,29.8,270.6,33.4,275.1,33.4z M270.8,19.8h5.5c2.4,0,3.5,1.1,3.5,3V23c0,1.4-0.8,2.2-1.9,2.5
		c1.3,0,1.8,0.7,1.8,1.8V29c0,0.6,0.2,0.9,0.4,1.2v0.2h-2.9c-0.3-0.3-0.4-0.6-0.4-1.3v-1.6c0-0.9-0.2-1.1-1.1-1.1h-1.8v3.9h-3V19.8z
		 M275.5,24.5c0.8,0,1.2-0.4,1.2-1.2v-0.2c0-0.9-0.4-1.2-1.2-1.2h-1.7v2.5H275.5z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.3,9.8h18.5l20.5,59.9H52l-3.8-11.9H24.7l-3.8,11.9H6.8L27.3,9.8z M44.7,46.8l-8.3-26.1l-8.3,26.1H44.7z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.5,59.5V36.4h-6.7v-9.7h5.1c1.5,0,2.2-0.8,2.2-2.3V15h12.6v11.7h10.1v9.7H83.7v19.5c0,3,1.2,4,4,4h6.2v9.9h-13
		C73.3,69.7,70.5,66.7,70.5,59.5z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96.2,48.6v-0.8c0-14.4,7.3-21.6,21.2-21.6h0.8c14.3,0,20.2,6.9,20.2,20.8c0,1.8,0,3.3-0.2,4.6h-28.8
		c0.3,6.6,3.1,9.7,8.2,9.7h0.8c5.1,0,6.7-2.9,6.7-4.9V56h12.6v0.4c0,6.7-4.6,13.7-19.3,13.7h-0.8C103.4,70.2,96.2,63,96.2,48.6z
		 M125.5,43.2c-0.2-6.2-3-8.6-7.3-8.6h-0.8c-4.3,0-7.3,2.6-7.8,8.6H125.5z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M144.4,9.8h13.2v59.9h-13.2V9.8z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M165.6,9.8h13.2v10.5h-13.2V9.8z M165.6,26.7h13.2v43h-13.2V26.7z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M184.6,48.6v-0.8c0-14.4,7.3-21.6,21.2-21.6h0.8c14.3,0,20.2,6.9,20.2,20.8c0,1.8,0,3.3-0.2,4.6h-28.8
		c0.3,6.6,3.1,9.7,8.2,9.7h0.8c5.1,0,6.7-2.9,6.7-4.9V56h12.6v0.4c0,6.7-4.6,13.7-19.3,13.7h-0.8C191.9,70.2,184.6,63,184.6,48.6z
		 M213.9,43.2c-0.2-6.2-3-8.6-7.3-8.6h-0.8c-4.3,0-7.3,2.6-7.8,8.6H213.9z"
      />
      <path
        color={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M232.8,26.7h12.6v7.9c4-5.5,6.1-8,10.7-8h5.1v12.1h-8.3c-4.3,0-6.8,2.5-6.8,8.3v22.6h-13.2V26.7z"
      />
    </svg>
  )
}

export {AtelierKitLogo}
AtelierKitLogo.displayName = 'AtelierKitLogo'
