import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, PassLink} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/pass.link',
  component: PassLink,
} as ComponentMeta<typeof PassLink>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PassLink> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <PassLink href={'/'}>Edit on CodeSandbox</PassLink>
    </Container>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  css: {},
}
