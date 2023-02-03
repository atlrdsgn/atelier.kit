import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Avatar, AvatarImage} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Avatar',
  component: Avatar,

  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
  },
} as ComponentMeta<typeof Avatar>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}>
    <AvatarImage
      src={'https://pbs.twimg.com/profile_images/1610719884266160130/avDWWNlx_400x400.jpg'}
      alt={'avatar-example'}
    />
  </Avatar>
)

export const Default = Template.bind({})

Default.args = {
  size: 'sm',
}
