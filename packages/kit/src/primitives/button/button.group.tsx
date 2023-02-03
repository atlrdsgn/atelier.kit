import {
  ButtonGroupVariantProps,
  StyledBtnGroupButton,
  StyledBtnGroupRoot,
} from './button.group.styles'
import type {ButtonProps} from './button'

type ButtonGroupProps = ButtonProps & ButtonGroupVariantProps

const ButtonGroupComponent = ({
  children,
  type,
  /**
   *
   * as React.ElementType..
   * only takes 'a' or 'button'..
   */
  as = 'a',
  /**
   *
   * linkHref - string
   */
  href,
  onClick,
  target = '_self',
  rel = 'noopener noreferrer',
  /**
   *
   * Styled Size options.
   */
  size = 'sm',
  /**
   *
   * Styled variant options.
   */
  primary = true,
  secondary = false,
  neon = false,
  rainbow = false,
  ghost = false,

  /**
   *
   * style prop.
   */
  css,
  ...rest
}: ButtonGroupProps) => {
  return (
    <StyledBtnGroupButton {...rest} href={href}>
      {children}
    </StyledBtnGroupButton>
  )
}

export const ButtonGroupItem = ButtonGroupComponent
export const ButtonGroup = StyledBtnGroupRoot
