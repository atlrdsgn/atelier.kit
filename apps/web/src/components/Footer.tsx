import * as React from 'react'
import content from 'atelier.config.json'
import {KitColors} from 'atlr.kit'

import {Container, AtelierKitLogo, Text, Space} from 'atlr.kit'
import {ThemeToggle} from './ThemeToggle'

export const Footer: React.FC = () => {
  const {footer} = content

  return (
    <>
      <Container
        size={'full'}
        align={'center'}
        css={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: '2rem',
          zIndex: 100,
        }}>
        <Text size="sm" css={{paddingBottom: 6}}>
          {footer.text}
        </Text>
        <AtelierKitLogo width={'90'} color={`${KitColors.primaryGray}`} />

        <Space size={'sm'} />
        <ThemeToggle />
      </Container>
    </>
  )
}
