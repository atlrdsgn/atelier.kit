import type {Meta, StoryObj} from '@storybook/react'

import {AtelierColors, styled} from '../../theme'
import {Box} from '../box'
import {Flex} from './flex'

const meta: Meta<typeof Flex> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/flex',
  component: Flex,
  argTypes: {
    align: {
      control: {
        type: 'select',
        name: 'align',
        options: ['start', 'end', 'center', 'baseline', 'stretch'],
        description: 'Aligns flex items along the cross axis',
        defaultValue: 'stretch',
      },
    },
    direction: {
      control: {
        type: 'select',
        name: 'direction',
        options: ['row', 'row-reverse', 'column', 'column-reverse'],
        description: 'Defines the direction flex items are placed in the flex container',
        defaultValue: 'row',
      },
    },
    justify: {
      control: {
        type: 'select',
        name: 'justify',
        options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
        description: 'Aligns flex items along the main axis',
        defaultValue: 'start',
      },
    },
    wrap: {
      control: {
        type: 'select',
        name: 'wrap',
        options: ['nowrap', 'wrap', 'wrap-reverse'],
        description:
          'Defines whether flex items are forced in a single line or can be wrapped onto multiple lines',
        defaultValue: 'nowrap',
      },
    },
    gap: {
      control: {
        type: 'number',
        name: 'gap',
        description: 'The gap between flex items',
        defaultValue: 2,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Flex>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    align: 'stretch',
    direction: 'row',
    justify: 'center',
    wrap: 'wrap',
    gap: 2,
  },
  render: ({...args}) => (
    <>
      <Flex
        {...args}
        align={args.align}
        direction={args.direction}
        justify={args.justify}
        wrap={args.wrap}
        gap={args.gap}
        css={{}}>
        <DemoBox />
        <DemoBox />
        <DemoBox />
        <DemoBox />
        <DemoBox />
      </Flex>
    </>
  ),
}

const DemoBox = styled(Box, {
  width: 'auto',
  minWidth: '100px',
  height: '20px',
  backgroundColor: AtelierColors.slate5,
  borderRadius: '6px',
})
