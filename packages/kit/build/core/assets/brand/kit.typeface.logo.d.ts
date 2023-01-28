import type * as React from 'react';
import type { VectorProps } from '../types.svg';
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
declare const KitTypefaceLogo: React.FC<VectorProps>;
export { KitTypefaceLogo };
//# sourceMappingURL=kit.typeface.logo.d.ts.map