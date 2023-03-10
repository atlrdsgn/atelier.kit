import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {keyframes, styled, KitTheme, KitColors, VariantProps} from '../../theme'

/**
 * @keyframes
 */

const enterFromRight = keyframes({
  from: {transform: 'translateX(200px)', opacity: 0},
  to: {transform: 'translateX(0)', opacity: 1},
})

const enterFromLeft = keyframes({
  from: {transform: 'translateX(-200px)', opacity: 0},
  to: {transform: 'translateX(0)', opacity: 1},
})

const exitToRight = keyframes({
  from: {transform: 'translateX(0)', opacity: 1},
  to: {transform: 'translateX(200px)', opacity: 0},
})

const exitToLeft = keyframes({
  from: {transform: 'translateX(0)', opacity: 1},
  to: {transform: 'translateX(-200px)', opacity: 0},
})

const scaleIn = keyframes({
  from: {transform: 'rotateX(-30deg) scale(0.9)', opacity: 0},
  to: {transform: 'rotateX(0deg) scale(1)', opacity: 1},
})

const scaleOut = keyframes({
  from: {transform: 'rotateX(0deg) scale(1)', opacity: 1},
  to: {transform: 'rotateX(-10deg) scale(0.95)', opacity: 0},
})

const fadeIn = keyframes({
  from: {opacity: 0},
  to: {opacity: 1},
})

const fadeOut = keyframes({
  from: {opacity: 1},
  to: {opacity: 0},
})

/* --------------------------------- Root --------------------------------- */
/**
 * @MenuRoot
 */
const NavigationMenuRoot = styled(NavigationMenu.Root, {
  zIndex: 9997,
  position: 'fixed',
  top: '0.5rem',
  left: '50%',
  transform: 'translateY(0px) translateX(-50%)',
  boxSizing: 'border-box',
  display: 'block',
  WebkitFontSmoothing: 'antialiased',
  width: 'calc(100% - 2rem)',
  height: '3.5rem',

  margin: 'auto',
  padding: 0,

  /**
   *
   * For dev purposes add a border to the root
   * so you are able to see the viewport.
   *
   * border: '1px solid blue',
   */

  // NavMenuRootVariantProps..
  variants: {
    dev: {
      true: {
        border: '1px solid blue',
      },
    },
    inspect: {
      true: {
        border: '1px solid blue',
      },
    },
  },
  defaultVariants: {
    dev: false,
    inspect: false,
  },
})

/* --------------------------------- Bar ---------------------------------
 * menu bar.
 *
 * this is the action div element that holds the component together.
 * ----------------------------------------------------------------------- */

const NavigationMenuBarStyles = styled(NavigationMenu.List, {
  zIndex: 99999,
  position: 'fixed',
  top: 4,
  left: 0,
  right: 0,
  display: 'flex',
  width: '100%',
  maxWidth: '400px',
  justifyContent: 'space-between',
  padding: 4,
  listStyle: 'none',
  boxShadow: ``,
  margin: 'auto',

  borderRadius: 16,
  backgroundColor: 'transparent',
  backdropFilter: 'blur(40px) saturate(180%)',
  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
  lineHeight: '23px',
  height: 'auto',
  border: `1px solid ${KitColors.slate4}`,
})

/* --------------------------------- Bar-box ---------------------------------
 * menu bar box.
 *
 * a simple flex box that allows us to position and provide
 * proper alignment props to the items/elements within NavMenuBar.
 * ----------------------------------------------------------------------- */
const NavigationMenuBoxStyles = styled('div', {
  display: 'flex',
  width: '100%',
  margin: 'auto',
  padding: 0,
  color: KitColors.slate9,
  transition: 'color 0.4s ease',

  // NavMenuBarBoxVariantProps..
  variants: {
    alignment: {
      start: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      center: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      end: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      },
    },
  },
})

/* --------------------------------------------------- @shared - ITEM STYLES ----
 * menu bar box.
 *
 * these styles will be applied to all items/buttons within the menu bar.
 * ----------------------------------------------------------------------- */

/**
 *
 * @MenuItems
 * (or)
 * @MenuButtons
 *
 */
const itemStyles = {
  all: 'unset',

  // initial..
  '*': {
    boxSizing: 'border-box',
    outline: 'none',
  },
  '*:active': {
    boxSizing: 'border-box',
    outline: 'none',
  },
  '*:focus': {
    boxSizing: 'border-box',
    outline: 'none',
  },

  // styles.
  alignItems: 'center',
  boxSizing: 'border-box',
  cursor: 'auto',

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontVariantNumeric: 'tabular-nums',

  margin: 0,
  paddingLeft: 16,
  paddingRight: 13,

  height: 38,
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.base,
  fontWeight: KitTheme.theme.fontWeights.medium,

  borderRadius: 12,
  border: '1px solid transparent',
  width: 'auto',
  color: KitColors.slate9,

  // selectors.
  '&:hover': {
    color: KitColors.slate9,
    backgroundColor: KitColors.slate3,
  },
  '&:active': {},
  '&:focus': {},

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  '&:disabled': {
    boxShadow: `inset 0 0 0 1px ${KitColors.slate7}`,
    '&:hover': {
      backgroundColor: '$blur',
      cursor: 'not-allowed',
    },
  },
}

/* --------------------------------------------------- TRIGGER STYLES -- *
 * menu bar trigger.
 *
 * this is the trigger button that will open a menu.
 *
 * - has itemStyles applied to it. -
 * ----------------------------------------------------------------------- */

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  ...itemStyles,

  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  horizontalAlign: 'center',
  justifyContent: 'space-between',
  gap: 2,

  '*': {
    boxSizing: 'border-box',
    outline: 'none',
  },
  '*:active': {
    boxSizing: 'border-box',
    outline: 'none',
  },
  '*:focus': {
    boxSizing: 'border-box',
    outline: 'none',
  },
})

/* --------------------------------------------------- MENU LINK STYLES -- *
 * menu bar link.
 *
 * this is the link button that link to somewhere.
 *
 * - has itemStyles applied to it. -
 *   '*': {
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'none',
  },
  '*:active': {
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'none',
  },
  '*:focus': {
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'none',
  },
 * ----------------------------------------------------------------------- */

const NavigationMenuLink = styled(NavigationMenu.Link, {
  ...itemStyles,

  all: 'unset',

  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: KitTheme.theme.fontSizes.base,
  fontWeight: KitTheme.theme.fontWeights.medium,
  transition: 'color 0.3s ease',
  textDecoration: 'none',
  lineHeight: 1,
  borderRadius: 12,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,

  '&:hover': {
    color: KitColors.slate12,
    backgroundColor: KitColors.slate2,
    cursor: 'pointer',
  },

  // NavMenuBarLinkVariantProps..
  variants: {
    level2: {
      true: {
        color: KitColors.slate9,
      },
    },
  },
  defaultVariants: {},
})

/* --------------------------------------------------- MENU CONTENT STYLES -- *
 * menu content.
 *
 * ..escaped styles..
 *
 * position: 'fixed',
 * top: 0,
 * left: 0,
 * right: 0,
 * backdropFilter: 'blur(20px) saturate(180%)',
 * WebkitBackdropFilter: 'blur(20px) saturate(180%)',
 * ----------------------------------------------------------------------- */
const NavigationMenuContent = styled(NavigationMenu.Content, {
  zIndex: 9998,
  backgroundColor: KitColors.transparent,

  borderRadius: 16,
  boxSizing: 'border-box',
  width: '100%',
  minWidth: '100%',
  padding: 4,
  paddingTop: '3.5rem',

  transition: 'all 0.2s ease-in-out',

  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  // '&[data-motion="from-start"]': {animationName: fadeIn},
  // '&[data-motion="from-end"]': {animationName: fadeOut},
  // '&[data-motion="to-start"]': {animationName: fadeIn},
  // '&[data-motion="to-end"]': {animationName: fadeOut},
  '&[data-motion="from-start"]': {animationName: enterFromLeft},
  '&[data-motion="from-end"]': {animationName: enterFromRight},
  '&[data-motion="to-start"]': {animationName: exitToLeft},
  '&[data-motion="to-end"]': {animationName: exitToRight},

  /**
   * @media only screen and (min-width: 600px)': { width: 'auto' },
   */
})

/* --------------------------------- Menu Inner Wrapper --------------------------------- */
/**
 * @MenuInner
 */
const NavigationMenuInner = styled('div', {
  zIndex: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  padding: 4,
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  borderRadius: 16,
  border: `1px solid ${KitColors.slateA4}`,
  transition: 'color 0.8s ease',
  /**
   * @backgroundColor
   *
   * <!-- '$blackA3' isn't a bad option here. -->
   * backgroundColor: '$blackA3',
   *
   * <!-- a border is also a good option. -->
   * border: '1px solid $sageA5'
   *
   */
  backgroundColor: `rgba(26,26,26,.06)`,
  backdropFilter: 'blur(40px) saturate(180%)',
  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
})

/* --------------------------------- Menu Indicator --------------------------------- */
/**
 * @NavMenuIndicator
 */
const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,
  transition: 'width, transform 250ms ease',
  '&[data-state="visible"]': {animation: `${fadeIn} 200ms ease`},
  '&[data-state="hidden"]': {animation: `${fadeOut} 200ms ease`},
})

/* --------------------------------- Menu Viewport Styles (Positioning) --------------------------------- */
/**
 * @Viewport
 */
const ViewportPosition = styled('div', {
  /**
   *
   * For dev purposes add a border to the viewport
   * so you are able to see the viewport.
   *
  border: '1px solid blue',

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
     */
  zIndex: 999,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'block',
  margin: 'auto',
  justifyContent: 'center',
  maxWidth: 520,
  width: '100%',
  perspective: '2000px',
})

/* --------------------------------- Menu Viewport Styles (Viewport) --------------------------------- */
/**
 * @NavMenuViewport
 */
const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: 'relative',
  height: 'var(--radix-navigation-menu-viewport-height)',
  transformOrigin: 'top center',
  overflow: 'hidden',
  transition: 'width, height, 300ms ease',
  '&[data-state="open"]': {animation: `${scaleIn} 200ms ease`},
  '&[data-state="closed"]': {animation: `${scaleOut} 200ms ease`},
  '@media only screen and (min-width: 600px)': {
    //width: 'var(--radix-navigation-menu-viewport-width)'
    width: '100%',
  },
})

/* --------------------------------- Menu Callout Component --------------------------------- */
/**
 * @NavCallout
 */
const Callout = styled('a', {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  width: 600,
  height: '100%',
  background: `linear-gradient(135deg, $colors$chxn4 0%, $colors$mauve9 100%);`,
  borderRadius: 6,
  padding: 25,
  textDecoration: 'none',
  outline: 'none',
  userSelect: 'none',
  '&:focus': {boxShadow: `0 0 0 2px ${KitTheme.theme.colors.slate4}`},
})

/**
 * @NavCalloutHeading
 */
export const CalloutHeading = styled('div', {
  color: 'white',
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1.2,
  marginTop: 16,
  marginBottom: 7,
})

/**
 * @NavCalloutText
 */
const CalloutText = styled('p', {
  all: 'unset',
  color: KitTheme.theme.colors.slate12,
  fontSize: 14,
  lineHeight: 1.3,
})

/**
 * @NavIcxn
 */

const StyledNavIcon = styled('span', {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: 'inherit',

  marginLeft: 3,
  // transition: 'transform 100ms ease',
  '[data-state=open] &': {
    transform: 'rotate(-180deg)',
    // transform: `rotateZ(180deg)`
    transitionDuration: `200ms`,
  },
})

export const StyledNavMenuRoot = NavigationMenuRoot
export const StyledNavMenuBar = NavigationMenuBarStyles
export const StyledNavMenuInner = NavigationMenuInner
export const StyledNavMenuContent = NavigationMenuContent
export const StyledNavMenuTrigger = NavigationMenuTrigger
export const StyledNavMenuIndicator = NavigationMenuIndicator
export const StyledNavMenuBarBox = NavigationMenuBarStyles

export const StyledNavLink = NavigationMenuLink

/**
 * <!-- Callout.Style -->
 */
export const StyledNavCallout = Callout
export const StyledNavCalloutHeading = CalloutHeading
export const StyledNavCalloutText = CalloutText

/**
 * <!-- Viewport.Style -->
 */
export const StyledNavMenuViewport = NavigationMenuViewport
export const StyledViewport = ViewportPosition

/**
 * @IcxnStyles
 */
export {StyledNavIcon}

export type NavMenuRootVariantProps = VariantProps<typeof NavigationMenuRoot>
export type NavMenuBarBoxVariantProps = VariantProps<typeof NavigationMenuBoxStyles>
export type NavMenuBarLinkVariantProps = VariantProps<typeof NavigationMenuLink>
