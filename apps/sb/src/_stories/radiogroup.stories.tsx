import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, RadioGroup, RadioGroupItem, RadioGroupIndicator, RadioLabel} from 'atlr.kit'

export default {
  title: 'primitives/radiogroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

const styles = {}

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <RadioGroup {...args}>
        <RadioGroupItem value="light">
          <RadioLabel>Light</RadioLabel>
          <RadioGroupIndicator />
        </RadioGroupItem>

        <RadioGroupItem value="dark">
          <RadioLabel>Dark</RadioLabel>
          <RadioGroupIndicator />
        </RadioGroupItem>

        <RadioGroupItem value="auto">
          <RadioLabel>Auto</RadioLabel>
          <RadioGroupIndicator />
        </RadioGroupItem>
      </RadioGroup>
    </Container>
  )
}

export const Default = Template.bind({})

Default.args = {
  defaultValue: 'light',

  css: styles,
}
