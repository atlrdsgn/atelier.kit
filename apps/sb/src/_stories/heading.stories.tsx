import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Heading} from 'atlr.kit'
export default {
  title: 'typography/Heading',
  component: Heading,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['1', '2', '3'],
      },
    },
  },
} as ComponentMeta<typeof Heading>

const OPTIONS = 'Heading One'
const OPTIONS_SIZE = 'This is size `2` heading, change the size below'

const styles = {}

const Template: ComponentStory<typeof Heading> = (args) => {
  return (
    <Container size={'md'} align={'center'}>
      <Heading {...args} />
    </Container>
  )
}

export const Default = Template.bind({})

Default.args = {
  children: OPTIONS,

  size: '1',
  color: 'slate',
  css: styles,
}

export const Sizes = Template.bind({})

Sizes.args = {
  children: OPTIONS_SIZE,
  size: '2',

  color: 'slate',
  css: {
    ...styles,
  },
}
