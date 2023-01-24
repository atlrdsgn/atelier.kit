import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Button, Section, Space} from 'atlr.kit'
import {Container, Flex} from 'atlr.kit'

export const ButtonDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Button'} />

          <div>
            <Flex direction={'row'} gap={2} align={'center'} justify={'center'}>
              <Button size={'sm'}>Small Button</Button>

              <Button size={'sm'} secondary>
                Small Button
              </Button>

              <Button size={'sm'} ghost>
                Small Button
              </Button>
            </Flex>
            <Space size={'md'} />
            <Flex direction={'row'} gap={2} align={'center'} justify={'center'}>
              <Button size={'md'}>Medium Button</Button>

              <Button size={'md'} secondary>
                Medium Button
              </Button>

              <Button size={'md'} ghost>
                Medium Button
              </Button>
            </Flex>

            <Space size={'md'} />
            <Flex direction={'row'} gap={2} align={'center'} justify={'center'}>
              <Button size={'lg'}>Large Button</Button>

              <Button size={'lg'} secondary>
                Large Button
              </Button>

              <Button size={'lg'} ghost>
                Large Button
              </Button>
            </Flex>
          </div>
        </Container>
      </Section>
    </>
  )
}
