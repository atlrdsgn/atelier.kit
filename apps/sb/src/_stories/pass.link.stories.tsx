import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, PassLink} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Pass Link',
  component: PassLink,

  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['inherit', 'xs', 'sm', 'md', 'lg'],
        default: 'inherit',
      },
    },

    underline: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },

    sans: {
      control: {
        type: 'boolean',
        defaultValue: true,
      },
    },

    mono: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },

    color: {
      control: {
        type: 'select',
        options: [
          'inherit',
          'default',
          'slate',
          'white',
          'black',
          'helios',
          'fizz',
          'mauve',
          'sky',
        ],
        default: 'inherit',
      },
    },
  },
} as ComponentMeta<typeof PassLink>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PassLink> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <PassLink {...args} href={'/'}>
        Edit on CodeSandbox
      </PassLink>
    </Container>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  color: 'inherit',
  underline: false,
  mono: false,
  sans: true,
  css: {},
}
