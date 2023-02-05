import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Badge, Section, Space} from 'atlr.kit'
import {Container, Flex} from 'atlr.kit'

export const BadgeDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Badge'} />

          <div>
            <Flex direction={'row'} gap={2} align={'center'} justify={'center'} wrap={'wrap'}>
              <Badge size={'sm'} color={'subtle'}>
                Small Badge
              </Badge>

              <Badge size={'sm'} color={'fizz'}>
                Small Badge
              </Badge>

              <Badge size={'sm'} color={'heliotrope'}>
                Small Badge
              </Badge>

              <Badge size={'sm'} color={'initial'}>
                Small Badge
              </Badge>
            </Flex>
            <Space size={'md'} />
          </div>
        </Container>
      </Section>
    </>
  )
}
