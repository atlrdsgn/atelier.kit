import type {Meta, StoryObj} from '@storybook/react'

import {Input} from './input'

const meta: Meta<typeof Input> = {
  title: 'primitives/input',
  component: Input,
  tags: ['docsPage'],
  argTypes: {
    placeholder: {
      control: 'text',
      name: 'Placeholder',
      defaultValue: 'Placeholder',
    },
    size: {
      control: 'select',
      name: 'Size',
      description: 'Size of the input',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
    },
    style: {
      control: 'select',
      name: 'Style',
      options: ['ghost', 'atelier'],
      defaultValue: 'atelier',
    },
    cursor: {
      control: 'select',
      name: 'Cursor',
      description: 'Cursor type on hover',
      options: ['default', 'text'],
      defaultValue: 'default',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    size: 'sm',
    style: 'atelier',
    cursor: 'default',
  },
}

export const Ghost: Story = {
  args: {
    size: 'sm',
    style: 'ghost',
    cursor: 'default',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    style: 'atelier',
    cursor: 'default',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    style: 'atelier',
    cursor: 'default',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    style: 'atelier',
    cursor: 'default',
  },
}
