import * as React from 'react'
import * as TG from '@radix-ui/react-toggle-group'
import type {baseComponentProps} from '../@shared/types'
import {ToggleFlexBox, ToggleGroupRoot, ToggleItem} from './t.group.styles'

///////////////////////// root //////////////////////////

interface toggleProps {
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

type ToggleGroupKitProps = baseComponentProps & toggleProps & React.ComponentProps<typeof TG.Root>
type ToggleGroupProps = ToggleGroupKitProps

const ToggleGroupPrimitive = React.forwardRef<
  React.ElementRef<typeof ToggleGroupRoot>,
  ToggleGroupProps
>(({children, ...props}, ref) => {
  return (
    <ToggleGroupRoot
      {...props}
      ref={ref}
      data-orientation={props.orientation}
      orientation={props.orientation}
      css={{
        ...props.css,
      }}>
      <ToggleFlexBox>{children}</ToggleFlexBox>
    </ToggleGroupRoot>
  )
})

///////////////////////// item //////////////////////////

interface itemProps {
  children?: React.ReactNode

  value?: string | undefined
  disabled?: boolean | undefined

  asChild?: boolean | false
}

type ToggleItemPrimitiveProps = baseComponentProps &
  itemProps &
  React.ComponentProps<typeof ToggleItem>
type ToggleGroupItemProps = ToggleItemPrimitiveProps

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

/** ---------------- export parts ------------------- */
export const ToggleGroup: React.FC<ToggleGroupProps> & {
  Item: typeof ToggleGroup_Item
} = (props) => <ToggleGroupPrimitive {...props} />

ToggleGroup.Item = ToggleGroup_Item

ToggleGroup.displayName = 'ToggleGroup'

export type {ToggleGroupProps, ToggleGroupItemProps}
