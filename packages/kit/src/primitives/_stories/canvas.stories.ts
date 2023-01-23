import type {Meta, StoryObj} from '@storybook/react'

import {Canvas} from './canvas'

const meta: Meta<typeof Canvas> = {
  title: 'primitives/canvas',
  component: Canvas,
  tags: ['docsPage'],
  argTypes: {
    children: {
      control: 'text',
      name: 'Children',
      defaultValue: 'Canvas',
    },
    align: {
      control: 'select',
      name: 'align',
      options: ['center', 'left', 'right'],
      defaultValue: 'center',
    },
    justify: {
      control: 'select',
      name: 'justify',
      options: ['center', 'start', 'end'],
      defaultValue: 'center',
    },
  },
}

export default meta
type Story = StoryObj<typeof Canvas>

export const CanvasNormal: Story = {
  args: {
    children: 'Canvas',
    align: 'center',
    justify: 'center',
  },
}
