import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Tabs, TabsList, TabsTrigger, TabsContent} from 'atlr.kit'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Tabs',
  component: Tabs,

  argTypes: {},
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => {
  return (
    <>
      <Tabs {...args}>
        <TabsList aria-label="tabs example" border={false}>
          <TabsTrigger value={'tab1'} border={false}>
            Tab One
          </TabsTrigger>
          <TabsTrigger value={'tab2'} border={false}>
            Tab Two
          </TabsTrigger>
          <TabsTrigger value={'tab3'} border={false}>
            Tab Three
          </TabsTrigger>
        </TabsList>

        <TabsContent value={'tab1'} align={'left'} border={false}>
          Commodo est adipisicing nulla ad eu veniam.
        </TabsContent>

        <TabsContent value={'tab2'} align={'left'} border={false}>
          Excepteur sit elit ipsum deserunt cupidatat quis eu officia exercitation minim dolore amet
          sunt.
        </TabsContent>

        <TabsContent value={'tab3'} align={'left'} border={false}>
          Eiusmod eiusmod sunt pariatur ut reprehenderit Lorem in reprehenderit eiusmod eiusmod
          ullamco voluptate velit dolor.
        </TabsContent>
      </Tabs>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  defaultValue: 'tab1',
  css: {
    maxWidth: '500px',
  },
}
