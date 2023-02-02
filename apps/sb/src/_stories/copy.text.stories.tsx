import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, CopyField, CopyText, CopyTrigger} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Copy Text',
  component: CopyText,

  argTypes: {},
} as ComponentMeta<typeof CopyText>

const COPY_TEXT = 'yarn add atlr.kit'

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CopyText> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <CopyField>
        <CopyText>{COPY_TEXT}</CopyText>
        <CopyTrigger copyText={`${COPY_TEXT}`} />
      </CopyField>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  css: {},
}
