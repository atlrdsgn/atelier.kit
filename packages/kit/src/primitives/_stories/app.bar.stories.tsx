import type {Meta, StoryObj} from '@storybook/react'

import {Appbar} from './app.bar'

const meta: Meta<typeof Appbar> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/app-bar',
  component: Appbar,
  tags: ['primitives', 'app-bar', 'appbar', 'docsPage'],
  argTypes: {
    size: {
      control: 'select',
      options: ['3', '2', '1'],
      name: 'size',
      description: 'The href to link to',
      defaultValue: '2',
    },
    color: {
      control: 'select',
      name: 'color',
      options: ['loContrast', 'plain', 'transparent'],
      description: 'The background-color of the appbar',
      defaultValue: 'transparent',
    },
    glass: {
      control: 'boolean',
      type: 'boolean',
      name: 'glass',
      description: 'Whether the appbar has a glass effect',
      defaultValue: false,
    },
    border: {
      control: 'boolean',
      type: 'boolean',
      name: 'border',
      description: 'Whether the appbar has a border',
      defaultValue: false,
    },
    fixed: {
      control: 'boolean',
      type: 'boolean',
      name: 'fixed',
      description: 'Whether the appbar is fixed',
      defaultValue: false,
    },
    sticky: {
      control: 'boolean',
      type: 'boolean',
      name: 'sticky',
      description: 'Whether the appbar is sticky',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof Appbar>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const AppBar: Story = {
  args: {
    size: '2',
    glass: true,
    border: true,
    fixed: true,
    sticky: false,
  },
  render: ({...args}) => (
    <>
      <Appbar {...args}>
        <span>home</span>
        <span>Atelier® Kit</span>
        <span>theme</span>
      </Appbar>
    </>
  ),
}

export const AppbarControl: Story = {
  argTypes: {
    size: {
      control: 'select',
      options: ['3', '2', '1'],
      name: 'size',
      description: 'The href to link to',
      defaultValue: '2',
    },
    color: {
      control: 'select',
      name: 'color',
      options: ['loContrast', 'plain', 'transparent'],
      description: 'The background-color of the appbar',
      defaultValue: 'plain',
    },
    glass: {
      control: 'boolean',
      type: 'boolean',
      name: 'glass',
      description: 'Whether the appbar has a glass effect',
      defaultValue: false,
    },
    border: {
      control: 'boolean',
      type: 'boolean',
      name: 'border',
      description: 'Whether the appbar has a border',
      defaultValue: false,
    },
    fixed: {
      control: 'boolean',
      type: 'boolean',
      name: 'fixed',
      description: 'Whether the appbar is fixed',
      defaultValue: false,
    },
    sticky: {
      control: 'boolean',
      type: 'boolean',
      name: 'sticky',
      description: 'Whether the appbar is sticky',
      defaultValue: false,
    },
  },

  render: ({...args}) => (
    <>
      <Appbar {...args}>
        <span>home</span>
        <span>Atelier® Kit</span>
        <span>theme</span>
      </Appbar>
    </>
  ),
}
