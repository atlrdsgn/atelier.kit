import * as React from 'react'
import {Container, Menubar, Section} from 'atlr.kit'
import {ComponentName} from '@/components/ComponentName'

export const MenubarDemo = () => {
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Menubar'} />

          <div>
            <Menubar bordered>
              <Menubar.Menu>
                <Menubar.Trigger white>File</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>Open</Menubar.Item>
                  <Menubar.Item>Save</Menubar.Item>
                  <Menubar.Item>Save As</Menubar.Item>
                  <Menubar.Item>Close</Menubar.Item>
                </Menubar.Content>
              </Menubar.Menu>

              <Menubar.Menu>
                <Menubar.Trigger white>Edit</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>Undo</Menubar.Item>
                  <Menubar.Item>Redo</Menubar.Item>
                  <Menubar.Item>Cut</Menubar.Item>
                  <Menubar.Separator />
                  <Menubar.SubMenu>
                    <Menubar.SubTrigger>
                      Settings
                      <Menubar.SlotRight>⌘</Menubar.SlotRight>
                    </Menubar.SubTrigger>
                    <Menubar.SubContent>
                      <Menubar.Item>Support</Menubar.Item>
                      <Menubar.Item>Feedback</Menubar.Item>
                      <Menubar.Item>Learn More</Menubar.Item>
                    </Menubar.SubContent>
                  </Menubar.SubMenu>
                </Menubar.Content>
              </Menubar.Menu>

              <Menubar.Menu>
                <Menubar.Trigger white>View</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>Open</Menubar.Item>
                  <Menubar.Item>Save</Menubar.Item>
                  <Menubar.Item>Save As</Menubar.Item>
                  <Menubar.Item>Close</Menubar.Item>
                </Menubar.Content>
              </Menubar.Menu>

              <Menubar.Menu>
                <Menubar.Trigger white>Help</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>Open</Menubar.Item>
                  <Menubar.Item>Save</Menubar.Item>
                  <Menubar.Item>Save As</Menubar.Item>
                  <Menubar.Item>Close</Menubar.Item>
                </Menubar.Content>
              </Menubar.Menu>
            </Menubar>
          </div>
        </Container>
      </Section>
    </>
  )
}
