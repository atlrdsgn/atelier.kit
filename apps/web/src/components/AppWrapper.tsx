import * as React from 'react'

import {styled, KitColors} from '@atlr/kit'

type WrapProps = {
  children: React.ReactNode
}

const AppWrapper = ({children, ...props}: WrapProps) => {
  return (
    <div>
      <StyledAppWrapper {...props}>{children}</StyledAppWrapper>
    </div>
  )
}

const StyledAppWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  margin: 0,
  padding: 0,

  height: '100vh',
  width: '100vw',
  minWidth: '100vw',
  minHeight: '100vh',

  backgroundColor: KitColors.slate2,
})

export {AppWrapper}
AppWrapper.displayName = 'AppWrapper'
