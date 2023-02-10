import * as React from 'react'
import {ComponentName} from '@/components/ComponentName'
import {Container, Section, Avi, Space, Icon, IconBox} from 'atlr.kit'

export const AviDemo = () => {
  return (
    <>
      <Section>
        <Container size={'lg'} align={'center'}>
          <ComponentName component={'Avi'} />

          <Space size={'md'} />

          <div>
            <Avi>
              <Avi.Image
                src={
                  'https://pbs.twimg.com/profile_images/1610719884266160130/avDWWNlx_400x400.jpg'
                }
                alt={'alt'}
              />
              <Avi.Fallback />
            </Avi>
          </div>
        </Container>
      </Section>
    </>
  )
}
