import type {Meta, StoryObj} from '@storybook/react'

import {Badge} from './badge'

const meta: Meta<typeof Badge> = {
  title: 'primitives/badge',
  component: Badge,
  tags: ['docsPage'],
  argTypes: {
    children: {
      control: 'text',
      name: 'badge text',
      defaultValue: 'Badge Component',
    },
    size: {
      control: 'select',
      name: 'size',
      options: ['1', '2', '3'],
    },
    color: {
      control: 'select',
      name: 'color',
      options: ['fizz', 'helios', 'slate', 'ghostPill'],
      defaultValue: 'slate',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Fizz: Story = {
  args: {
    size: '1',
    children: 'Badge Component',
    color: 'fizz',
  },
}

export const Helios: Story = {
  args: {
    size: '1',
    children: 'Badge Component',
    color: 'helios',
  },
}

export const Slate: Story = {
  args: {
    size: '1',
    children: 'Badge Component',
    color: 'slate',
  },
}
