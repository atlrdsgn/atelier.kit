import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Grid} from 'atlr.kit'
import {styled, KitColors, KitTheme, Container, Section} from 'atlr.kit'

export const GridDemo = () => {
  return (
    <>
      <Container size={'full'} align={'center'}>
        <ComponentName component={'Grid'} />

        <div>
          <Grid align={'stretch'} columns={4} justify={'between'} gap={4}>
            <DemoBox>Space One</DemoBox>
            <DemoBox>Space Two</DemoBox>
            <DemoBox>Space Three</DemoBox>
            <DemoBox>Space Four</DemoBox>
          </Grid>
        </div>
      </Container>
    </>
  )
}

const DemoBox = styled('div', {
  width: 'auto',
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
