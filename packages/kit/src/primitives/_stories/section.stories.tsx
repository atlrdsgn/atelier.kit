import type {Meta, StoryObj} from '@storybook/react'

import {Section} from './section'

const meta: Meta<typeof Section> = {
  title: 'primitives/section',
  component: Section,
  tags: ['docsPage'],
  argTypes: {
    children: {
      control: 'text',
      name: 'children',
      description: 'The content of the section',
      defaultValue: 'SECTION',
    },
    size: {
      control: 'select',
      name: 'size',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of the section (padding top and bottom',
      defaultValue: 'sm',
    },
    dev: {
      control: 'boolean',
      name: 'dev flag',
      description: 'Throws a dev flag on the section - showing you the size of the section',
      defaultValue: true,
    },
    responsive: {
      control: 'boolean',
      name: 'responsive',
      description: 'Whether the section is responsive',
      defaultValue: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof Section>

export const SectionComponent: Story = {
  render: ({...args}) => (
    <Section {...args} size={args.size} dev={args.dev} responsive={args.responsive} css={{}}>
      {args.children}
    </Section>
  ),
}
