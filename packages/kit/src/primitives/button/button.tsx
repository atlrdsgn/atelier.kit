import * as React from 'react'

import {StyledButton} from './button.styles'
import type {ButtonVariantProps} from './button.styles'
import type {buttonProps} from './button.types'
import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'

type ButtonPrimitiveProps = React.HTMLAttributes<HTMLButtonElement> &
  baseComponentProps &
  buttonProps &
  ButtonVariantProps
type ButtonProps = ButtonPrimitiveProps

const ButtonComponent = ({
  /**
   *
   * React.ReactNode - always
   */
  children,
  /**
   *
   * Change the component to the HTML tag or custom component of the only child.
   */
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
}: ButtonProps) => (
  <StyledButton
    {...rest}
    /**
     *
     * type of usage..
     * button, submit, reset..
     */
    type={type}
    as={as}
    /**
     *
     * href for anchor tag
     * pass a url string here..
     */
    href={href}
    onClick={onClick}
    target={target}
    rel={rel}
    /**
     *
     * basic size options for component
     * sm, md, lg
     */
    size={size}
    /**
     *
     * color options for component
     * atelier, ghost, neon, rainbow..
     */

    primary={primary}
    secondary={secondary}
    neon={neon}
    rainbow={rainbow}
    ghost={ghost}
    css={{
      ...css,
    }}>
    {children}
  </StyledButton>
)

export const Button = ButtonComponent

applyDisplayName(Button, 'Button')

export type {ButtonProps}
