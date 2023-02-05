import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Popover} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Popover> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <Popover {...args}>
        <Popover.Trigger>Popover Trigger</Popover.Trigger>
        <Popover.Anchor />
        <Popover.Content bordered>Sunt do laborum tempor nostrud elit.</Popover.Content>
      </Popover>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  css: {},
}
