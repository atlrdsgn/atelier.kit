import Head from 'next/head'
import {Canvas, Text} from 'atlr.kit'

function Typescript(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Typescript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Canvas>
        <Text size={'lg'} weight={'semibold'} mono>
          ATELIER® KIT STORYBOOK
        </Text>
      </Canvas>
    </div>
  )
}

export default Typescript
