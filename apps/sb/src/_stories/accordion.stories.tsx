import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from 'atlr.kit'

export default {
  title: 'primitives/Accordion',
  component: Accordion,

  argTypes: {
    bordered: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },

    type: {
      control: {
        type: 'select',
        options: ['single', 'multiple'],
      },
    },

    css: {
      control: {
        type: 'object',
      },
    },
  },
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => {
  return (
    <>
      <Accordion {...args}>
        <AccordionItem value={'item1'}>
          <AccordionTrigger>Basic Accordion Primitive</AccordionTrigger>
          <AccordionContent>
            Aute qui sit officia elit non sunt ut amet reprehenderit sit non labore ex excepteur.
            Esse occaecat voluptate deserunt.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={'item2'}>
          <AccordionTrigger>Item Number Two</AccordionTrigger>
          <AccordionContent>
            Mollit proident laborum fugiat laborum nulla laborum irure magna nisi adipisicing
            ullamco excepteur.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  bordered: true,
  type: 'single',

  css: {
    width: '500px',
  },
}
