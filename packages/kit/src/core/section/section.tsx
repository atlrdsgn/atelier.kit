import * as React from 'react'

import type {baseElementProps} from '../@shared'
import {SectionPrimitive} from './section.styles'
import type {SectionVariantProps} from './section.styles'

interface sectionProps {
  children?: React.ReactNode
}

type SectionPrimitiveProps = baseElementProps & sectionProps & SectionVariantProps
type SectionProps = SectionPrimitiveProps

const SectionComponent = ({
  children,
  size = 'xl',
  responsive = false,
  fluid = false,
  hero = false,
  css,
  ...rest
}: SectionPrimitiveProps) => (
  <SectionPrimitive
    {...rest}
    /**
     *
     * ..size | sm, md, lg, xl
     */
    size={size}
    /**
     *
     * ..isResponsive | boolean
     */
    responsive={responsive}
    /**
     *
     * ..isFluid | boolean
     */
    fluid={fluid}
    /**
     *
     * ..isHero | boolean
     * sets a stage for a perfect hero section.
     */
    hero={hero}
    css={{
      ...css,
    }}>
    {children}
  </SectionPrimitive>
)

export const Section = SectionComponent

export type {SectionProps}
