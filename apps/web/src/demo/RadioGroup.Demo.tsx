import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {RadioGroup, RadioGroupIndicator, RadioGroupItem, RadioLabel, Section} from 'atlr.kit'
import {Container} from 'atlr.kit'

export const RadioGroupDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Radio Group'} />

          <div>
            <form>
              <RadioGroup defaultValue={'Light'}>
                <RadioGroupItem value={'Light'}>
                  <RadioGroupIndicator />
                  <RadioLabel>Light</RadioLabel>
                </RadioGroupItem>

                <RadioGroupItem value={'Dark'}>
                  <RadioGroupIndicator />
                  <RadioLabel>Dark</RadioLabel>
                </RadioGroupItem>

                <RadioGroupItem value={'Auto'}>
                  <RadioGroupIndicator />
                  <RadioLabel>Auto</RadioLabel>
                </RadioGroupItem>
              </RadioGroup>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
