import * as React from 'react'

import type {baseComponentProps} from '../@shared/types'
import type {
  TabsContentVariantProps,
  TabsVariantProps,
  TabsListVariantProps,
  TabsTriggerVariantProps,
} from './tabs.styles'
import {StyledTabsContent, StyledTabsList, StyledTabsRoot, StyledTabsTrigger} from './tabs.styles'

////////////////////// root //////////////////////

type TabsProps = baseComponentProps &
  TabsVariantProps &
  React.ComponentPropsWithRef<typeof StyledTabsRoot>

const TabsRoot = ({children, ...rest}: TabsProps) => {
  return (
    <StyledTabsRoot {...rest} shadow={rest.shadow}>
      {children}
    </StyledTabsRoot>
  )
}

////////////////////// list //////////////////////

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

////////////////////// trigger //////////////////////

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

////////////////////// content //////////////////////

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

/** ---------------- export parts ------------------- */
export const Tabs: React.FC<TabsProps> & {
  List: typeof TabsListComponent
  Trigger: typeof TabsTriggerComponent
  Content: typeof TabsContentComponent
} = (props) => <TabsRoot {...props} />

Tabs.List = TabsListComponent
Tabs.Trigger = TabsTriggerComponent
Tabs.Content = TabsContentComponent

/** ------------ displayName ------------- */
Tabs.displayName = 'Tabs'

/** ---------------- prop types ------------------ */
export type {
  TabsContentProps,
  //
  TabsListProps,
  //
  TabsProps,
  //
  TabsTriggerProps,
}
