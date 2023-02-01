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
} from 'atlr.icons'

export default {
  title: 'primitives/icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const color = KitColors.helios5

const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <Container size={'md'} align={'center'}>
      <Flex align={'center'} justify={'between'}>
        <ALogoIcon />
        <AtlrFilledIcon />
        <AtlrOutlinedIcon />

        <SpellCheckIcon />
        <LinkedIcon />
      </Flex>

      <Flex align={'center'} justify={'between'}>
        <Icon {...args} variant={'[A].Filled.Icon'} color={color} />
        <Icon {...args} variant={'[A].Bordered.Icon'} color={color} />
        <Icon {...args} variant={'[4K].Icon'} color={color} />
        <Icon {...args} variant={'[HD].Icon'} color={color} />
        <Icon {...args} variant={'[SD].Icon'} color={color} />
      </Flex>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {}
