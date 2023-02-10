import * as React from 'react'
import {Container, Flex, KitColors, styled, Space, Box} from 'atlr.kit'
import {AppWrapper} from '@/components/AppWrapper'

function NameBox({name}: {name: string}) {
  return <NameBoxWrapper css={{}}>{name}</NameBoxWrapper>
}

function ColorPage() {
  return (
    <>
      <AppWrapper>
        <Container size={'lg'} align={'center'}>
          <Flex direction="row" justify={'between'} gap={1}>
            <NameBox name={'silver'} />
            <ColorBox css={{backgroundColor: KitColors.silver12}} />
            <ColorBox css={{backgroundColor: KitColors.silver11}} />
            <ColorBox css={{backgroundColor: KitColors.silver10}} />
            <ColorBox css={{backgroundColor: KitColors.silver9}} />
            <ColorBox css={{backgroundColor: KitColors.silver8}} />
            <ColorBox css={{backgroundColor: KitColors.silver7}} />
            <ColorBox css={{backgroundColor: KitColors.silver6}} />
            <ColorBox css={{backgroundColor: KitColors.silver5}} />
            <ColorBox css={{backgroundColor: KitColors.silver4}} />
            <ColorBox css={{backgroundColor: KitColors.silver3}} />
            <ColorBox css={{backgroundColor: KitColors.silver2}} />
            <ColorBox css={{backgroundColor: KitColors.silver1}} />
          </Flex>
          <Space size={'sm'} />

          <Flex direction="row" justify={'between'} gap={1}>
            <NameBox name={'slate'} />
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

          <Flex direction="row" justify={'between'} gap={1}>
            <NameBox name={'heliotrope'} />
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
        </Container>
      </AppWrapper>
    </>
  )
}

const ColorBox = styled('div', {
  width: 50,
  height: 50,
  minWidth: 20,
  backgroundColor: 'inherit',
  borderRadius: 3,
})

const NameBoxWrapper = styled('div', {
  width: 120,
  minWidth: 60,
  height: 50,
  backgroundColor: 'inherit',
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  margin: 'auto',
  textAlign: 'right',
  flexDirection: 'row',

  // border: '1px solid #000',

  fontFamily: 'monospace',
  fontSize: 12,
})

export default ColorPage
