import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Icon} from 'atlr.kit'

export default {
  title: 'primitives/icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <Container size={'md'} align={'center'}>
      <Icon {...args} variant={'Atelier.Icon'} />
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {}
