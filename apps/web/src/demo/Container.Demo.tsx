import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'

import {Container, Space, Text} from 'atlr.kit'

export const ContainerDemo = () => {
  return (
    <>
      <Container size={'sm'} align={'center'}>
        <ComponentName component={'Container'} />
      </Container>
      <Container size={'sm'} align={'center'} dev>
        <Text size={'sm'}>Container Small</Text>
      </Container>
      <Space size={'sm'} />
      <Container size={'md'} align={'center'} dev>
        <Text size={'sm'}>Container Medium</Text>
      </Container>
      <Space size={'sm'} />
      <Container size={'lg'} align={'center'} dev>
        <Text size={'sm'}>Container Large</Text>
      </Container>
      <Space size={'sm'} />
      <Container size={'xl'} align={'center'} dev>
        <Text size={'sm'}>Container Extra Large</Text>
      </Container>
      <Space size={'sm'} />
      <Container size={'full'} align={'center'} dev>
        <Text size={'sm'}>Container Full-Width</Text>
      </Container>
    </>
  )
}
