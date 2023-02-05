import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Container, Popover, Section} from 'atlr.kit'

export const PopoverDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Popover'} />

          <div>
            <Popover>
              <Popover.Trigger>Popover Trigger</Popover.Trigger>
              <Popover.Anchor />
              <Popover.Content>Hi, I'm a Popover!</Popover.Content>
            </Popover>
          </div>
        </Container>
      </Section>
    </>
  )
}
