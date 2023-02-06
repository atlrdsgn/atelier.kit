import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Accordion, Section} from 'atlr.kit'
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
              <Accordion.Item value={'item1'} css={{}}>
                <Accordion.Trigger css={{}}>Accordion One</Accordion.Trigger>
                <Accordion.Content css={{width: '100%'}}>
                  Deserunt culpa sunt eiusmod magna excepteur minim in id.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value={'item2'} css={{}}>
                <Accordion.Trigger css={{}}>Accordion Two</Accordion.Trigger>
                <Accordion.Content css={{width: '100%'}}>
                  Deserunt culpa sunt eiusmod magna excepteur minim in id.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </Section>
    </>
  )
}
