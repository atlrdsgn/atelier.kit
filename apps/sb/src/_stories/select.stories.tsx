import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container} from 'atlr.kit'

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectPortal,
  SelectViewport,
  SelectValue,
  SelectIcon,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectGroup,
  SelectLabel,
} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/select',
  component: Select,
} as ComponentMeta<typeof Select>

const options = [
  {
    type: 'Icon',
    value: 'Icon',
  },
  {
    type: 'Accordion',
    value: 'Accordion',
  },
  {
    type: 'Button',
    value: 'Button',
  },
  {
    type: 'Checkbox',
    value: 'Checkbox',
  },
]

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <Select {...args}>
        <SelectTrigger>
          <SelectValue placeholder={'Select an option..'} />
          <SelectIcon />
        </SelectTrigger>
        <SelectPortal>
          <SelectContent sideOffset={5}>
            <SelectScrollUpButton>⌃</SelectScrollUpButton>
            <SelectViewport>
              <SelectGroup>
                <SelectLabel>Primitives</SelectLabel>
                <>
                  {options.map((options) => (
                    <SelectItem key={options.type} value={options.value}>
                      {options.value}
                    </SelectItem>
                  ))}
                </>
              </SelectGroup>
            </SelectViewport>

            <SelectScrollDownButton>⌄</SelectScrollDownButton>
          </SelectContent>
        </SelectPortal>
      </Select>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  css: {},
}
