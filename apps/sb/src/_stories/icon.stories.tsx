import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Flex, Icon, KitColors} from 'atlr.kit'

import {
  AddIcon,
  ALogoIcon,
  AtlrFilledIcon,
  AtlrOutlinedIcon,
  SpellCheckIcon,
  LinkedIcon,
  AtlrShapeIcon,
} from 'atlr.icons'

export default {
  title: 'icons/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const color = KitColors.helios5

const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <Container size={'md'} align={'center'}>
      <Flex align={'center'} justify={'between'}>
        <AtlrFilledIcon color={color} />
        <AtlrOutlinedIcon color={color} />
        <AtlrShapeIcon color={color} />
        <ALogoIcon color={color} />
      </Flex>
      <Flex align={'center'} justify={'between'}>
        <SpellCheckIcon />
        <LinkedIcon />
      </Flex>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {}
