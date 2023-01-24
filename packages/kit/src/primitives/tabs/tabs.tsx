import * as React from 'react'

import type {CSS} from '../../theme'
import type {TabsContentVariantProps} from './tabs.styles'
import {StyledTabsContent, StyledTabsList, StyledTabsRoot, StyledTabsTrigger} from './tabs.styles'

type TabsProps = React.ComponentPropsWithRef<typeof StyledTabsRoot> & {css?: CSS}
type TabsListProps = React.ComponentPropsWithRef<typeof StyledTabsList> & {css?: CSS}
type TabsTriggerProps = React.ComponentPropsWithRef<typeof StyledTabsTrigger> & {css?: CSS}
type TabsContentProps = React.ComponentPropsWithRef<typeof StyledTabsContent> &
  TabsContentVariantProps & {css?: CSS}

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
      css={{
        ...props.css,
      }}>
      {props.children}
    </StyledTabsRoot>
  )
)

const TabsListComponent = React.forwardRef<React.ElementRef<typeof StyledTabsList>, TabsListProps>(
  ({...props}, ref) => (
    <StyledTabsList
      {...props}
      ref={ref}
      css={{
        ...props.css,
      }}>
      {props.children}
    </StyledTabsList>
  )
)

const TabsTriggerComponent = React.forwardRef<
  React.ElementRef<typeof StyledTabsTrigger>,
  TabsTriggerProps
>(({...props}, ref) => (
  <StyledTabsTrigger
    {...props}
    ref={ref}
    disabled={props.disabled}
    value={props.value}
    css={{
      ...props.css,
    }}>
    {props.children}
  </StyledTabsTrigger>
))

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
