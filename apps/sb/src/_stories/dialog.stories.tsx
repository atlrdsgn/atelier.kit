import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container} from 'atlr.kit'

import {Dialog, DialogContent} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Dialog> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <Dialog {...args}>
        <Dialog.Trigger>Trigger Dialog</Dialog.Trigger>
        <DialogContent>
          <div>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut
                aliquet aliquam, nunc nisl aliquet nunc, eget
              </>
            </Dialog.Description>
          </div>
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  css: {},
}
