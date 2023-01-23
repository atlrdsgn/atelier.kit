import type {Meta, StoryObj} from '@storybook/react'

import {AtelierKitTheme} from '../../theme'
import {Container} from './container'

const meta: Meta<typeof Container> = {
  title: 'primitives/container',
  component: Container,
  tags: ['docsPage', 'container'],
  argTypes: {
    children: {
      control: 'text',
      name: 'children',
      defaultValue: 'Container',
    },
    align: {
      control: 'select',
      name: 'align',
      options: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
    size: {
      control: 'select',
      name: 'size',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      defaultValue: 'sm',
    },
    dev: {
      control: 'boolean',
      name: 'dev',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const ContainerComponent: Story = {
  render: ({...args}) => (
    <Container
      {...args}
      size={args.size}
      align={args.align}
      css={{
        fontFamily: AtelierKitTheme.theme.fonts.sans,
        border: '1px solid black',
        width: '100%',
      }}>
      {args.children}
    </Container>
  ),
}
