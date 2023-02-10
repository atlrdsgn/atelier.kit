import * as React from 'react'

import {Toast, Button} from 'atlr.kit'
import {Container, Section} from 'atlr.kit'
import {ComponentName} from '@/components/ComponentName'

export const ToastDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Section>
        <Container size={'lg'} align={'center'}>
          <ComponentName component={'Toast'} />

          <div>
            <Button midnightShadow onClick={() => setIsOpen(true)}>
              Open Toast
            </Button>

            <Toast open={isOpen} onOpenChange={setIsOpen} duration={5000}>
              <Toast.Heading> Toast </Toast.Heading>
              <Toast.SubHeading>Toast Content</Toast.SubHeading>

              <Toast.Close />
            </Toast>
          </div>
        </Container>
      </Section>
    </>
  )
}
