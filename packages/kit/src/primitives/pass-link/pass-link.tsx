import * as React from 'react'
import {useMemo} from 'react'
import type {CSS} from '../../theme'

import {LinkPrimitive} from './pass-link.styles'
import type {PassLinkVariantProps} from './pass-link.styles'

interface passLinkProps {
  href: string | null
  as?: React.ElementType | string
  color?: string
  mono?: boolean
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | string
}

type PassLinkPrimitiveProps = passLinkProps &
  PassLinkVariantProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>
type PassLinkProps = PassLinkPrimitiveProps & {css?: CSS}

const LinkComponent = React.forwardRef<React.ElementRef<typeof LinkPrimitive>, PassLinkProps>(
  (props, ref) => {
    /**
     * mailto check to prevent the link from
     * not understanding the mailto: protocol
     */
    const isMailto = useMemo(() => props.href.startsWith('mailto:'), [props.href])
    const isExternal = useMemo(() => /https:/.test(props.href), [props.href])

    if (isExternal || isMailto) {
      return (
        <LinkPrimitive
          {...props}
          ref={ref}
          as={'a'}
          rel={'noreferrer nofollow noopenner'}
          target={'_blank'}
          href={props.href}
          color={props.color}
          size={props.size}
          underline={props.underline}
          css={{
            ...props.css,
          }}>
          <span>{props.children}</span>
        </LinkPrimitive>
      )
    }

    return (
      <LinkPrimitive
        {...props}
        ref={ref}
        href={props.href}
        as={props.as}
        size={props.size}
        color={props.color}
        underline={props.underline}
        css={{
          ...props.css,
        }}>
        <span>{props.children}</span>
      </LinkPrimitive>
    )
  }
)

export const PassLink = React.memo(LinkComponent)

PassLink.displayName = 'PassLink'

export type {PassLinkProps}

// export {Link as PassLink}
