import * as React from 'react'

import {styled} from 'atlr.kit'

type PageProps = {
  children: React.ReactNode
}

export const ComponentPageWrapper = ({children, ...props}: PageProps) => {
  return <StyledComponentPageWrapper {...props}>{children}</StyledComponentPageWrapper>
}

const StyledComponentPageWrapper = styled('div', {
  boxSizing: 'border-box',
  zIndex: 1,

  maxWidth: 680,
  width: '100%',
  height: '100%',

  margin: 'auto',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',

  paddingTop: 180,
  paddingBottom: 180,
  paddingLeft: 0,
  paddingRight: 0,

  border: '1px solid #000',
})
