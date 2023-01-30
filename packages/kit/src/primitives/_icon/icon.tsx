import * as React from 'react'
import {IconProps} from './types.icon'

import {AtelierIcon} from './src/Atelier.Icon'
import {AtelierFilledIcon} from './src/Atelier.Filled.Icon'
import {AppleIcon} from './src/Apple.Icon'
import {ArrowDownIcon} from './src/ArrowDown.Icon'
import {ButterflyIcon} from './src/Butterfly.Icon'
import {CodeSandboxIcon} from './src/CodeSandbox.Icon'
import {CodeSandbox2Icon} from './src/CodeSandbox2.Icon'
import {MailIcon} from './src/Mail.Icon'
import {TypescriptIcon} from './src/Typescript.Icon'
import {YouTubeIcon} from './src/YouTube.Icon'
import {XIcon} from './src/X.Icon'

/**
 *
 * Atelier.Icon [/]
 * Apple.Icon [/]
 * ArrowDown.Icon [/]
 * CodeSandbox.Icon [/]
 * CodeSandbox2.Icon [/]
 * YouTube.Icon [/]
 * X.Icon [/]
 *
 */

/**
 *
 * @param any
 *
 *
 *
 * @returns
 */
const IconSource = ({
  color = 'currentColor',
  width,
  variant = 'Atelier.Icon' as IconProps['variant'],
  ...props
}: IconProps) => {
  /**
   *
   *
   *
   * Atelier[Icon]
   *
   */
  if (variant === 'Atelier.Icon') {
    return <AtelierIcon {...props} color={color} />
  }

  /**
   *
   *
   *
   * AtelierFilled[Icon]
   *
   */
  if (variant === 'Atelier.Filled.Icon') {
    return <AtelierFilledIcon {...props} color={color} />
  }

  /**
   *
   *
   *
   * ArrowDown[Icon]
   *
   */
  if (variant === 'ArrowDown.Icon') {
    return <ArrowDownIcon {...props} color={color} />
  }

  /**
   *
   *
   *
   *
   * Apple[Icon]
   *
   *
   */
  if (variant === 'Apple.Icon') {
    return <AppleIcon {...props} color={color} />
  }

  /**
   *
   *
   *
   * Butterfly[Icon]
   *
   */
  if (variant === 'Butterfly.Icon') {
    return <ButterflyIcon {...props} color={color} />
  }

  /**
   *
   *
   *
   *
   * CodeSandbox[Icon]
   *
   *
   */
  if (variant === 'CodeSandbox.Icon') {
    return <CodeSandboxIcon {...props} color={color} />
  }

  /**
   *
   *
   *
   *
   * CodeSandbox2[Icon]
   *
   *
   */
  if (variant === 'CodeSandbox2.Icon') {
    return <CodeSandbox2Icon {...props} color={color} />
  }

  /**
   *
   *
   *
   * Mail[Icon]
   *
   */
  if (variant === 'Mail.Icon') {
    return <MailIcon {...props} color={color} />
  }

  /**
   *
   *
   *
   * Typescript[Icon]
   *
   */
  if (variant === 'Typescript.Icon') {
    return <TypescriptIcon {...props} color={color} />
  }

  /**
   *
   *
   *
   *
   * X[Icon]
   *
   *
   */
  if (variant === 'X.Icon') {
    return <XIcon {...props} color={color} />
  }

  /**
   *
   *
   * YouTube[Icon]
   *
   */
  if (variant === 'YouTube.Icon') {
    return <YouTubeIcon {...props} color={color} />
  }

  /**
   *
   *
   *
   * return above..
   */
  return null
}

export const Icon = React.memo(IconSource)
