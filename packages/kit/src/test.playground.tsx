import * as React from 'react'
import {useComposedRefs} from './primitives/utils'
import {Primitive} from './primitives/primitive'
import {useCallbackRef} from '@radix-ui/react-use-callback-ref'

import type * as Radix from '@radix-ui/react-primitive'



type FocusScopeElement = React.ElementRef<typeof Primitive.div>
type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>

const FocusScope = React.forwardRef<FocusScopeElement, FocusScopeProps>((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;