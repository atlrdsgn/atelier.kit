import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Footer} from 'atlr.kit'

export default {
  title: 'elements/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Footer> = (args) => {
  return <Footer {...args}>{args.children}</Footer>
}

export const Playground = Template.bind({})

Playground.args = {
  children: 'Footer',
  css: {
    border: '1px solid red',
  },
}
