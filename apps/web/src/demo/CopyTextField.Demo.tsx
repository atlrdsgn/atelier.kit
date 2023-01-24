import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Container, CopyField, CopyText, CopyTrigger, Section} from 'atlr.kit'

export const CopyTextFieldDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Copy Text Field'} />

          <div>
            <CopyField>
              <CopyText>npm install --save atlr.kit</CopyText>
              <CopyTrigger copyText={'npm install --save atlr.kit'} />
            </CopyField>
          </div>
        </Container>
      </Section>
    </>
  )
}
