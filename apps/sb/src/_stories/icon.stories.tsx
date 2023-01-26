import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Flex, Icon} from 'atlr.kit'

export default {
  title: 'primitives/icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <Container size={'md'} align={'center'}>
      <Flex align={'center'} justify={'between'}>
        <Icon {...args} variant={'Atelier.Icon'} />
        <Icon {...args} variant={'Apple.Icon'} />
        <Icon {...args} variant={'CodeSandbox.Icon'} />
        <Icon {...args} variant={'CodeSandbox2.Icon'} />
        <Icon {...args} variant={'YouTube.Icon'} />
      </Flex>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {}
