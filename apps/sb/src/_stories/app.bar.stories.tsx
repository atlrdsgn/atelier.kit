import type {Meta, StoryObj} from '@storybook/react'

import {Appbar, AppbarSpot} from 'atlr.kit'

const meta: Meta<typeof Appbar> = {
  title: 'primitives/app-bar',
  component: Appbar,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Appbar>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const AppBar: Story = {
  args: {},
  render: ({...args}) => (
    <>
      <Appbar {...args}>
        <AppbarSpot alignment={'start'}>
          <span>home</span>
        </AppbarSpot>

        <AppbarSpot alignment={'center'}>
          <span>Atelier® Kit</span>
        </AppbarSpot>

        <AppbarSpot alignment={'end'}>
          <span>theme</span>
        </AppbarSpot>
      </Appbar>
    </>
  ),
}

export const AppbarControl: Story = {
  argTypes: {},

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
