import type {Meta, StoryObj} from '@storybook/react'
import {Text} from '../text'

import {Space} from './space'

const meta: Meta<typeof Space> = {
  title: 'primitives/space',
  component: Space,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      control: {type: 'select'},
      defaultValue: 'sm',
      description: 'The height of the space',
    },
    devFlag: {
      control: {type: 'boolean'},
      defaultValue: false,
      description: 'Whether to show a dev flag',
    },
  },
}

export default meta
type Story = StoryObj<typeof Space>

export const DefaultStory: Story = {
  render: ({...args}) => <Space {...args} size={args.size} devFlag={args.devFlag} />,
}

export const WithContents: Story = {
  render: ({...args}) => (
    <>
      <Text>Top</Text>
      <Space {...args} size={args.size} devFlag={args.devFlag} />
      <Text>Bottom</Text>
    </>
  ),
}
