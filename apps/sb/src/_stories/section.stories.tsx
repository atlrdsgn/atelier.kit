import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Section, KitColors, KitTheme} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'elements/Section',
  component: Section,

  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl', 'full'],
      },
    },

    hero: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },

    responsive: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },

    fluid: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },

    dev: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
  },
} as ComponentMeta<typeof Section>

const CHILDREN_TEXT = 'Kit Section Element'

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>{args.children}</Section>
)

export const Playground = Template.bind({})

Playground.args = {
  children: CHILDREN_TEXT,
  hero: false,
  responsive: false,
  fluid: false,
  size: 'sm',
  dev: true,
  css: {
    fontFamily: KitTheme.theme.fonts.sans,
    fontSize: KitTheme.theme.fontSizes.sm,
    fontWeight: KitTheme.theme.fontWeights.semibold,
    color: KitColors.slate11,
  },
}
