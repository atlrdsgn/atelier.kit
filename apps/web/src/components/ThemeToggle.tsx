import * as React from 'react'
import {useTheme} from 'next-themes'

import {Dark, Flex, Light, Switch} from 'atlr.kit'

export const ThemeToggle = () => {
  const {theme, setTheme} = useTheme()

  return (
    <Flex css={{alignItems: 'center'}}>
      <Switch
        onCheckedChange={() =>
          theme === Light.className ? setTheme(Dark.className) : setTheme(Light.className)
        }
        aria-label="Change Theme">
        <Switch.Toggle />
      </Switch>
    </Flex>
  )
}
