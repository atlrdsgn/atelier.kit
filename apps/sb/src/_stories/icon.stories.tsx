import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Flex, Icon, KitColors} from 'atlr.kit'

export default {
  title: 'primitives/icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const color = KitColors.helios5

const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <Container size={'md'} align={'center'}>
      <Flex align={'center'} justify={'between'}>
        <Icon {...args} variant={'Atelier.Icon'} color={color} />
        <Icon {...args} variant={'Atelier.Filled.Icon'} color={color} />
        <Icon {...args} variant={'Apple.Icon'} color={color} />
        <Icon {...args} variant={'ArrowDown.Icon'} color={color} />
        <Icon {...args} variant={'Butterfly.Icon'} color={color} />
        <Icon {...args} variant={'CodeSandbox.Icon'} color={color} />
        <Icon {...args} variant={'CodeSandbox2.Icon'} color={color} />
        <Icon {...args} variant={'Mail.Icon'} color={color} />
        <Icon {...args} variant={'YouTube.Icon'} color={color} />
        <Icon {...args} variant={'Typescript.Icon'} color={color} />
        <Icon {...args} variant={'X.Icon'} color={color} />
      </Flex>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {}
