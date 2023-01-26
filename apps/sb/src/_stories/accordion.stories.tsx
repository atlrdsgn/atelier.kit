import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/acordion',
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
          <AccordionTrigger>Accordion One</AccordionTrigger>
          <AccordionContent>
            Aute qui sit officia elit non sunt ut amet reprehenderit sit non labore ex excepteur.
            Esse occaecat voluptate deserunt. Sint fugiat amet cillum ad esse duis in labore
            deserunt consectetur.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={'item2'}>
          <AccordionTrigger>Accordion Two</AccordionTrigger>
          <AccordionContent>
            Mollit proident laborum fugiat laborum nulla laborum irure magna nisi adipisicing
            ullamco excepteur. Amet veniam eiusmod laborum quis amet dolore. Ex dolor est aute
            voluptate irure. Occaecat anim dolor laborum commodo.
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
