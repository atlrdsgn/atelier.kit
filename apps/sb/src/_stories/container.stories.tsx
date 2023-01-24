import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, KitColors, KitTheme} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'elements/container',
  component: Container,

  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl', 'full'],
      },
    },

    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },

    dev: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
  },
} as ComponentMeta<typeof Container>

const CHILDREN_TEXT = 'Kit Container'

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>{args.children}</Container>
)

export const Playground = Template.bind({})

Playground.args = {
  children: CHILDREN_TEXT,
  size: 'sm',
  align: 'center',
  dev: true,
  css: {
    fontFamily: KitTheme.theme.fonts.sans,
    fontSize: KitTheme.theme.fontSizes.sm,
    fontWeight: KitTheme.theme.fontWeights.semibold,
    color: KitColors.slate11,
  },
}
