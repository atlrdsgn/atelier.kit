import Head from 'next/head'
import {Canvas, Space, Text, KitColors, KitLogo, Container} from 'atlr.kit'

const color = KitColors.heliotrope5

export default function Home() {
  return (
    <>
      <Head>
        <title>Atelier® Kit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas>
        <Container size={'md'}>
          <KitLogo color={color} width={'160'} />
          <Space size={'sm'} />
          <Text size={'lg'} weight={'semibold'} mono>
            ATELIER® KIT STORYBOOK
          </Text>
        </Container>
      </Canvas>
    </>
  )
}
