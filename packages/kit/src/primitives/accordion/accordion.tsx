import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import type {CSS} from '../../theme'
import type {AccordionRootVariantProps} from './accordion.styles'

import {
  AtlrAccordionArrowDown,
  AtlrAccordionContent,
  AtlrAccordionContentText,
  AtlrAccordionHeader,
  AtlrAccordionItem,
  AtlrAccordionRoot,
  AtlrAccordionTrigger,
} from './accordion.styles'

/**
 *
 *
 * Accordion.Root...
 *
 *
 */

type AccordionPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Root>
type AccordionProps = AccordionPrimitiveProps & AccordionRootVariantProps & {css?: CSS}
const accordion = React.forwardRef<React.ElementRef<typeof AtlrAccordionRoot>, AccordionProps>(
  ({...props}, forwardedRef) => (
    <AtlrAccordionRoot
      ref={forwardedRef}
      {...props}
      {...(props.type === 'single' ? {collapsible: true} : {})}
      bordered={props.bordered}
      css={{
        ...props.css,
      }}>
      {props.children}
    </AtlrAccordionRoot>
  )
)

/**
 *
 *
 * Accordion.Item...
 *
 *
 */

type AccordionItemPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Item>
type AccordionItemProps = AccordionItemPrimitiveProps & {css?: CSS}
const accordionItem = React.forwardRef<
  React.ElementRef<typeof AtlrAccordionItem>,
  AccordionItemProps
>(({...props}, forwardedRef) => (
  <AtlrAccordionItem
    {...props}
    ref={forwardedRef}
    css={{
      ...props.css,
    }}>
    {props.children}
  </AtlrAccordionItem>
))

/**
 *
 *
 * Accordion.Trigger...
 *
 *
 */

type AccordionTriggerPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & {css?: CSS}
const accordionTrigger = React.forwardRef<
  React.ElementRef<typeof AtlrAccordionTrigger>,
  AccordionTriggerProps
>(({...props}, forwardedRef) => (
  <AtlrAccordionHeader css={{...props.css}}>
    <AtlrAccordionTrigger {...props} ref={forwardedRef} css={{...props.css}}>
      {props.children}
      <AtlrAccordionArrowDown width={'24'} color={'slate'} />
    </AtlrAccordionTrigger>
  </AtlrAccordionHeader>
))

/**
 *
 *
 * Accordion.Content...
 *
 *
 */

type AccordionContentPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Content>
type AccordionContentProps = AccordionContentPrimitiveProps & {css?: CSS}
const accordionContent = React.forwardRef<
  React.ElementRef<typeof AtlrAccordionContent>,
  AccordionContentProps
>(({...props}, forwardedRef) => (
  <AtlrAccordionHeader>
    <AtlrAccordionContent {...props} ref={forwardedRef} css={{...props.css}}>
      <AtlrAccordionContentText css={{...props.css}}>{props.children}</AtlrAccordionContentText>
    </AtlrAccordionContent>
  </AtlrAccordionHeader>
))

export const Accordion = React.memo(accordion)
export const AccordionContent = React.memo(accordionContent)
export const AccordionItem = React.memo(accordionItem)
export const AccordionTrigger = React.memo(accordionTrigger)

Accordion.displayName = 'Accordion'
AccordionContent.displayName = 'AccordionContent'
AccordionItem.displayName = 'AccordionItem'
AccordionTrigger.displayName = 'AccordionTrigger'

export type {AccordionContentProps, AccordionItemProps, AccordionProps, AccordionTriggerProps}
