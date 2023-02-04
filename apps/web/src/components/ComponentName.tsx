import * as React from 'react'

import {Space, Heading} from 'atlr.kit'

interface ComponentNameProps {
  component: string
}

export const ComponentName = ({component}: ComponentNameProps) => {
  return (
    <div>
      <Space size={'sm'} />

      <Heading size={'3'} css={{textAlign: 'center'}} color={'helios'}>
        {component}
      </Heading>

      <Space size={'md'} />
    </div>
  )
}
