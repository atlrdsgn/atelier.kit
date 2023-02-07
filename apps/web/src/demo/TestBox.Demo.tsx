import * as React from 'react'

import {TestBox} from 'atlr.kit'
import {Container, Section} from 'atlr.kit'
import {ComponentName} from '@/components/ComponentName'

export const TestBoxDemo = () => {
  return (
    <>
      <Section>
        <Container size={'lg'} align={'center'}>
          <ComponentName component={'Test Box'} />

          <div>
            <TestBox />
          </div>
        </Container>
      </Section>
    </>
  )
}
