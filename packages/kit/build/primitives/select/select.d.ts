import * as React from 'react';
import * as Slct from '@radix-ui/react-select';
import { baseComponentProps } from '../@shared/types';
import type { SelectContentVariantProps } from './select.styles';
import { StyledSelectRoot, StyledSelectTrigger, StyledSelectIcon, StyledSelectArrow, StyledSelectContent, StyledSelectScrollUpButton, StyledSelectScrollDownButton, StyledSelectViewport, StyledSelectPortal, StyledSelectItem, StyledSelectItemText, StyledSelectItemIndicator, StyledSelectSeparator, StyledSelectLabel, StyledSelectGroup } from './select.styles';
/**
 *
 *
 *
 * root.
 */
type SPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof StyledSelectRoot>;
type SProps = SPrimitiveProps;
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
type SValuePrimitiveProps = React.ComponentPropsWithRef<typeof Slct.Value> & React.RefAttributes<HTMLSpanElement>;
type SValueProps = SValuePrimitiveProps;
declare const SelectValueComponent: React.ForwardRefExoticComponent<Pick<SValuePrimitiveProps, "color" | "translate" | "slot" | "style" | "title" | "hidden" | "children" | "defaultValue" | "dir" | "className" | "id" | "key" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "asChild"> & React.RefAttributes<HTMLSpanElement>>;
type SIconPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof StyledSelectIcon>;
type SIconProps = SIconPrimitiveProps;
declare const SelectIconComponent: ({ css, ...rest }: SIconProps) => JSX.Element;
/***************************************************************

/**
 *
 *
 *
 *
 * trigger.
 */
type STriggerPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof StyledSelectTrigger> & React.HTMLAttributes<HTMLButtonElement>;
type STriggerProps = STriggerPrimitiveProps;
declare const SelectTriggerComponent: ({ children, asChild, css, ...rest }: STriggerProps) => JSX.Element;
/***************************************************************
 *
 *
 *
 * content.
 */
type SContentPrimitiveProps = baseComponentProps & SelectContentVariantProps & React.ComponentPropsWithRef<typeof StyledSelectContent> & React.HTMLAttributes<HTMLDivElement>;
type SContentProps = SContentPrimitiveProps;
declare const SelectContentComponent: ({ children, asChild, onCloseAutoFocus, onEscapeKeyDown, onPointerDownOutside, position, side, sideOffset, align, alignOffset, avoidCollisions, collisionBoundary, collisionPadding, arrowPadding, sticky, hideWhenDetached, hasBlur, css, ...rest }: SContentProps) => JSX.Element;
/***************************************************************

/**
 *
 *
 *
 * item.
 */
type SItemPrimitiveProps = baseComponentProps & React.ComponentPropsWithRef<typeof StyledSelectItem>;
type SItemProps = SItemPrimitiveProps;
declare const SelectItemComponent: ({ children, asChild, disabled, textValue, css, ...rest }: SItemProps) => JSX.Element;
export declare const Select: React.FC<SelectProps> & {
    Trigger: typeof SelectTriggerComponent;
    Value: typeof SelectValueComponent;
    Content: typeof SelectContentComponent;
    Item: typeof SelectItemComponent;
    Icon: typeof SelectIconComponent;
    Viewport: typeof StyledSelectViewport;
    Portal: typeof StyledSelectPortal;
    ItemText: typeof StyledSelectItemText;
    Indicator: typeof StyledSelectItemIndicator;
    Separator: typeof StyledSelectSeparator;
    Label: typeof StyledSelectLabel;
    Group: typeof StyledSelectGroup;
    ScrollUpButton: typeof StyledSelectScrollUpButton;
    ScrollDownButton: typeof StyledSelectScrollDownButton;
    Arrow: typeof StyledSelectArrow;
};
export type SelectProps = SProps;
export type SelectTriggerProps = STriggerProps;
export type SelectContentProps = SContentProps;
export type SelectItemProps = SItemProps;
export type SelectValueProps = SValueProps;
export type SelectIconProps = SIconProps;
export {};
//# sourceMappingURL=select.d.ts.map