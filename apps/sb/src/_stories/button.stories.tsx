// Button.stories.ts|tsx

import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Button} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Button',
  component: Button,

  /**
   *
   * argument types.
   */
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },

    primary: {
      control: {
        type: 'boolean',
        defaultValue: true,
      },
    },
    secondary: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    rainbow: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    ghost: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    neon: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
  },
} as ComponentMeta<typeof Button>

const CHILDREN_TEXT = 'Kit Button'
const RAINBOW_TEXT = 'Rainbow Button'
const NEON_TEXT = 'Neon Button'
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>

export const Primary = Template.bind({})

Primary.args = {
  children: 'Primary Button',
  primary: true,
  size: 'sm',
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: CHILDREN_TEXT,
  secondary: true,
  size: 'sm',

  neon: false,
  rainbow: false,
  ghost: false,
}

export const Rainbow = Template.bind({})

Rainbow.args = {
  children: RAINBOW_TEXT,
  size: 'sm',
  rainbow: true,
}

export const Neon = Template.bind({})

Neon.args = {
  children: NEON_TEXT,
  size: 'sm',
  neon: true,
}
