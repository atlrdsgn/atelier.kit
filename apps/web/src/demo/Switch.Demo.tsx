import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Section, Switch, SwitchThumb} from 'atlr.kit'
import {Container} from 'atlr.kit'

export const SwitchDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Switch'} />

          <div>
            <form>
              <Switch id="switch">
                <SwitchThumb />
              </Switch>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
