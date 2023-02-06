import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Reveal, Section, Space, Text} from 'atlr.kit'
import {Container, Badge, Flex, styled, KitColors, KitTheme} from 'atlr.kit'

export const RevealDemo = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Section>
        <Container size={'lg'} align={'center'}>
          <ComponentName component={'Reveal'} />

          <div>
            <Reveal>
              <Reveal.Trigger>Reveal</Reveal.Trigger>
              <Reveal.Content>Reveal Content</Reveal.Content>
            </Reveal>
          </div>
          <Space size={'lg'} />
          <ComponentName component={'Complex Reveal'} />

          <div>
            <Reveal open={open} onOpenChange={setOpen}>
              <Flex direction={'row'} align={'stretch'} css={{width: '100%'}}>
                <Badge size="sm">@chvndler starred 5 repositories</Badge>
                <Reveal.Trigger>
                  <Text size={'sm'}>{open ? <span>hide</span> : <span>view all</span>}</Text>
                </Reveal.Trigger>
              </Flex>

              <InitialContent>@AtelierDesign/atlr.ds</InitialContent>
              <InitialContent>@atlr-dsgn/rhythm</InitialContent>
              <Reveal.Content>
                <Flex direction={'column'} gap={2} css={{width: '100%'}}>
                  <InitialContent>@radix-ui/colors</InitialContent>
                  <InitialContent>@stitches/react</InitialContent>
                  <InitialContent>@AtelierDesign/atlr.ds</InitialContent>
                  <InitialContent>@rollup/rollup</InitialContent>
                </Flex>
              </Reveal.Content>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}

const InitialContent = styled('div', {
  width: '100%',
  fontFamily: KitTheme.theme.fonts.sans,
  fontSize: 11,
  fontWeight: '600',
  color: 'inherit',
  border: `1px solid ${KitColors.slate7}`,
  borderRadius: 12,
  margin: '3px 0',
  padding: 12,

  textAlign: 'left',
})
