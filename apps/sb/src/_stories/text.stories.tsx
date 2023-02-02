import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Text} from 'atlr.kit'

export default {
  title: 'typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const OPTIONS = 'Sample Text'
const OPTIONS_SIZE = 'This is `md` text, change the size below'

const styles = {}

const Template: ComponentStory<typeof Text> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <Text {...args} />
    </Container>
  )
}

export const Default = Template.bind({})

Default.args = {
  children: OPTIONS,

  size: 'sm',
  weight: 'normal',
  color: 'slate',
  css: styles,
}

export const Sizes = Template.bind({})

Sizes.args = {
  children: OPTIONS_SIZE,
  size: 'md',
  weight: 'semibold',
  color: 'slate',
  css: {
    ...styles,
  },
}
