import * as React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Canvas, Text} from 'atlr.kit'

export default {
  title: 'elements/Canvas',
  component: Canvas,
} as ComponentMeta<typeof Canvas>

const CHILDREN_TEXT = '( Centered Content )'
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Canvas> = ({...args}) => (
  <Canvas {...args}>
    <Text size="md" weight="semibold">
      {CHILDREN_TEXT}
    </Text>
  </Canvas>
)

export const Playground = Template.bind({})

Playground.args = {
  children: CHILDREN_TEXT,
}
