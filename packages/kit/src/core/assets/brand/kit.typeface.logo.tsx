import type * as React from 'react'

import type {VectorProps} from '../types.svg'

/**
 *
 * @notes
 *
 *
 * For larger scale svg.vectors like logos
 * we pass a color and width prop to allow full control..
 *
 * Therefore, you need to be sure to include this prop
 * to avoid any rendering issues..
 *
 * @returns
 * <KitLogo color={'#HEX'} width={number} />
 *
 * or
 *
 * const color = '#HEX'
 * const w = 30
 *
 * () => <KitLogo color={color} width={w} />
 *
 * © 2023 by Atelier® Design. All rights reserved.
 */

const KitTypefaceLogo: React.FC<VectorProps> = ({color, width, height, ...props}) => {
  return (
    <svg
      {...props}
      fill={color}
      width={width}
      height={height}
      fillRule={'evenodd'}
      clipRule={'evenodd'}
      viewBox="0 0 400 80">
      <path d="M24.5,55.7l-5,14.5H9.8L32.2,10h10l22.5,60.2H54.6l-5-14.5H24.5z M47,47.8l-9.8-29.3h-0.2l-9.8,29.3H47z" />
      <path
        d="M70.4,27.2V13.4h8.2v13.8h8.2V34h-8.2v24.2c0,4.5,1.3,5.6,4.8,5.6c1.3,0,2-0.1,3.5-0.3v6.6c-2.2,0.4-3.4,0.5-5.3,0.5
		c-7,0-11.3-2.7-11.3-12.6V34h-6.2v-6.8H70.4z"
      />
      <path
        d="M90.5,48.6c0-13.5,8.1-22.7,21.2-22.7c13,0,20.4,8.6,20.4,21.9c0,1.2,0,2.4-0.1,3.1H99c0.2,7.2,4.4,13.8,12.9,13.8
		c7.6,0,10.4-4.9,11.3-7.7h8.3c-2.2,8.2-8.5,14.5-19.8,14.5C98.1,71.4,90.5,61.7,90.5,48.6z M99,44.4h24.4c0-6.7-4.6-11.8-11.9-11.8
		C104.5,32.6,99.5,37.3,99,44.4z"
      />
      <path d="M147.2,10v60.2H139V10H147.2z" />
      <path d="M165.1,10.6v8.9h-9.3v-8.9H165.1z M164.6,27.2v42.9h-8.2V27.2H164.6z" />
      <path
        d="M171.4,48.6c0-13.5,8.1-22.7,21.2-22.7c13,0,20.4,8.6,20.4,21.9c0,1.2,0,2.4-0.1,3.1h-33c0.2,7.2,4.4,13.8,12.9,13.8
		c7.6,0,10.4-4.9,11.3-7.7h8.3c-2.2,8.2-8.5,14.5-19.8,14.5C179,71.4,171.4,61.7,171.4,48.6z M179.9,44.4h24.4
		c0-6.7-4.6-11.8-11.9-11.8C185.5,32.6,180.4,37.3,179.9,44.4z"
      />
      <path
        d="M228.1,27.2v8.2h0.2c2.2-5.4,5.7-9.2,11.5-9.2c1.5,0,2.7,0.1,4,0.3v7.9c-1.1-0.2-1.9-0.3-2.8-0.3
		c-7.5,0-12.9,5.6-12.9,13.8v22.2h-8.2V27.2H228.1z"
      />
      <path
        d="M248.4,29c0-11.7,8.8-20.4,20-20.4c11.3,0,20.1,8.7,20.1,20.4s-8.8,20.4-20.1,20.4C257.3,49.3,248.4,40.7,248.4,29z
		 M284.6,29c0-9.8-6.9-16.9-16.2-16.9c-9.2,0-16.1,7.1-16.1,16.9s6.9,16.9,16.1,16.9C277.7,45.9,284.6,38.8,284.6,29z M260,17.7h9.3
		c5.3,0,8.1,2.4,8.1,6.6c0,3.1-1.9,5-4.7,5.6V30c5.6,0.9,3.9,9.4,5.1,9.8v0.3h-5.6c-1.1-1,0.8-7.9-4.5-7.9h-2.1v7.9H260V17.7z
		 M267.9,27.7c2.2,0,4.2-0.5,4.2-2.9c0-2.4-2-2.9-4.2-2.9h-2.4v5.8H267.9z"
      />
      <path d="M297,10h9.3v30.5L334.8,10h10.3L321.5,35L347,70.1h-10.9l-20.4-28.9l-9.6,10.2v18.8H297V10z" />
      <path d="M362.1,10.6v8.9h-9.3v-8.9H362.1z M361.6,27.2v42.9h-8.2V27.2H361.6z" />
      <path
        d="M373.6,27.2V13.4h8.2v13.8h8.2V34h-8.2v24.2c0,4.5,1.3,5.6,4.8,5.6c1.3,0,2-0.1,3.5-0.3v6.6c-2.2,0.4-3.4,0.5-5.3,0.5
		c-7,0-11.3-2.7-11.3-12.6V34h-6.2v-6.8H373.6z"
      />
    </svg>
  )
}

export {KitTypefaceLogo}