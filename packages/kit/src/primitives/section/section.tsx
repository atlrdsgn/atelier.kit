import * as React from 'react'

import {CSS} from '../../theme'
import {SectionPrimitive} from './section.styles'
import type {SectionVariantProps} from './section.styles'

type SectionPrimitiveProps = SectionVariantProps & React.ComponentProps<typeof SectionPrimitive>
type SectionProps = SectionPrimitiveProps & {css?: CSS}

const SectionComponent = React.forwardRef<HTMLDivElement, SectionProps>(
  ({...props}, forwardedRef) => {
    return (
      <SectionPrimitive
        {...props}
        ref={forwardedRef}
        /**
         *
         * ..size | sm, md, lg, xl
         */
        size={props.size}
        /**
         *
         * ..isResponsive | boolean
         */
        responsive={props.responsive}
        /**
         *
         * ..isFluid | boolean
         */
        fluid={props.fluid}
        /**
         *
         * ..isHero | boolean
         * sets a stage for a perfect hero section.
         */
        hero={props.hero}
        css={{
          ...props.css,
        }}>
        {props.children}
      </SectionPrimitive>
    )
  }
)

export const Section = SectionComponent

export type {SectionProps}
