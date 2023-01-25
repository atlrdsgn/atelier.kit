import * as React from 'react'

import {LinkPrimitive} from './pass-link.styles'
import type {PassLinkVariantProps} from './pass-link.styles'
import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'

interface passLinkProps {
  href: string | null
  as?: React.ElementType | string
  color?: string
  mono?: boolean
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | string
}

type PassLinkPrimitiveProps = baseComponentProps &
  passLinkProps &
  PassLinkVariantProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>
type PassLinkProps = PassLinkPrimitiveProps

const PassLinkComponent = ({
  children,
  href,
  as,
  color = 'inherit',
  mono = false,
  size = 'inherit',
  underline = false,
  css,
  ...rest
}: PassLinkPrimitiveProps) => {
  /**
   * mailto check to prevent the link from
   * not understanding the mailto: protocol
   */
  const isMailto = React.useMemo(() => href.startsWith('mailto:'), [href])
  const isExternal = React.useMemo(() => /https:/.test(href), [href])

  if (isExternal || isMailto) {
    return (
      <LinkPrimitive
        {...rest}
        as={'a'}
        rel={'noreferrer nofollow noopenner'}
        target={'_blank'}
        href={href}
        color={color}
        size={size}
        underline={underline}
        css={{
          ...css,
        }}>
        <span>{children}</span>
      </LinkPrimitive>
    )
  }

  return (
    <LinkPrimitive
      {...rest}
      href={href}
      as={as}
      size={size}
      color={color}
      underline={underline}
      css={{
        ...css,
      }}>
      <span>{children}</span>
    </LinkPrimitive>
  )
}

export const PassLink = React.memo(PassLinkComponent)

applyDisplayName(PassLink, 'PassLink')

export type {PassLinkProps}

// export {Link as PassLink}
