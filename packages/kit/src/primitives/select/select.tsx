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

/**
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
    {children}
  </StyledSelectContent>
)

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

// export const SelectValue = SelectValueComponent
// applyDisplayName(SelectValue, 'SelectValue')
// export type SelectValueProps = SValueProps

/*
import React from 'react';
import * as Select from '@radix-ui/react-select';
import { styled } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

export const SelectDemo = () => (
  <Select.Root>
    <SelectTrigger aria-label="Food">
      <Select.Value placeholder="Select a fruit…" />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <Select.Portal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <Select.Group>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Select.Group>

          <SelectSeparator />

          <Select.Group>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" disabled>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">leek</SelectItem>
          </Select.Group>

          <SelectSeparator />

          <Select.Group>
            <SelectLabel>Meat</SelectLabel>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </Select.Group>
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select.Portal>
  </Select.Root>
);

const SelectTrigger = styled(Select.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: 'white',
  color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: mauve.mauve3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-placeholder]': { color: violet.violet9 },
});

const SelectIcon = styled(Select.SelectIcon, {
  color: violet.violet11,
});

const SelectContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const SelectViewport = styled(Select.Viewport, {
  padding: 5,
});

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  );
});

const StyledItem = styled(Select.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
});

const SelectLabel = styled(Select.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11,
});

const SelectSeparator = styled(Select.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const StyledItemIndicator = styled(Select.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: violet.violet11,
  cursor: 'default',
};

const SelectScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles);

const SelectScrollDownButton = styled(Select.ScrollDownButton, scrollButtonStyles);

export default SelectDemo;

*/
