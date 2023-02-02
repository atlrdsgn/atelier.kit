// Button.stories.ts|tsx

import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {
  Container,
  MenuBar,
  MenuBarMenu,
  MenuBarContent,
  MenuBarTrigger,
  MenuBarItem,
  MenuBarSeparator,
  MenuBarSub,
  MenuBarSubContent,
  MenuBarSubTrigger,
  MenuBarRightSlot,
} from 'atlr.kit'
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/Menu Bar',
  component: MenuBar,
  argTypes: {
    bordered: {
      control: {
        type: 'boolean',
        defaultValue: true,
      },
    },
  },
} as ComponentMeta<typeof MenuBar>

const Template: ComponentStory<typeof MenuBar> = (args) => {
  return (
    <Container size={'sm'} align={'center'}>
      <MenuBar {...args}>
        <MenuBarMenu>
          <MenuBarTrigger>File</MenuBarTrigger>
          <MenuBarContent>
            <MenuBarItem>Open</MenuBarItem>
            <MenuBarItem>Save</MenuBarItem>
            <MenuBarItem>Save As</MenuBarItem>
            <MenuBarItem>Close</MenuBarItem>
          </MenuBarContent>
        </MenuBarMenu>

        <MenuBarMenu>
          <MenuBarTrigger>Edit</MenuBarTrigger>
          <MenuBarContent>
            <MenuBarItem>Undo</MenuBarItem>
            <MenuBarItem>Redo</MenuBarItem>
            <MenuBarSeparator />

            <MenuBarSub>
              <MenuBarSubTrigger>
                Sub Menu
                <MenuBarRightSlot>
                  <span>⌘</span>
                </MenuBarRightSlot>
              </MenuBarSubTrigger>
              <MenuBarSubContent sideOffset={8}>
                <MenuBarItem>Sub Item 1</MenuBarItem>
                <MenuBarItem>Sub Item 2</MenuBarItem>
              </MenuBarSubContent>
            </MenuBarSub>
          </MenuBarContent>
        </MenuBarMenu>

        <MenuBarMenu>
          <MenuBarTrigger>Edit Profile</MenuBarTrigger>
          <MenuBarContent>
            <MenuBarItem>Undo</MenuBarItem>
            <MenuBarItem>Redo</MenuBarItem>
            <MenuBarItem>Cut</MenuBarItem>
            <MenuBarItem>Copy</MenuBarItem>
          </MenuBarContent>
        </MenuBarMenu>

        <MenuBarMenu>
          <MenuBarTrigger>Settings</MenuBarTrigger>
          <MenuBarContent>
            <MenuBarItem>Font</MenuBarItem>
            <MenuBarItem>Color Styles</MenuBarItem>
            <MenuBarItem>System Language</MenuBarItem>
            <MenuBarItem>Network Settings</MenuBarItem>
          </MenuBarContent>
        </MenuBarMenu>
      </MenuBar>
    </Container>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  bordered: true,
}

/* --------------------------------------------------------------
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger />
      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Label />
          <Menubar.Item />

          <Menubar.Group>
            <Menubar.Item />
          </Menubar.Group>

          <Menubar.CheckboxItem>
            <Menubar.ItemIndicator />
          </Menubar.CheckboxItem>

          <Menubar.RadioGroup>
            <Menubar.RadioItem>
              <Menubar.ItemIndicator />
            </Menubar.RadioItem>
          </Menubar.RadioGroup>

          <Menubar.Sub>
            <Menubar.SubTrigger />
            <Menubar.Portal>
              <Menubar.SubContent />
            </Menubar.Portal>
          </Menubar.Sub>

          <Menubar.Separator />
          <Menubar.Arrow />
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
----------------------------------------------------- */
