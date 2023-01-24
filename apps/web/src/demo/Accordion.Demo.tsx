import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent, Section} from 'atlr.kit'
import {Container} from 'atlr.kit'

export const AccordionDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Accordion'} />

          <div>
            <Accordion
              type={'single'}
              bordered={false}
              css={{width: '500px', fontFamily: 'sans-serif'}}>
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
          </div>
        </Container>
      </Section>
    </>
  )
}
