import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Switch, SwitchThumb, FramerSwitchThumb} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Switch> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <form>
        <Switch {...args}>
          <SwitchThumb />
        </Switch>
      </form>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  css: {},
}

//👇 We create a “template” of how args map to rendering
const Framer: ComponentStory<typeof Switch> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <form>
        <Switch {...args}>
          <FramerSwitchThumb />
        </Switch>
      </form>
    </Container>
  )
}

export const FramerPlayground = Framer.bind({})

FramerPlayground.args = {
  css: {},
}
