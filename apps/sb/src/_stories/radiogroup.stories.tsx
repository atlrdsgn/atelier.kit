import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, RadioGroup, RadioGroupItem, RadioGroupIndicator, RadioLabel} from 'atlr.kit'

export default {
  title: 'primitives/Radio Group',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

const styles = {}

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <RadioGroup {...args}>
        <RadioGroup.Item value="light">
          <RadioGroup.Label>Light</RadioGroup.Label>
          <RadioGroup.Indicator />
        </RadioGroup.Item>

        <RadioGroup.Item value="dark">
          <RadioGroup.Label>Dark</RadioGroup.Label>
          <RadioGroup.Indicator />
        </RadioGroup.Item>

        <RadioGroup.Item value="auto">
          <RadioGroup.Label>Auto</RadioGroup.Label>
          <RadioGroup.Indicator />
        </RadioGroup.Item>
      </RadioGroup>
    </Container>
  )
}

export const Default = Template.bind({})

Default.args = {
  defaultValue: 'light',

  css: styles,
}
