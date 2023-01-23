import type {Meta, StoryObj} from '@storybook/react'

import {Switch} from './switch'

const meta: Meta<typeof Switch> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/switch',
  component: Switch,
  tags: ['primitives', 'docsPage'],
  argTypes: {
    /* 👇 The argTypes prop is optional.
     * See https://storybook.js.org/docs/7.0/react/api/argtypes
     * to learn how to configure argTypes
     * */
    asChild: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    defaultChecked: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    checked: {
      control: {
        type: 'boolean',
        defaultValue: true,
      },
    },
    onCheckedChange: {
      control: {
        type: 'function',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    required: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    name: {
      control: {
        type: 'text',
        defaultValue: 'switch',
      },
    },
    value: {
      control: {
        type: 'text',
        defaultValue: 'switch',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => (
    <>
      <Switch name={'AtelierSwitch'} />
    </>
  ),
}
