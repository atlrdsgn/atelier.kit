import * as React from 'react'
import type {CSS} from '../../theme'
import {styled} from '../../theme'

type WrapperProps = {
  css?: CSS
  children: React.ReactNode
}

export const CSSWrapper = ({css, children, ...rest}: WrapperProps): React.ReactElement =>
  css ? (
    <Wrapper css={{css}} {...rest}>
      {children}
    </Wrapper>
  ) : (
    // children could be multiple elements/components,
    // so we need a fragment here.
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  )

CSSWrapper.displayName = 'CSSWrapper'

const Wrapper = styled('div', {})
