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
  zIndex: 100,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',

  margin: 0,
  padding: 0,

  height: '100%',
  maxHeight: '100vh',
  width: '100%',
  maxWidth: '100vw',

  paddingTop: 0,
  paddingBottom: 180,

  backgroundColor: KitColors.transparent,

  //border: '1px solid red',
})

export {AppWrapper}
AppWrapper.displayName = 'AppWrapper'
