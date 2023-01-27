import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, ToggleGroupPrimitive, ToggleGroupItem} from 'atlr.kit'

export default {
  title: 'primitives/toggle-group',
  component: ToggleGroupPrimitive,
} as ComponentMeta<typeof ToggleGroupPrimitive>

const styles = {}

const Template: ComponentStory<typeof ToggleGroupPrimitive> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <ToggleGroupPrimitive {...args}>
        <ToggleGroupItem value="auto">Auto</ToggleGroupItem>
        <ToggleGroupItem value="light">Light</ToggleGroupItem>
        <ToggleGroupItem value="dark">Dark</ToggleGroupItem>
      </ToggleGroupPrimitive>
    </Container>
  )
}

export const Default = Template.bind({})

Default.args = {
  type: 'single',
  css: styles,
}
