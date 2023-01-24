import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Container, CopyField, CopyText, CopyTrigger} from 'atlr.kit'

export const CopyTextFieldDemo = () => {
  return (
    <>
      <Container size={'md'} align={'center'}>
        <ComponentName component={'Copy Text Field'} />

        <div>
          <CopyField>
            <CopyText>npm install --save atlr.kit</CopyText>
            <CopyTrigger />
          </CopyField>
        </div>
      </Container>
    </>
  )
}
