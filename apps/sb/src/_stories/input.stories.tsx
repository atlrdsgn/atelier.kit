import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Input, InputWithLabel} from 'atlr.kit'

export default {
  title: 'primitives/input',
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
} as ComponentMeta<typeof Input>

const styles = {}

/**
 *
 *
 * INPUT PRIMITIVE
 */
const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <>
      <Container size="sm" align="center">
        <Input {...args} />
      </Container>
    </>
  )
}

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Placeholder',
  size: 'md',
  css: styles,
}

/**
 *
 *
 *
 * WITH LABEL..
 */
const TemplateWithLabel: ComponentStory<typeof InputWithLabel> = (args) => {
  return (
    <>
      <Container size="sm" align="center">
        <InputWithLabel {...args} />
      </Container>
    </>
  )
}

export const WithLabel = TemplateWithLabel.bind({})

WithLabel.args = {
  label: 'First Name',
  placeholder: 'Placeholder',
  size: 'sm',
  css: styles,
}
