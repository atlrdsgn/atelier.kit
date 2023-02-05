import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Container, Dialog, Section} from 'atlr.kit'

export const DialogDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Dialog'} />

          <div>
            <Dialog>
              <Dialog.Trigger>Open Dialog</Dialog.Trigger>
              <Dialog.Content>
                <span>
                  <Dialog.Title>Dialog Title</Dialog.Title>
                  <Dialog.Description>Dialog Description</Dialog.Description>
                  <Dialog.Close />
                </span>
              </Dialog.Content>
            </Dialog>
          </div>
        </Container>
      </Section>
    </>
  )
}
