import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'
import {baseComponentProps} from '../@shared/types'
import {AccordionRootVariantProps, StyledArrow} from './accordion.styles'

import {
  AtlrAccordionContent,
  AtlrAccordionHeader,
  AtlrAccordionItem,
  AtlrAccordionRoot,
  AtlrAccordionTrigger,
} from './accordion.styles'

///////////////////// root //////////////////////

type accordionProps = baseComponentProps & AccordionRootVariantProps
// pass accordionProps..
type AccordionPrimitiveProps = accordionProps & React.ComponentProps<typeof AccordionPrimitive.Root>
type AccordionProps = AccordionPrimitiveProps

const AccordionComponent = React.forwardRef<
  React.ElementRef<typeof AtlrAccordionRoot>,
  AccordionProps
>(({children, bordered = false, ...rest}, forwardedRef) => (
  <AtlrAccordionRoot
    {...rest}
    ref={forwardedRef}
    {...(rest.type === 'single'
      ? {
          collapsible: true,
        }
      : {
          collapsible: false,
        })}
    bordered={bordered}
    css={{
      ...rest.css,
    }}>
    {children}
  </AtlrAccordionRoot>
))

////////////////////// item //////////////////////

type AccordionItemPrimitiveProps = baseComponentProps &
  React.ComponentProps<typeof AccordionPrimitive.Item>
type AccordionItemProps = AccordionItemPrimitiveProps

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

////////////////////// trigger //////////////////////

type AccordionTriggerPrimitiveProps = baseComponentProps &
  React.ComponentProps<typeof AccordionPrimitive.Trigger> &
  React.HTMLAttributes<HTMLButtonElement>
type AccordionTriggerProps = AccordionTriggerPrimitiveProps

const accordionTrigger = React.forwardRef<
  React.ElementRef<typeof AtlrAccordionTrigger>,
  AccordionTriggerProps
>(({...props}, forwardedRef) => (
  <AtlrAccordionHeader orientation={'horizontal'}>
    <AtlrAccordionTrigger {...props} ref={forwardedRef} css={{...props.css}}>
      <span>{props.children}</span>
      {/* <!-- <AtlrAccordionArrowDown width={'24'} color={'slate'} /> --> */}

      <StyledArrow variant={'ArrowDown.Icon'} />
    </AtlrAccordionTrigger>
  </AtlrAccordionHeader>
))

////////////////////// content //////////////////////

type AccordionContentPrimitiveProps = baseComponentProps &
  React.ComponentProps<typeof AccordionPrimitive.Content>
type AccordionContentProps = AccordionContentPrimitiveProps

const accordionContent = React.forwardRef<
  React.ElementRef<typeof AtlrAccordionContent>,
  AccordionContentProps
>(({...props}, forwardedRef) => (
  <AtlrAccordionContent {...props} ref={forwardedRef} css={{...props.css}}>
    {props.children}
  </AtlrAccordionContent>
))

///////////////// export parts //////////////////////
export const Accordion: React.FC<AccordionProps> & {
  Item: typeof accordionItem
  Trigger: typeof accordionTrigger
  Content: typeof accordionContent
} = (props) => <AccordionComponent {...props} />

Accordion.Item = accordionItem
Accordion.Trigger = accordionTrigger
Accordion.Content = accordionContent

///////////////// display name //////////////////////
Accordion.displayName = 'Accordion'

///////////////// prop types //////////////////////
export type {
  //
  AccordionContentProps,
  //
  AccordionItemProps,
  //
  AccordionProps,
  //
  AccordionTriggerProps,
}
