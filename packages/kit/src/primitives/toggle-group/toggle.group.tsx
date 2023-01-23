import * as React from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import type {CSS} from '../../theme'
import {ToggleFlexBox, ToggleGroupRoot, ToggleItem} from './t.group.styles'

interface itemProps {
  children?: React.ReactNode

  value?: string | undefined
  disabled?: boolean | undefined

  asChild?: boolean | false
}

type ToggleItemPrimitiveProps = itemProps & React.ComponentProps<typeof ToggleItem>
type ToggleGroupItemProps = ToggleItemPrimitiveProps & {css?: CSS}

const ToggleGroup_Item = React.forwardRef<
  React.ElementRef<typeof ToggleItem>,
  ToggleGroupItemProps
>(({value, ...props}, ref) => {
  return (
    <ToggleItem
      {...props}
      ref={ref}
      value={value}
      css={{
        ...props.css,
      }}>
      {props.children}
    </ToggleItem>
  )
})
/**
 *
 *
 *
 *
 *
 * ToggleGroup.Root
 */
interface toggleProps {
  children?: React.ReactNode

  asChild?: boolean

  type: 'single' | 'multiple'
  value?: string[] | string | undefined
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  disabled?: boolean
  rovingFocus?: boolean
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean | 'true'
}

type ToggleGroupKitProps = toggleProps & React.ComponentProps<typeof ToggleGroup.Root>
type ToggleGroupProps = ToggleGroupKitProps & {css?: CSS}

const ToggleGroup_Root = React.forwardRef<
  React.ElementRef<typeof ToggleGroupRoot>,
  ToggleGroupProps
>(({...props}, ref) => {
  return (
    <ToggleGroupRoot
      {...props}
      ref={ref}
      data-orientation={props.orientation}
      orientation={props.orientation}
      css={{
        ...props.css,
      }}>
      <ToggleFlexBox>{props.children}</ToggleFlexBox>
    </ToggleGroupRoot>
  )
})

export const ToggleGroupPrimitive = ToggleGroup_Root
export const ToggleGroupItem = ToggleGroup_Item

export type {ToggleGroupProps, ToggleGroupItemProps}
