import * as React from 'react'
import * as Slct from '@radix-ui/react-select'
import {baseComponentProps} from '../@shared/types'
import {applyDisplayName} from '../@shared/utils'

import {
  StyledSelectRoot,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectIcon,
  StyledSelectArrow,
  StyledSelectContent,
  StyledSelectScrollUpButton,
  StyledSelectScrollDownButton,
  StyledSelectViewport,
  StyledSelectPortal,
  StyledSelectItem,
  StyledSelectItemText,
  StyledSelectItemIndicator,
  StyledSelectSeparator,
  StyledSelectLabel,
  StyledSelectGroup,
} from './select.styles'

/**
 *
 *
 *
 * root.
 */
type SPrimitiveProps = baseComponentProps &
  React.ComponentPropsWithRef<typeof StyledSelectRoot> &
  React.HTMLAttributes<HTMLDivElement>
type SProps = SPrimitiveProps

const SelectRoot = ({
  children,
  open,
  defaultOpen,
  disabled,
  required,
  defaultValue,
  value,
  onValueChange,
  css,
  ...rest
}: SProps) => {
  return (
    <StyledSelectRoot
      {...rest}
      open={open}
      defaultOpen={defaultOpen}
      disabled={disabled}
      required={required}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      css={{
        ...css,
      }}>
      {children}
    </StyledSelectRoot>
  )
}

/***************************************************************
 *
 *
 *
 * trigger.value.
 * +
 * trigger.icon.
 *
 * here we're going to pass the Select[Value] & Select[Icon]
 * to the Select[Trigger] component. I'm inferring that Select[Trigger]
 * will need to be a flex.div. Select[Value] should receive no styling,
 * in order to ensure proper placement.
 *
 */

type SValuePrimitiveProps = React.ComponentPropsWithRef<typeof Slct.Value>
type SValueProps = SValuePrimitiveProps

const SelectValueComponent = ({children, asChild = false, placeholder, ...rest}: SValueProps) => {
  return (
    <>
      <StyledSelectValue {...rest} asChild={asChild} placeholder={placeholder}>
        {children}
      </StyledSelectValue>
    </>
  )
}

type SIconPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof StyledSelectIcon>
type SIconProps = SIconPrimitiveProps

const SelectIconComponent = ({css, ...rest}: SIconProps) => (
  <StyledSelectIcon {...rest} css={{...css}} />
)

/***************************************************************

/**
 *
 *
 *
 *
 * trigger.
 */
type STriggerPrimitiveProps = baseComponentProps &
  React.ComponentPropsWithRef<typeof StyledSelectTrigger> &
  React.HTMLAttributes<HTMLButtonElement>
type STriggerProps = STriggerPrimitiveProps

const SelectTriggerComponent = ({children, asChild, css, ...rest}: STriggerProps) => {
  return (
    <StyledSelectTrigger
      {...rest}
      asChild={asChild}
      css={{
        ...css,
      }}>
      {children}
    </StyledSelectTrigger>
  )
}

/***************************************************************
 *
 *
 *
 * content.
 */
type SContentPrimitiveProps = baseComponentProps &
  React.ComponentPropsWithRef<typeof StyledSelectContent> &
  React.HTMLAttributes<HTMLDivElement>
type SContentProps = SContentPrimitiveProps

const SelectContentComponent = ({
  children,
  asChild,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  position = 'popper',
  side = 'bottom',
  sideOffset,
  align,
  alignOffset = 0,
  avoidCollisions = true,
  collisionBoundary,
  collisionPadding,
  arrowPadding,
  sticky = 'partial',
  hideWhenDetached = false,
  css,
  ...rest
}: SContentProps) => (
  <StyledSelectPortal>
    <StyledSelectContent
      {...rest}
      asChild={asChild}
      onCloseAutoFocus={onCloseAutoFocus}
      onEscapeKeyDown={onEscapeKeyDown}
      onPointerDownOutside={onPointerDownOutside}
      position={position}
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      avoidCollisions={avoidCollisions}
      collisionBoundary={collisionBoundary}
      collisionPadding={collisionPadding}
      arrowPadding={arrowPadding}
      sticky={sticky}
      hideWhenDetached={hideWhenDetached}
      css={{
        ...css,
      }}>
      <StyledSelectScrollUpButton>⌃</StyledSelectScrollUpButton>
      <StyledSelectViewport>{children}</StyledSelectViewport>
      <StyledSelectScrollDownButton>⌄</StyledSelectScrollDownButton>
    </StyledSelectContent>
  </StyledSelectPortal>
)

/***************************************************************

/**
 *
 *
 *
 * item.
 */
type SItemPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof StyledSelectItem>
type SItemProps = SItemPrimitiveProps

const SelectItemComponent = ({
  children,
  asChild,
  disabled,
  textValue,
  css,
  ...rest
}: SItemProps) => (
  <StyledSelectItem
    {...rest}
    asChild={asChild}
    disabled={disabled}
    textValue={textValue}
    css={{
      ...css,
    }}>
    <StyledSelectItemText>{children}</StyledSelectItemText>
    <StyledSelectItemIndicator />
  </StyledSelectItem>
)

// exports.
export const Select = SelectRoot

export const SelectTrigger = SelectTriggerComponent
export const SelectValue = SelectValueComponent
export const SelectContent = SelectContentComponent
export const SelectItem = SelectItemComponent
export const SelectIcon = SelectIconComponent
export const SelectViewport = StyledSelectViewport
export const SelectPortal = StyledSelectPortal
export const SelectItemText = StyledSelectItemText
export const SelectItemIndicator = StyledSelectItemIndicator
export const SelectSeparator = StyledSelectSeparator
export const SelectLabel = StyledSelectLabel
export const SelectGroup = StyledSelectGroup

export const SelectScrollUpButton = StyledSelectScrollUpButton
export const SelectScrollDownButton = StyledSelectScrollDownButton
export const SelectArrow = StyledSelectArrow

applyDisplayName(Select, 'Select')

applyDisplayName(SelectTrigger, 'SelectTrigger')
applyDisplayName(SelectValue, 'SelectValue')
applyDisplayName(SelectContent, 'SelectContent')
applyDisplayName(SelectItem, 'SelectItem')
applyDisplayName(SelectIcon, 'SelectIcon')
applyDisplayName(SelectViewport, 'SelectViewport')
applyDisplayName(SelectPortal, 'SelectPortal')
applyDisplayName(SelectItemText, 'SelectItemText')
applyDisplayName(SelectItemIndicator, 'SelectItemIndicator')
applyDisplayName(SelectSeparator, 'SelectSeparator')
applyDisplayName(SelectLabel, 'SelectLabel')
applyDisplayName(SelectGroup, 'SelectGroup')

export type SelectProps = SProps
export type SelectTriggerProps = STriggerProps
export type SelectContentProps = SContentProps
export type SelectItemProps = SItemProps
export type SelectValueProps = SValueProps
export type SelectIconProps = SIconProps

// export const SelectValue = SelectValueComponent
// applyDisplayName(SelectValue, 'SelectValue')
// export type SelectValueProps = SValueProps
