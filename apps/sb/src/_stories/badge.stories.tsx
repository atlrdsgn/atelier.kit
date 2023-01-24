import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Badge} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/badge',
  component: Badge,

  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['1', '2', '3'],
      },
    },

    color: {
      control: {
        type: 'select',
        options: ['slate', 'primary', 'helios', 'fizz'],
      },
    },
  },
} as ComponentMeta<typeof Badge>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args}>{args.children}</Badge>

export const Primary = Template.bind({})

Primary.args = {
  size: '1',
  color: 'slate',
  children: 'Small Badge',
}

export const Medium = Template.bind({})

Medium.args = {
  size: '2',
  color: 'slate',
  children: 'Medium Badge',
}

export const Large = Template.bind({})

Large.args = {
  size: '3',
  color: 'slate',
  children: 'Large Badge',
}
