import * as React from 'react'
import {ComponentName} from '@/components/ComponentName'
import {Container, Section, Tip, Space, Icon, IconBox} from 'atlr.kit'

export const TipDemo = () => {
  return (
    <>
      <Section>
        <Container size={'lg'} align={'center'}>
          <ComponentName component={'Tip'} />

          <Space size={'md'} />

          <div>
            <Tip>
              <Tip.Trigger>
                <IconBox border={'true'} color={'heliotrope'}>
                  <Icon variant={'[Info].Icon'} />
                </IconBox>
              </Tip.Trigger>
              <Tip.Content size="sm">This is a Tip example.</Tip.Content>
            </Tip>
          </div>
        </Container>
      </Section>
    </>
  )
}
