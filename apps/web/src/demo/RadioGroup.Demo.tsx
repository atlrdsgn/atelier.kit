import * as React from 'react'
import {useTheme} from 'next-themes'
import {ComponentName} from '@/components/ComponentName'
import {RadioGroup, Section} from 'atlr.kit'
import {Container} from 'atlr.kit'

export const RadioGroupDemo = () => {
  const {theme, setTheme} = useTheme()
  return (
    <>
      <Section>
        <Container size={'md'} align={'center'}>
          <ComponentName component={'Radio Group'} />

          <div>
            <form>
              <RadioGroup
                defaultValue={'auto'}
                onValueChange={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}>
                <RadioGroup.Item value={'auto'}>
                  <RadioGroup.Indicator />
                  <RadioGroup.Label>Auto</RadioGroup.Label>
                </RadioGroup.Item>

                <RadioGroup.Item value={'light'}>
                  <RadioGroup.Indicator />
                  <RadioGroup.Label>Light</RadioGroup.Label>
                </RadioGroup.Item>

                <RadioGroup.Item value={'dark'}>
                  <RadioGroup.Indicator />
                  <RadioGroup.Label>Dark</RadioGroup.Label>
                </RadioGroup.Item>
              </RadioGroup>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
