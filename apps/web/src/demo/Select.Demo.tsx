import * as React from 'react'

import {Select} from 'atlr.kit'
import {ComponentName} from '@/components/ComponentName'
import {Container, Section} from 'atlr.kit'

const options = [
  {
    type: 'Icon',
    value: 'Icon',
  },
  {
    type: 'Accordion',
    value: 'Accordion',
  },
  {
    type: 'Button',
    value: 'Button',
  },
  {
    type: 'Checkbox',
    value: 'Checkbox',
  },
]

export const SelectDemo = () => {
  return (
    <>
      <Section>
        <Container size={'lg'} align={'center'}>
          <ComponentName component={'Select'} />
          <div>
            <Select css={{width: 200}}>
              <Select.Trigger>
                <Select.Value placeholder={'Select an option..'} />
                <Select.Icon />
              </Select.Trigger>

              <Select.Content sideOffset={5}>
                <Select.Group>
                  <Select.Label>Primitives</Select.Label>

                  {/* <!--- Map the values to the options --> */}
                  {options.map((options) => (
                    <Select.Item key={options.type} value={options.value}>
                      {options.value}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select>
          </div>
        </Container>
      </Section>
    </>
  )
}
