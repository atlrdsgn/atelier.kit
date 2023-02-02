import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Reveal, RevealContent, RevealTrigger} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Reveal',
  component: Reveal,
} as ComponentMeta<typeof Reveal>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Reveal> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <Reveal>
        <RevealTrigger>Reveal</RevealTrigger>
        <RevealContent>
          <p>Reveal Content</p>
        </RevealContent>
      </Reveal>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  css: {},
}
