// Button.stories.ts|tsx

import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {ButtonGroupItem, ButtonGroup} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Button Group',
  component: ButtonGroupItem,

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
} as ComponentMeta<typeof ButtonGroupItem>

const CHILDREN_TEXT = 'Kit Button'
const RAINBOW_TEXT = 'Rainbow Button'
const NEON_TEXT = 'Neon Button'
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ButtonGroupItem> = (args) => (
  <ButtonGroup>
    <ButtonGroupItem {...args}>One</ButtonGroupItem>
    <ButtonGroupItem {...args}>Two</ButtonGroupItem>
    <ButtonGroupItem {...args}>Three</ButtonGroupItem>
  </ButtonGroup>
)

export const Primary = Template.bind({})

Primary.args = {
  children: 'Primary Button',
  primary: true,
  size: 'md',
}
