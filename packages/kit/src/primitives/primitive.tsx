import * as React from 'react'
import * as ReactDOM from 'react-dom'

function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  {checkForDefaultPrevented = true} = {}
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event)

    if (checkForDefaultPrevented === false || !(event as unknown as Event).defaultPrevented) {
      return ourEventHandler?.(event)
    }
  }
}

const NODES = [
  'a',
  'button',
  'div',
  'h2',
  'h3',
  'img',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
] as const

// Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
type PropsWithoutRef<P> = P extends any ? ('ref' extends keyof P ? Pick<P, Exclude<keyof P, 'ref'>> : P) : P;
type ComponentPropsWithoutRef<T extends React.ElementType> = PropsWithoutRef<
  React.ComponentProps<T>
>

type Primitives = {[E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E>}
type PrimitivePropsWithRef<E extends React.ElementType> = React.ComponentPropsWithRef<E> & {
  asChild?: boolean
}

type PrimitiveForwardRefComponent<E extends React.ElementType> = React.ForwardRefExoticComponent<
  PrimitivePropsWithRef<E>
>

type Overwrite<T, U> = Omit<T, keyof U> & U

type PropsWithHTMLElement<
  P,
  E extends React.ElementType,
  OmitAdditionalProps extends keyof any = never
> = Overwrite<Omit<React.ComponentPropsWithoutRef<E>, OmitAdditionalProps>, P>

/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/

const Primitive = NODES.reduce((primitive, node) => {
  const Node = React.forwardRef((props: PrimitivePropsWithRef<typeof node>, forwardedRef: any) => {
    const {asChild, ...primitiveProps} = props
    const Comp: any = asChild ? HTMLAreaElement : node

    React.useEffect(() => {
      ;(window as any)[Symbol.for('radix-ui')] = true
    }, [])

    return <Comp {...primitiveProps} ref={forwardedRef} />
  })

  Node.displayName = `Primitive.${node}`

  return {...primitive, [node]: Node}
}, {} as Primitives)

/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/

/**
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */

function dispatchDiscreteCustomEvent<E extends CustomEvent>(target: E['target'], event: E) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event))
}

/* -----------------------------------------------------------------------------------------------*/

const Root = Primitive

export {
  //
  dispatchDiscreteCustomEvent,
  Primitive,
  //
  Root,
}

export {composeEventHandlers}
export type {ComponentPropsWithoutRef, PrimitivePropsWithRef, PropsWithHTMLElement}
