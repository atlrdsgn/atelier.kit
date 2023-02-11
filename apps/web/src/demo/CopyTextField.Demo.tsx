import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Container, CopyField, Section} from 'atlr.kit'

export const CopyTextFieldDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Copy Text Field'} />

          <div>
            <CopyField>
              <CopyField.Text>npm install --save atlr.kit</CopyField.Text>
              <CopyField.Trigger copyText={'npm install --save atlr.kit'} />
            </CopyField>
          </div>
        </Container>
      </Section>
    </>
  )
}
