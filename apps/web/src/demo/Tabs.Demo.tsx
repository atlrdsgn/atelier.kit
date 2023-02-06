import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Tabs} from 'atlr.kit'
import {Container, Section} from 'atlr.kit'

export const TabsDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Tabs'} />

          <div>
            <Tabs orientation={'horizontal'} defaultValue={'tab-1'}>
              <Tabs.List data-orientation={'horizontal'}>
                <Tabs.Trigger value={'tab-1'}>Tab 1</Tabs.Trigger>
                <Tabs.Trigger value={'tab-2'}>Tab 2</Tabs.Trigger>
                <Tabs.Trigger value={'tab-3'}>Tab 3</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value={'tab-1'}>
                Culpa deserunt ullamco velit culpa aliquip anim velit voluptate laborum
                reprehenderit elit occaecat.
              </Tabs.Content>
              <Tabs.Content value={'tab-2'}>
                Reprehenderit qui magna aliqua proident elit adipisicing ea ea exercitation. Id
                eiusmod irure consequat. Id commodo tempor duis ipsum proident in adipisicing labore
                nulla cillum nulla dolor consectetur dolore. Labore deserunt anim eu.
              </Tabs.Content>
              <Tabs.Content value={'tab-3'}>
                consectetur enim velit. Eiusmod aliquip elit aliquip cupidatat proident tempor
                consectetur tempor id ea. Do nulla dolor nostrud minim sit esse eiusmod deserunt
                duis reprehenderit. Sunt consequat non voluptate ut et Lorem dolor incididunt
                proident.
              </Tabs.Content>
            </Tabs>
          </div>
        </Container>
      </Section>
    </>
  )
}
