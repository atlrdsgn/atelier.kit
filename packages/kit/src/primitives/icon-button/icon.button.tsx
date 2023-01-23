import * as React from 'react'
import type {CSS} from '../../theme'

import {IconButtonComponent} from './icon.button.styles'
import type {IconButtonVariantProps} from './icon.button.styles'

type IButtonPrimitiveProps = IconButtonVariantProps & {
  children?: React.ReactNode
  raised?: boolean
  primary?: boolean
  secondary?: boolean
  as?: React.ElementType
}
type IButtonProps = IButtonPrimitiveProps & {css?: CSS}

const IconButton = React.forwardRef<React.ElementRef<typeof IconButtonComponent>, IButtonProps>(
  ({...props}, forwardedRef) => (
    <IconButtonComponent {...props} ref={forwardedRef} as={'button'} primary={props.primary}>
      {props.children}
    </IconButtonComponent>
  )
)

export {IconButton}

IconButton.displayName = 'IcxnButton'
IconButton.toString = () => '.icxn_button'

export type {IButtonProps}
