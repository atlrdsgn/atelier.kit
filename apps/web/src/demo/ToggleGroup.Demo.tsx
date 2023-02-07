import * as React from 'react'
import {ComponentName} from '@/components/ComponentName'
import {Section, ToggleGroup} from 'atlr.kit'
import {Container} from 'atlr.kit'

export const ToggleGroupDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Toggle Group'} />

          <div>
            <form>
              <ToggleGroup type="multiple">
                <>
                  <ToggleGroup.Item value="auto">Auto</ToggleGroup.Item>
                  <ToggleGroup.Item value="light">Light</ToggleGroup.Item>
                  <ToggleGroup.Item value="dark">Dark</ToggleGroup.Item>
                </>
              </ToggleGroup>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
