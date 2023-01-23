import type {Meta, StoryObj} from '@storybook/react'

import {AtelierColors, styled} from '../../theme'
import {Box} from '../box'
import {Grid} from './grid'

const meta: Meta<typeof Grid> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/grid',
  component: Grid,
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
    columns: {
      control: {
        type: 'number',
        name: 'columns',
        description: 'The number of columns',
        defaultValue: 4,
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
    gap: {
      control: {
        type: 'number',
        name: 'gap',
        description: 'The gap between flex items',
        defaultValue: 2,
      },
    },
    gapX: {
      control: {
        type: 'number',
        name: 'gap',
        description: 'The gap between flex items',
        defaultValue: 2,
      },
    },
    gapY: {
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
type Story = StoryObj<typeof Grid>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    align: 'stretch',
    columns: 4,
    justify: 'center',
    gap: 2,
  },
  render: ({...args}) => (
    <>
      <Grid
        {...args}
        align={args.align}
        columns={args.columns}
        justify={args.justify}
        gap={args.gap}
        css={{}}>
        <DemoBox />
        <DemoBox />
        <DemoBox />
        <DemoBox />
      </Grid>
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
