import * as React from 'react'

import {Space, Badge} from 'atlr.kit'

interface ComponentNameProps {
  component: string
}

export const ComponentName = ({component}: ComponentNameProps) => {
  return (
    <div>
      <Space size={'sm'} />

      <Badge size={'sm'} color={'subtle'}>
        {component}
      </Badge>

      <Space size={'md'} />
    </div>
  )
}
