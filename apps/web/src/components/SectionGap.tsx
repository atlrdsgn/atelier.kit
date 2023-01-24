import * as React from 'react'

import {LineComponent, Space} from 'atlr.kit'

export const SectionGap = () => {
  return (
    <div>
      <Space size={'md'} />
      <LineComponent orientation={'horizontal'} color={'slate'} />
      <Space size={'md'} />
    </div>
  )
}
