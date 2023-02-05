import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Container, Flex, Icon, KitColors, Space} from 'atlr.kit'

import {
  AddIcon,
  ALogoIcon,
  AtlrFilledIcon,
  AtlrOutlinedIcon,
  SpellCheckIcon,
  LinkedIcon,
  AtlrShapeIcon,
  TwitterIcon,
  ArenaIcon,
  DocumentIcon,
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
        <TwitterIcon color={color} />
        <ArenaIcon color={color} />
      </Flex>
      <Space size={'md'} />
      <Flex align={'center'} justify={'between'}>
        <DocumentIcon color={color} />
      </Flex>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {}
