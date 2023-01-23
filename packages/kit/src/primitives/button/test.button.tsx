import * as React from 'react'
import type {CSS, VariantProps} from '../../theme'
import {styled} from '../../theme'

const ButtonBase = styled('button', {
  variants: {
    size: {
      sm: {},
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export type TestButtonVariantProps = VariantProps<typeof ButtonBase>

interface testButtonProps extends React.AnchorHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType<any> | 'a' | 'button'

  className?: string

  href?: string
}

type TestButtonPrimitiveProps = testButtonProps &
  TestButtonVariantProps &
  React.ComponentProps<typeof ButtonBase> &
  React.AnchorHTMLAttributes<HTMLButtonElement>
type TestButtonProps = TestButtonPrimitiveProps & {css?: CSS}

const TestButtonComponent = React.forwardRef<HTMLButtonElement, TestButtonProps>(
  (props, forwardedRef) => {
    return (
      <ButtonBase
        {...props}
        ref={forwardedRef}
        as={props.as}
        className={props.className}
        size={props.size}
        css={{
          ...props.css,
        }}>
        {props.children}
      </ButtonBase>
    )
  }
)

/*
const TestButtonComponent = (props: TestButtonProps) => {
  return (
    <ButtonBase {...props} size={props.size}>
      {props.children}
    </ButtonBase>
  )
}
*/
export const TestButton = TestButtonComponent
