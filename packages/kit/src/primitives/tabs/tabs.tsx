import * as React from 'react'

import {baseComponentProps} from '../@shared/types'
import type {
  TabsContentVariantProps,
  TabsVariantProps,
  TabsListVariantProps,
  TabsTriggerVariantProps,
} from './tabs.styles'
import {StyledTabsContent, StyledTabsList, StyledTabsRoot, StyledTabsTrigger} from './tabs.styles'

/**
 *
 *
 * root.
 */
type TabsProps = baseComponentProps &
  TabsVariantProps &
  React.ComponentPropsWithRef<typeof StyledTabsRoot>

const TabsComponent = React.forwardRef<React.ElementRef<typeof StyledTabsRoot>, TabsProps>(
  ({...props}, forwardedRef) => (
    <StyledTabsRoot
      {...props}
      ref={forwardedRef}
      value={props.value}
      defaultValue={props.defaultValue}
      dir={props.dir}
      orientation={props.orientation}
      activationMode={props.activationMode}
      shadow={props.shadow}
      css={{
        ...props.css,
      }}>
      {props.children}
    </StyledTabsRoot>
  )
)

/**
 *
 *
 * list.
 */
type TabsListProps = baseComponentProps &
  TabsListVariantProps &
  React.ComponentPropsWithRef<typeof StyledTabsList>
const TabsListComponent = React.forwardRef<React.ElementRef<typeof StyledTabsList>, TabsListProps>(
  ({...props}, ref) => (
    <StyledTabsList
      {...props}
      ref={ref}
      border={props.border}
      css={{
        ...props.css,
      }}>
      {props.children}
    </StyledTabsList>
  )
)

/**
 *
 *
 * trigger.
 */
type TabsTriggerProps = baseComponentProps &
  TabsTriggerVariantProps &
  React.ComponentPropsWithRef<typeof StyledTabsTrigger>
const TabsTriggerComponent = React.forwardRef<
  React.ElementRef<typeof StyledTabsTrigger>,
  TabsTriggerProps
>(({...props}, ref) => (
  <StyledTabsTrigger
    {...props}
    ref={ref}
    disabled={props.disabled}
    value={props.value}
    border={props.border}
    css={{
      ...props.css,
    }}>
    {props.children}
  </StyledTabsTrigger>
))

/**
 *
 *
 * content.
 */
type TabsContentProps = baseComponentProps &
  TabsContentVariantProps &
  React.ComponentPropsWithRef<typeof StyledTabsContent>
const TabsContentComponent = React.forwardRef<
  React.ElementRef<typeof StyledTabsContent>,
  TabsContentProps
>(({...props}, ref) => (
  <StyledTabsContent
    {...props}
    ref={ref}
    value={props.value}
    forceMount={props.forceMount}
    align={props.align}
    css={{
      ...props.css,
    }}>
    {props.children}
  </StyledTabsContent>
))

/** ---------------- COMPONENTS ------------------- */
export const Tabs = React.memo(TabsComponent)
export const TabsList = React.memo(TabsListComponent)
export const TabsTrigger = React.memo(TabsTriggerComponent)
export const TabsContent = React.memo(TabsContentComponent)

/** ------------ REACT DISPLAY NAMES ------------- */
Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'

/** ---------------- TYPES ------------------ */
export type {
  TabsContentProps,
  //
  TabsListProps,
  //
  TabsProps,
  //
  TabsTriggerProps,
}
