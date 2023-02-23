import content from 'atelier.config.json'
import {Text, styled, KitTheme, KitColors, Button, Space, Flex} from 'atlr.kit'

import {Container, AtelierKitLogo} from 'atlr.kit'

export const Header: React.FC = () => {
  const {commands, intro} = content

  return (
    <SectionHeader>
      <Container>
        <Container size={'sm'} align={'center'} css={{}}>
          <AtelierKitLogo width={'220'} color={`${KitColors.helios5}`} />
        </Container>
        <Text
          css={{
            paddingTop: '0.6rem',
            paddingBottom: '3.5rem',
            fontSize: 38,
            fontWeight: KitTheme.theme.fontWeights.semibold,
            letterSpacing: '-0.05em',
            lineHeight: '1',
            textAlign: 'center',

            '@bp1': {
              fontSize: '72px',
            },

            '@bp2': {
              fontSize: '96px',
            },

            '@bp3': {
              fontSize: '144px',
            },
          }}
          dangerouslySetInnerHTML={{__html: intro.title}}
        />

        {/*
      <Box css={{maxWidth: '100%'}}>
        <CodeBlock>{commands.import}</CodeBlock>
      </Box>
*/}

        <Space size={'sm'} />

        <Flex direction="row" align="center" justify="center" gap={2}>
          <Button size={'sm'} secondary>
            Get Started
          </Button>
          <Button href={'/colors'} size={'sm'} ghost>
            View Colors
          </Button>
        </Flex>
      </Container>
    </SectionHeader>
  )
}

const SectionHeader = styled('header', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',

  height: '70vh',
  '@bp2': {
    // padding: '200px 0 100px',
  },

  variants: {
    size: {
      small: {
        padding: '100px 0',

        '@bp1': {
          padding: '200px 0 100px',
        },
      },
    },
  },
})
