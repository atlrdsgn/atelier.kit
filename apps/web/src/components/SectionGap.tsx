import * as React from 'react'

import {Container, Line, Space} from 'atlr.kit'

export const SectionGap = () => {
  return (
    <div>
      <Container size={'sm'} align={'center'}>
        <Space size={'md'} />
        <Line data-orientation={'horizontal'} color={'helios'} size={'px100'} />
        <Space size={'md'} />
      </Container>
    </div>
  )
}
