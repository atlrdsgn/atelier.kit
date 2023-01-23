import type {Meta, StoryObj} from '@storybook/react'

import {PassLink} from './pass-link'

const meta: Meta<typeof PassLink> = {
  title: 'primitives/pass-link',
  component: PassLink,
  tags: ['docsPage'],
  argTypes: {
    children: {
      control: 'text',
      name: 'children',
      description: 'The styled text to display in the link',
      defaultValue: 'Pass link',
    },
    href: {
      control: 'select',
      name: 'url',
      description: 'The url to link to',
      options: ['https://www.google.com', 'https://www.facebook.com', 'https://www.twitter.com'],
      defaultValue: 'https://www.google.com',
    },
    underline: {
      control: 'boolean',
      name: 'underline',
      description: 'Whether to underline the link on hover',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof PassLink>

export const DefaultPassLink: Story = {
  args: {
    children: 'Pass link',
    href: 'https://www.google.com',
    underline: false,
  },
}
