import type {Meta, StoryObj} from '@storybook/react'

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from './accordion'

const meta: Meta<typeof Accordion> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/accordion',
  component: Accordion,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Accordion>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const AtelierAccordion: Story = {
  render: () => (
    <>
      <Accordion type={'single'} css={{width: '500px', fontFamily: 'sans-serif'}}>
        <AccordionItem value={'item1'} css={{}}>
          <AccordionTrigger css={{}}>Accordion One</AccordionTrigger>
          <AccordionContent css={{width: '100%'}}>
            Deserunt culpa sunt eiusmod magna excepteur minim in id.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={'item2'} css={{}}>
          <AccordionTrigger css={{}}>Accordion Two</AccordionTrigger>
          <AccordionContent css={{width: '100%'}}>
            Deserunt culpa sunt eiusmod magna excepteur minim in id.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  ),
}
