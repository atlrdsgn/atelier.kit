import * as React from 'react'
import {IconProps} from './types.icon'

import {AtelierIcon} from './src/Atelier.Icon'
import {AppleIcon} from './src/Apple.Icon'
import {ArrowDownIcon} from './src/ArrowDown.Icon'
import {CodeSandboxIcon} from './src/CodeSandbox.Icon'
import {CodeSandbox2Icon} from './src/CodeSandbox2.Icon'
import {YouTubeIcon} from './src/YouTube.Icon'
import {XIcon} from './src/X.Icon'

/**
 *
 * Atelier.Icon [/]
 * Apple.Icon [/]
 *
 * X.Icon [/]
 *
 */

/**
 *
 * @param param0
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
