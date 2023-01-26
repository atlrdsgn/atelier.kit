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
        options: ['sm', 'md', 'lg'],
      },
    },

    color: {
      control: {
        type: 'select',
        options: ['initial', 'slate', 'helios', 'heliotrope', 'fizz', 'gold', 'subtle'],
      },
    },

    pill: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
  },
} as ComponentMeta<typeof Badge>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args}>{args.children}</Badge>

export const Default = Template.bind({})

Default.args = {
  pill: true,
  size: 'sm',
  color: 'initial',
  children: 'Default Badge',
}

export const Medium = Template.bind({})

Medium.args = {
  pill: true,
  size: 'md',
  color: 'initial',
  children: 'Medium Badge',
}

export const Large = Template.bind({})

Large.args = {
  pill: true,
  size: 'lg',
  color: 'initial',
  children: 'Large Badge',
}
