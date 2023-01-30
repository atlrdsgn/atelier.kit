import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import {Button, Canvas, Flex, KitColors, Space} from 'atlr.kit'
import {AtelierKitLogo} from 'atlr.kit'
import {AppWrapper} from '@/components/AppWrapper'
import {BlurredCanvas} from '@/components/BlurredCanvas'
import mainBackdrop from '../../public/main.png'

const logoColor = KitColors.fizz3

function Index() {
  return (
    <>
      <Head>
        <title>Atelier® Kit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppWrapper>
        <Canvas css={{zIndex: 100}}>
          <Flex direction="column" align="center" justify="center">
            <AtelierKitLogo width={'260'} color={logoColor} />
            <Space size={'xs'} />
            <Button size="sm" href="/components" secondary>
              View Components
            </Button>
          </Flex>
        </Canvas>

        <BlurredCanvas />
        <Image src={mainBackdrop} alt="src" fill style={{width: '100%', height: '100%'}} />
      </AppWrapper>
    </>
  )
}

export default Index
