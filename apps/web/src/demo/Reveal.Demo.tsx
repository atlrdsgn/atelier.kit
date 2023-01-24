import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Reveal, RevealContent, RevealTrigger, Section, Space, Text} from 'atlr.kit'
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
              <RevealTrigger>Reveal</RevealTrigger>
              <RevealContent>Reveal Content</RevealContent>
            </Reveal>
          </div>
          <Space size={'lg'} />
          <ComponentName component={'Complex Reveal'} />

          <div>
            <Reveal open={open} onOpenChange={setOpen}>
              <Flex direction={'row'} align={'stretch'} css={{width: '100%'}}>
                <Badge size="1">@chvndler starred 5 repositories</Badge>
                <RevealTrigger asChild>
                  <Text size={'sm'}>{open ? <span>hide</span> : <span>view all</span>}</Text>
                </RevealTrigger>
              </Flex>

              <InitialContent>@AtelierDesign/atlr.ds</InitialContent>
              <InitialContent>@atlr-dsgn/rhythm</InitialContent>
              <RevealContent>
                <Flex direction={'column'} gap={2} css={{width: '100%'}}>
                  <InitialContent>@radix-ui/colors</InitialContent>
                  <InitialContent>@stitches/react</InitialContent>
                  <InitialContent>@AtelierDesign/atlr.ds</InitialContent>
                  <InitialContent>@rollup/rollup</InitialContent>
                </Flex>
              </RevealContent>
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
