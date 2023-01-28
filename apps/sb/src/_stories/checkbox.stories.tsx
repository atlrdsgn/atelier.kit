import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Container, Checkbox} from 'atlr.kit'

export default {
  title: 'primitives/checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <Container size={'md'} align={'center'}>
      <form>
        <Checkbox.Flex>
          <Checkbox {...args} />
          <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
        </Checkbox.Flex>
      </form>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  type: 'button',
  css: {},
}
