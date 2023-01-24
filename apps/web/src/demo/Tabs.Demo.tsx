import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Tabs, TabsList, TabsTrigger, TabsContent} from 'atlr.kit'
import {Container, Section} from 'atlr.kit'

export const TabsDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Tabs'} />

          <div>
            <Tabs orientation={'horizontal'} defaultValue={'tab-1'}>
              <TabsList data-orientation={'horizontal'}>
                <TabsTrigger value={'tab-1'}>Tab 1</TabsTrigger>
                <TabsTrigger value={'tab-2'}>Tab 2</TabsTrigger>
                <TabsTrigger value={'tab-3'}>Tab 3</TabsTrigger>
              </TabsList>
              <TabsContent value={'tab-1'}>
                Culpa deserunt ullamco velit culpa aliquip anim velit voluptate laborum
                reprehenderit elit occaecat.
              </TabsContent>
              <TabsContent value={'tab-2'}>
                Reprehenderit qui magna aliqua proident elit adipisicing ea ea exercitation. Id
                eiusmod irure consequat. Id commodo tempor duis ipsum proident in adipisicing labore
                nulla cillum nulla dolor consectetur dolore. Labore deserunt anim eu.
              </TabsContent>
              <TabsContent value={'tab-3'}>
                consectetur enim velit. Eiusmod aliquip elit aliquip cupidatat proident tempor
                consectetur tempor id ea. Do nulla dolor nostrud minim sit esse eiusmod deserunt
                duis reprehenderit. Sunt consequat non voluptate ut et Lorem dolor incididunt
                proident.
              </TabsContent>
            </Tabs>
          </div>
        </Container>
      </Section>
    </>
  )
}
