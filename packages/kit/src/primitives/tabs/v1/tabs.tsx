import * as React from 'react'

import type {CSS} from '../../../theme'
import {StyledTabsContent, StyledTabsList, StyledTabsRoot, StyledTabsTrigger} from './tabs.styles'

type TabsProps = React.ComponentPropsWithRef<typeof StyledTabsRoot> & {css?: CSS}
type TabsListProps = React.ComponentPropsWithRef<typeof StyledTabsList> & {css?: CSS}
type TabsTriggerProps = React.ComponentPropsWithRef<typeof StyledTabsTrigger> & {css?: CSS}
type TabsContentProps = React.ComponentPropsWithRef<typeof StyledTabsContent> & {css?: CSS}

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
  <StyledTabsContent {...props} ref={ref} value={props.value} forceMount={props.forceMount}>
    {props.children}
  </StyledTabsContent>
))

/** ---------------- COMPONENTS ------------------- */
export const V1Tabs = React.memo(TabsComponent)
export const V1TabsList = React.memo(TabsListComponent)
export const V1TabsTrigger = React.memo(TabsTriggerComponent)
export const V1TabsContent = React.memo(TabsContentComponent)

/** ------------ REACT DISPLAY NAMES ------------- */
V1Tabs.displayName = 'Tabs_V1'
V1TabsList.displayName = 'TabsList_V1'
V1TabsTrigger.displayName = 'TabsTrigger_V1'
V1TabsContent.displayName = 'TabsContent_V1'

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
