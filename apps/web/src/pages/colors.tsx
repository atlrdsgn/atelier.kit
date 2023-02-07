import * as React from 'react'
import {Container, Flex, KitColors, styled, Space} from 'atlr.kit'
import {AppWrapper} from '@/components/AppWrapper'

function ColorPage() {
  return (
    <>
      <AppWrapper>
        <Container size={'md'} align={'center'}>
          <Flex direction="row" justify={'between'}>
            <ColorBox css={{backgroundColor: KitColors.gray12}} />
            <ColorBox css={{backgroundColor: KitColors.gray11}} />
            <ColorBox css={{backgroundColor: KitColors.gray10}} />
            <ColorBox css={{backgroundColor: KitColors.gray9}} />
            <ColorBox css={{backgroundColor: KitColors.gray8}} />
            <ColorBox css={{backgroundColor: KitColors.gray7}} />
            <ColorBox css={{backgroundColor: KitColors.gray6}} />
            <ColorBox css={{backgroundColor: KitColors.gray5}} />
            <ColorBox css={{backgroundColor: KitColors.gray4}} />
            <ColorBox css={{backgroundColor: KitColors.gray3}} />
            <ColorBox css={{backgroundColor: KitColors.gray2}} />
            <ColorBox css={{backgroundColor: KitColors.gray1}} />
          </Flex>
          <Space size={'sm'} />
          <Flex direction="row" justify={'between'}>
            <ColorBox css={{backgroundColor: KitColors.heliotrope12}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope11}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope10}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope9}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope8}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope7}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope6}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope5}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope4}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope3}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope2}} />
            <ColorBox css={{backgroundColor: KitColors.heliotrope1}} />
          </Flex>
          <Space size={'sm'} />
          <Flex direction="row" justify={'between'}>
            <ColorBox css={{backgroundColor: KitColors.fizz12}} />
            <ColorBox css={{backgroundColor: KitColors.fizz11}} />
            <ColorBox css={{backgroundColor: KitColors.fizz10}} />
            <ColorBox css={{backgroundColor: KitColors.fizz9}} />
            <ColorBox css={{backgroundColor: KitColors.fizz8}} />
            <ColorBox css={{backgroundColor: KitColors.fizz7}} />
            <ColorBox css={{backgroundColor: KitColors.fizz6}} />
            <ColorBox css={{backgroundColor: KitColors.fizz5}} />
            <ColorBox css={{backgroundColor: KitColors.fizz4}} />
            <ColorBox css={{backgroundColor: KitColors.fizz3}} />
            <ColorBox css={{backgroundColor: KitColors.fizz2}} />
            <ColorBox css={{backgroundColor: KitColors.fizz1}} />
          </Flex>

          <Space size={'lg'} />
          <Flex direction="row" justify={'between'}>
            <ColorBox css={{backgroundColor: KitColors.atlr06}} />
            <ColorBox css={{backgroundColor: KitColors.atlr05}} />
            <ColorBox css={{backgroundColor: KitColors.atlr04}} />
            <ColorBox css={{backgroundColor: KitColors.atlr03}} />
            <ColorBox css={{backgroundColor: KitColors.atlr02}} />
            <ColorBox css={{backgroundColor: KitColors.atlr01}} />
            <ColorBox css={{backgroundColor: KitColors.atlr00}} />
          </Flex>
        </Container>
      </AppWrapper>
    </>
  )
}

const ColorBox = styled('div', {
  width: 50,
  height: 50,
  backgroundColor: 'inherit',
  borderRadius: 12,
})

export default ColorPage
