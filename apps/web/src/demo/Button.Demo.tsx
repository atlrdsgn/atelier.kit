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
            <Flex direction={'row'} gap={2} align={'center'} justify={'center'} wrap={'wrap'}>
              <Button size={'sm'}>Small Button</Button>

              <Button size={'sm'} ghost>
                Small Button
              </Button>

              <Button size={'sm'} secondary>
                Small Button
              </Button>

              <Button size={'sm'} midnightShadow>
                Small Button
              </Button>
            </Flex>
            <Space size={'md'} />
          </div>
        </Container>
      </Section>
    </>
  )
}
