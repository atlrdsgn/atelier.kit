import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {
  NavMenu,
  NavMenuContent,
  NavMenuTrigger,
  NavMenuItem,
  NavMenuViewport,
  NavMenuLink,
  NavMenuBar,
} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Nav Menu',
  component: NavMenu,
  argTypes: {},
} as ComponentMeta<typeof NavMenu>

const Template: ComponentStory<typeof NavMenu> = (args) => {
  return (
    <NavMenu {...args}>
      <NavMenuBar>
        <NavMenuItem>
          <NavMenuTrigger>Projects</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink>index</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>

        <NavMenuItem>
          <NavMenuTrigger>Connect</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink>resume/cv</NavMenuLink>
            <NavMenuLink>twitter</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
      </NavMenuBar>

      <NavMenuViewport />
    </NavMenu>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  css: {},
}
