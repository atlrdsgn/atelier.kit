import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Button, Container} from 'atlr.kit'

import {Toast, ToastHeading, ToastSubheading, ToastCloseButton, ToastActionItem} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/toast',
  component: Toast,
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Container size={'sm'} align={'center'}>
      <Button rainbow onClick={() => setIsOpen(true)}>
        Open Toast
      </Button>

      <Toast {...args} open={isOpen} onOpenChange={setIsOpen} duration={5000}>
        <ToastHeading>Lorem Ipsum</ToastHeading>
        <ToastSubheading>
          Esse ex adipisicing officia commodo cillum enim. Please agree to the terms & conditions.
        </ToastSubheading>
        <ToastActionItem altText={'Close'}>Close</ToastActionItem>
      </Toast>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  css: {},
}
