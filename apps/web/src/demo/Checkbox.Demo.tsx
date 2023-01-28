import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Checkbox, Section} from 'atlr.kit'
import {Container} from 'atlr.kit'

export const CheckboxDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Checkbox'} />

          <div>
            <form>
              <Checkbox.Flex>
                <Checkbox id="checkbox" />
                <Checkbox.Label htmlFor="checkbox">Accept Terms and Conditions</Checkbox.Label>
              </Checkbox.Flex>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
