import * as React from 'react'
import type {baseElementProps} from '../@shared'
import {CrumbsVariantProps, StyledCrumbs} from './crumbs.style'
import type {AriaBreadcrumbsProps} from '@react-types/breadcrumbs'
import {Icon} from '../../primitives'
import type {IconProps, IconVariant} from '../../primitives/_icon'

interface crumbProps extends AriaBreadcrumbsProps, baseElementProps {
  children?: React.ReactNode
  default?: CrumbsVariantProps
  isCurrent?: (item: number) => boolean
}

type BreadcrumbsProps = crumbProps & CrumbsVariantProps

const Crumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>((props, forwardedRef) => {
  const {children, isCurrent, ...rest} = props

  const childrenArray = React.Children.toArray(children)

  return (
    <StyledCrumbs
      aria-label="breadcrumb"
      {...rest}
      ref={forwardedRef}
      default={true}
      css={{...rest.css}}>
      <ol>
        {childrenArray.map((child, index) => {
          const isLast = index === childrenArray.length - 1
          const isCurrentPage = isCurrent?.(index)

          return (
            <li key={index} className={`breadcrumb-item ${isCurrentPage ? 'active' : ''}`}>
              {isLast ? (
                child
              ) : (
                <>
                  {child}
                  <Icon
                    color={'currentColor'}
                    variant={'[ArrowDown].Icon'}
                    className="breadcrumb-divider"
                  />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </StyledCrumbs>
  )
})

export {Crumbs}
Crumbs.displayName = 'Crumbs'

export type {BreadcrumbsProps}
