import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Popover, PopoverContent, PopoverTrigger} from 'atlr.kit'

export default {
  title: 'primitives/popover',
  component: Popover,
  argTypes: {},
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <Popover {...args}>
        <PopoverTrigger>Popover</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    </Container>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
