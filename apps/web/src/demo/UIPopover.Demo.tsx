import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'

import {UIPopover, Section, Container} from 'atlr.kit'

export const UIPopoverDemo = () => {
  return (
    <>
      <Section>
        <Container size={'lg'} align={'center'}>
          <ComponentName component={'UI Popover'} />
          <div>
            <UIPopover>
              <UIPopover.Trigger>Trigger</UIPopover.Trigger>

              <UIPopover.Content>.........</UIPopover.Content>
            </UIPopover>
          </div>
        </Container>
      </Section>
    </>
  )
}
