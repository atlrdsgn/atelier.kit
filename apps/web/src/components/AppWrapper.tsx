import * as React from 'react'

import {styled, KitColors} from 'atlr.kit'

type WrapProps = {
  children: React.ReactNode
}

const AppWrapper = ({children, ...props}: WrapProps) => {
  return (
    <div>
      <Contain>
        <StyledAppWrapper {...props}>{children}</StyledAppWrapper>
      </Contain>
    </div>
  )
}

const Contain = styled('div', {
  zIndex: 0,
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledAppWrapper = styled('div', {
  zIndex: 1,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',

  overflow: 'auto',

  margin: 0,
  padding: 0,

  height: 'auto',
  width: '100%',
  maxWidth: '100vw',

  paddingTop: 180,
  paddingBottom: 180,

  backgroundColor: KitColors.slate2,

  //border: '1px solid red',
})

export {AppWrapper}
AppWrapper.displayName = 'AppWrapper'
