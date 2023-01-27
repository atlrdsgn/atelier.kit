import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Grid, Box, KitColors, styled, KitTheme, Container} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/grid',
  component: Grid,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
    justify: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end', 'between', 'around'],
      },
    },
    columns: {
      control: {
        type: 'number',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        defaultValue: 4,
      },
    },
    gap: {
      control: {
        type: 'number',
        options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        defaultValue: 3,
      },
    },
  },
} as ComponentMeta<typeof Grid>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <Container size="full">
      <Grid {...args}>
        <DemoBox>Space One</DemoBox>
        <DemoBox>Space Two</DemoBox>
        <DemoBox>Space Three</DemoBox>
        <DemoBox>Space Four</DemoBox>
      </Grid>
    </Container>
  )
}

export const Playground = Template.bind({})

Playground.args = {
  align: 'center',
  justify: 'between',
  columns: 4,
  gap: 3,

  gapX: 3,
  gapY: 3,

  css: {},
}

const DemoBox = styled(Box, {
  width: 'auto',
  minWidth: '100px',
  height: '40px',
  backgroundColor: KitColors.helios5,
  borderRadius: '6px',

  fontFamily: KitTheme.theme.fonts.mono,
  fontSize: KitTheme.theme.fontSizes.sm,
  color: KitColors.white,

  textAlign: 'center',
  lineHeight: '40px',
  margin: 0,
  justifyContent: 'center',
  alignItems: 'center',
})
