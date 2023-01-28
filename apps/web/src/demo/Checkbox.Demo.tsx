import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Checkbox, CheckboxFlex, CheckboxLabel, Section} from 'atlr.kit'
import {Container} from 'atlr.kit'

export const CheckboxDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Checkbox'} />

          <div>
            <form>
              <CheckboxFlex>
                <Checkbox id="checkbox" />
                <CheckboxLabel htmlFor="checkbox">Accept Terms and Conditions</CheckboxLabel>
              </CheckboxFlex>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
