import * as React from 'react'

import {styled, KitColors} from 'atlr.kit'

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
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',

  overflow: 'auto',

  margin: 0,
  padding: 0,

  height: 'auto',
  width: '100vw',
  minWidth: '100vw',

  paddingTop: 180,
  paddingBottom: 180,

  backgroundColor: KitColors.slate2,
  color: KitColors.slate12,
})

export {AppWrapper}
AppWrapper.displayName = 'AppWrapper'
