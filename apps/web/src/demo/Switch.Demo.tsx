import * as React from 'react'

import {Switch, SwitchThumb} from 'atlr.kit'
import {Container, Section} from 'atlr.kit'
import {ComponentName} from '@/components/ComponentName'

export const SwitchDemo = () => {
  return (
    <>
      <Section>
        <Container size={'lg'} align={'center'}>
          <ComponentName component={'Switch'} />

          <div>
            <Switch id={'atlr-switch'}>
              <SwitchThumb />
            </Switch>
          </div>
        </Container>
      </Section>
    </>
  )
}
