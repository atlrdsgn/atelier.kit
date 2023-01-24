import { KitTheme, KitColors, globalCss, css } from '@atlr/kit';



export const bodyStyles = css({
  /* Same as before */

  margin: 0,
  padding: 0,
  fontFamily: KitTheme.theme.fonts.sans,
  color: KitColors.slate12,
});

export const globalStyle = globalCss({
 body: {
   ...bodyStyles
 }
});