import type {Meta, StoryObj} from '@storybook/react'

import {Box} from '../box'
import {Text} from '../text'
import {Tabs, TabsContent, TabsList, TabsTrigger} from './tabs'

const meta: Meta<typeof Tabs> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/tabs',
  component: Tabs,
  tags: ['primitives', 'tabs', 'tab', 'docsPage'],
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
        description: 'The orientation of the tabs',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const TabsComponent: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: ({...args}) => (
    <>
      <Tabs orientation={args.orientation} defaultValue={'one'} css={{}}>
        <TabsList css={{}}>
          <TabsTrigger value={'one'}>
            <span>Tab 1</span>
          </TabsTrigger>
          <TabsTrigger value={'two'}>
            <span>Tab 2</span>
          </TabsTrigger>
          <TabsTrigger value={'three'}>
            <span>Tab 3</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={'one'}>
          Ad velit occaecat eiusmod ad magna cupidatat deserunt velit mollit deserunt eiusmod
          consequat anim.
        </TabsContent>
        <TabsContent value={'two'}>
          Fugiat esse aute nisi cillum. Ullamco Lorem consequat nostrud aute laborum dolor ex.
          Mollit cupidatat cillum magna reprehenderit occaecat adipisicing do pariatur eiusmod irure
          mollit in. Lorem id ad aliqua esse officia velit exercitation fugiat veniam nisi. Proident
          sit ut commodo consequat fugiat proident tempor pariatur aute.
        </TabsContent>
        <TabsContent value={'three'}>
          Ad velit occaecat eiusmod ad magna cupidatat deserunt velit mollit deserunt eiusmod
          consequat anim.
        </TabsContent>
      </Tabs>
    </>
  ),
}
