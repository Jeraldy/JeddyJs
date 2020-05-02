import Node from './Node';
import * as CSS from "../css/index";

const H2 = ({
  className,
  children,
  style,
  id,
  attributes,
  onAbort,
  onAnimationCancel,
  onAnimationEnd,
  onAnimationIteration,
  onAnimationStart,
  onAuxClick,
  onBlur,
  onCancel,
  onCanPlay,
  onCanPlayThrough,
  onChange,
  onClick,
  onClose,
  onContextMenu,
  onCueChange,
  onDblClick,
  onDrag,
  onDragEnd,
  onDragEnter,
  onDragExit,
  onDragLeave,
  onDragOver,
  onDragStart,
  onDrop,
  onDurationChange,
  onEmptied,
  onEnded,
  onError,
  onFocus,
  onGotPointerCapture,
  onInput,
  onInvalid,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onLoad,
  onLoadedData,
  onLoadedMetaData,
  onLoadStart,
  onLostPointerCapture,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  onPause,
  onPlay,
  onPlaying,
  onPointerCancel,
  onPointerDown,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  onPointerOut,
  onPointerOver,
  onPointerUp,
  onProgress,
  onRateChange,
  onReset,
  onResize,
  onScroll,
  onSecurityPolicyViolation,
  onSeeked,
  onSeeking,
  onSelect,
  onSelectionChange,
  onSelectStart,
  onStalled,
  onSubmit,
  onSuspend,
  onTimeUpdate,
  onToggle,
  onTouchCancel,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
  onTransitionCancel,
  onTransitionEnd,
  onTransitionRun,
  onTransitionStart,
  onVolumeChange,
  onWaiting,
  onWheel,
}: {
  className?: string,
  children?: Array<HTMLElement | Text>,
  style?: CSS.Properties,
  id?: string,
  attributes?: {},
  onAbort?: (e: Event) => void,
  onAnimationCancel?: (e: Event) => void,
  onAnimationEnd?: (e: Event) => void,
  onAnimationIteration?: (e: Event) => void,
  onAnimationStart?: (e: Event) => void,
  onAuxClick?: (e: Event) => void,
  onBlur?: (e: Event) => void,
  onCancel?: (e: Event) => void,
  onCanPlay?: (e: Event) => void,
  onCanPlayThrough?: (e: Event) => void,
  onChange?: (e: Event) => void,
  onClick?: (e: Event) => void,
  onClose?: (e: Event) => void,
  onContextMenu?: (e: Event) => void,
  onCueChange?: (e: Event) => void,
  onDblClick?: (e: Event) => void,
  onDrag?: (e: Event) => void,
  onDragEnd?: (e: Event) => void,
  onDragEnter?: (e: Event) => void,
  onDragExit?: (e: Event) => void,
  onDragLeave?: (e: Event) => void,
  onDragOver?: (e: Event) => void,
  onDragStart?: (e: Event) => void,
  onDrop?: (e: Event) => void,
  onDurationChange?: (e: Event) => void,
  onEmptied?: (e: Event) => void,
  onEnded?: (e: Event) => void,
  onError?: (e: Event) => void,
  onFocus?: (e: Event) => void,
  onGotPointerCapture?: (e: Event) => void,
  onInput?: (e: Event) => void,
  onInvalid?: (e: Event) => void,
  onKeyDown?: (e: Event) => void,
  onKeyPress?: (e: Event) => void,
  onKeyUp?: (e: Event) => void,
  onLoad?: (e: Event) => void,
  onLoadedData?: (e: Event) => void,
  onLoadedMetaData?: (e: Event) => void,
  onLoadStart?: (e: Event) => void,
  onLostPointerCapture?: (e: Event) => void,
  onMouseDown?: (e: Event) => void,
  onMouseEnter?: (e: Event) => void,
  onMouseLeave?: (e: Event) => void,
  onMouseMove?: (e: Event) => void,
  onMouseOut?: (e: Event) => void,
  onMouseOver?: (e: Event) => void,
  onMouseUp?: (e: Event) => void,
  onPause?: (e: Event) => void,
  onPlay?: (e: Event) => void,
  onPlaying?: (e: Event) => void,
  onPointerCancel?: (e: Event) => void,
  onPointerDown?: (e: Event) => void,
  onPointerEnter?: (e: Event) => void,
  onPointerLeave?: (e: Event) => void,
  onPointerMove?: (e: Event) => void,
  onPointerOut?: (e: Event) => void,
  onPointerOver?: (e: Event) => void,
  onPointerUp?: (e: Event) => void,
  onProgress?: (e: Event) => void,
  onRateChange?: (e: Event) => void,
  onReset?: (e: Event) => void,
  onResize?: (e: Event) => void,
  onScroll?: (e: Event) => void,
  onSecurityPolicyViolation?: (e: Event) => void,
  onSeeked?: (e: Event) => void,
  onSeeking?: (e: Event) => void,
  onSelect?: (e: Event) => void,
  onSelectionChange?: (e: Event) => void,
  onSelectStart?: (e: Event) => void,
  onStalled?: (e: Event) => void,
  onSubmit?: (e: Event) => void,
  onSuspend?: (e: Event) => void,
  onTimeUpdate?: (e: Event) => void,
  onToggle?: (e: Event) => void,
  onTouchCancel?: (e: Event) => void,
  onTouchEnd?: (e: Event) => void,
  onTouchMove?: (e: Event) => void,
  onTouchStart?: (e: Event) => void,
  onTransitionCancel?: (e: Event) => void,
  onTransitionEnd?: (e: Event) => void,
  onTransitionRun?: (e: Event) => void,
  onTransitionStart?: (e: Event) => void,
  onVolumeChange?: (e: Event) => void,
  onWaiting?: (e: Event) => void,
  onWheel?: (e: Event) => void,
} = {}) => {
  return Node({
    class: className,
    children,
    style,
    id,
    ...attributes,
    onabort: onAbort,
    onanimationcancel: onAnimationCancel,
    onanimationend: onAnimationEnd,
    onanimationiteration: onAnimationIteration,
    onanimationstart: onAnimationStart,
    onauxclick: onAuxClick,
    onblur: onBlur,
    oncancel: onCancel,
    oncanplay: onCanPlay,
    oncanplaythrough: onCanPlayThrough,
    onchange: onChange,
    onclick: onClick,
    onclose: onClose,
    oncontextmenu: onContextMenu,
    oncuechange: onCueChange,
    ondblclick: onDblClick,
    ondrag: onDrag,
    ondragend: onDragEnd,
    ondragenter: onDragEnter,
    ondragexit: onDragExit,
    ondragleave: onDragLeave,
    ondragover: onDragOver,
    ondragstart: onDragStart,
    ondrop: onDrop,
    ondurationchange: onDurationChange,
    onemptied: onEmptied,
    onended: onEnded,
    onerror: onError,
    onfocus: onFocus,
    ongotpointercapture: onGotPointerCapture,
    oninput: onInput,
    oninvalid: onInvalid,
    onkeydown: onKeyDown,
    onkeypress: onKeyPress,
    onkeyup: onKeyUp,
    onload: onLoad,
    onloadeddata: onLoadedData,
    onloadedmetadata: onLoadedMetaData,
    onloadstart: onLoadStart,
    onlostpointercapture: onLostPointerCapture,
    onmousedown: onMouseDown,
    onmouseenter: onMouseEnter,
    onmouseleave: onMouseLeave,
    onmousemove: onMouseMove,
    onmouseout: onMouseOut,
    onmouseover: onMouseOver,
    onmouseup: onMouseUp,
    onpause: onPause,
    onplay: onPlay,
    onplaying: onPlaying,
    onpointercancel: onPointerCancel,
    onpointerdown: onPointerDown,
    onpointerenter: onPointerEnter,
    onpointerleave: onPointerLeave,
    onpointermove: onPointerMove,
    onpointerout: onPointerOut,
    onpointerover: onPointerOver,
    onpointerup: onPointerUp,
    onprogress: onProgress,
    onratechange: onRateChange,
    onreset: onReset,
    onresize: onResize,
    onscroll: onScroll,
    onsecuritypolicyviolation: onSecurityPolicyViolation,
    onseeked: onSeeked,
    onseeking: onSeeking,
    onselect: onSelect,
    onselectionchange: onSelectionChange,
    onselectstart: onSelectStart,
    onstalled: onStalled,
    onsubmit: onSubmit,
    onsuspend: onSuspend,
    ontimeupdate: onTimeUpdate,
    ontoggle: onToggle,
    ontouchcancel: onTouchCancel,
    ontouchend: onTouchEnd,
    ontouchmove: onTouchMove,
    ontouchstart: onTouchStart,
    ontransitioncancel: onTransitionCancel,
    ontransitionend: onTransitionEnd,
    ontransitionrun: onTransitionRun,
    ontransitionstart: onTransitionStart,
    onvolumechange: onVolumeChange,
    onwaiting: onWaiting,
    onwheel: onWheel,
  }, 'h2');
}
export default H2;
