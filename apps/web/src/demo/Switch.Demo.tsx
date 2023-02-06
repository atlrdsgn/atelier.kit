import * as React from 'react'

import {Switch} from 'atlr.kit'
import {Container, Section} from 'atlr.kit'
import {ComponentName} from '@/components/ComponentName'

export const SwitchDemo = () => {
  return (
    <>
      <Section>
        <Container size={'lg'} align={'center'}>
          <ComponentName component={'Switch'} />

          <div>
            <Switch>
              <Switch.Toggle />
            </Switch>
          </div>
        </Container>
      </Section>
    </>
  )
}
