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

/**
 *
 *
 * Accordion.Root...
 *
 *
 */

type AccordionPrimitiveProps = baseComponentProps &
  AccordionRootVariantProps &
  React.ComponentProps<typeof AccordionPrimitive.Root>
type AccordionProps = AccordionPrimitiveProps
const accordion = React.forwardRef<React.ElementRef<typeof AtlrAccordionRoot>, AccordionProps>(
  ({children, bordered = false, ...rest}, forwardedRef) => (
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
  )
)

/**
 *
 *
 * Accordion.Item...
 *
 *
 */

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

/**
 *
 *
 * Accordion.Trigger...
 *
 *
 */

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

/**
 *
 *
 * Accordion.Content...
 *
 *
 */

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

export const Accordion = React.memo(accordion)
export const AccordionContent = React.memo(accordionContent)
export const AccordionItem = React.memo(accordionItem)
export const AccordionTrigger = React.memo(accordionTrigger)

Accordion.displayName = 'Accordion'
AccordionContent.displayName = 'AccordionContent'
AccordionItem.displayName = 'AccordionItem'
AccordionTrigger.displayName = 'AccordionTrigger'

export type {AccordionContentProps, AccordionItemProps, AccordionProps, AccordionTriggerProps}

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Animation Playground.
 * 
 * 
 * const slideDown = keyframes({
  from: {height: 0},
  to: {height: 'var(--radix-accordion-content-height)'},
})

const slideUp = keyframes({
  from: {height: 'var(--radix-accordion-content-height)'},
  to: {height: 0},
})
 * 
 */

/*
import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import styles from './styles.module.css'


export default function App() {
  const [state, toggle] = useState(true)
  const { height } = useSpring({
    from: { height: 0 },
    height: state ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
    <div className={styles.container} onClick={() => toggle(!state)}>
      <animated.div
        className={styles.text}
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}>
        click
      </animated.div>
    </div>
  )
}


*****************************************************************




import * as Dialog from '@radix-ui/react-dialog';
import { useTransition, animated, config } from 'react-spring';

function Example() {
  const [open, setOpen] = React.useState(false);
  const transitions = useTransition(open, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
    config: config.stiff,
  });
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      {transitions((styles, item) =>
        item ? (
          <>
            <Dialog.Overlay forceMount asChild>
              <animated.div
                style={{
                  opacity: styles.opacity,
                }}
              />
            </Dialog.Overlay>
            <Dialog.Content forceMount asChild>
              <animated.div style={styles}>
                <h1>Hello from inside the Dialog!</h1>
                <Dialog.Close>close</Dialog.Close>
              </animated.div>
            </Dialog.Content>
          </>
        ) : null
      )}
    </Dialog.Root>
  );
}
*/
