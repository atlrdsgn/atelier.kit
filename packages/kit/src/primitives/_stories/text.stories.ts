import type {Meta, StoryObj} from '@storybook/react'

import {Text} from './text'

const meta: Meta<typeof Text> = {
  title: 'primitives/text',
  component: Text,
  tags: ['docsPage'],
  argTypes: {
    children: {
      control: 'text',
      name: 'Text',
      defaultValue: 'Text 1',
    },
    size: {
      control: 'select',
      name: 'size',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: 'select',
      name: 'weight',
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'heavy'],
      defaultValue: 'normal',
    },
    color: {
      control: 'select',
      name: 'color',
      options: ['primary', 'secondary', 'slate'],
      defaultValue: 'slate',
    },
    align: {
      control: 'select',
      name: 'align',
      options: ['left', 'center'],
      defaultValue: 'left',
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Text',
    weight: 'bold',
    color: 'slate',
    align: 'center',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Text',
    weight: 'bold',
    color: 'slate',
    align: 'center',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Text',
    weight: 'bold',
    color: 'slate',
    align: 'center',
  },
}

export const XLarge: Story = {
  args: {
    size: 'xl',
    children: 'XLarge Text',
    weight: 'bold',
    color: 'slate',
    align: 'center',
  },
}

export const XXLarge: Story = {
  args: {
    size: '2xl',
    children: '2XLarge Text',
    weight: 'bold',
    color: 'slate',
    align: 'center',
  },
}
