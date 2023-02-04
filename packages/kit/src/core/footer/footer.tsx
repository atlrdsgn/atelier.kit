import * as React from 'react'
import type {baseElementProps} from '../@shared'
import type {FooterVariantProps} from './footer.styles'
import {StyledFooter} from './footer.styles'

type footerProps = {
  children: React.ReactNode
}

type FooterPrimiticveProps = baseElementProps &
  FooterVariantProps &
  React.HTMLAttributes<HTMLDivElement> &
  React.ComponentPropsWithRef<typeof StyledFooter> &
  footerProps
type FooterProps = FooterPrimiticveProps

const FooterComponent = ({...props}: FooterProps) => {
  return (
    <StyledFooter
      {...props}
      css={{
        ...props.css,
      }}>
      {props.children}
    </StyledFooter>
  )
}

export const Footer = React.memo(FooterComponent)

Footer.displayName = 'Footer'
