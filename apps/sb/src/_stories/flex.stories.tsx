import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Flex, Box, KitColors, styled} from 'atlr.kit'
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Flex> = (args) => {
  return (
    <Flex {...args}>
      <DemoBox />
      <DemoBox />
      <DemoBox />
      <DemoBox />
    </Flex>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  align: 'center',
  justify: 'between',
  direction: 'row',
  wrap: 'wrap',

  css: {
    maxWidth: '500px',
  },
}

const DemoBox = styled(Box, {
  width: 'auto',
  minWidth: '100px',
  height: '20px',
  backgroundColor: KitColors.slate5,
  borderRadius: '6px',
})
