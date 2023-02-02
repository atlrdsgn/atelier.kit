import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Space} from 'atlr.kit'

export default {
  title: 'elements/Space',
  component: Space,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
  },
} as ComponentMeta<typeof Space>

const styles = {}

const Template: ComponentStory<typeof Space> = (args) => {
  return <Space {...args} />
}

export const Default = Template.bind({})

Default.args = {
  size: 'xs',
  devFlag: true,
  css: styles,
}

export const Sizes = Template.bind({})

Sizes.args = {
  size: 'sm',
  devFlag: true,
  css: styles,
}
