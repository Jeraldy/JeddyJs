import Div from "jeddy/dom/Div";
import Code from "jeddy/dom/Code";
import Pre from "jeddy/dom/Pre";
import P from "jeddy/dom/P";
import PrettyCode from "../PrettyCode";

function _Article() {
    return Div({
        children: [
            Div({
                children: ["HTML Element - Article"],
                style: {
                    padding: "2px",
                    fontWeight: "bold",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "8px",
                    marginBottom:"8px",
                    color: "#ba68c8"
                }
            }),
            Div({
                children: ["Description"],
                style: {
                    padding: "2px",
                    fontWeight: "bold"
                }
            }),
            P({
                children: [
                    `The HTML <article> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).`
                ]
            }),
            Div({
                children: ["Usage"],
                style: {
                    padding: "2px",
                    fontWeight: "bold"
                }
            }),
            PrettyCode(CODE),
            Div({
                children: ["API"],
                style: {
                    padding: "2px",
                    fontWeight: "bold"
                }
            }),
            PrettyCode(API)
        ],
        style: {
            fontSize: "17px",
        }
    })
}

const CODE = `\
import Article from "jeddy/dom/Article";

Article({
    children:["Your article here"],
    //... Any valid attribute/event
})
`

const API = `\
Article(args?: Params);

interface Params {
    style?: CSS.Properties,
    children?: Array<HTMLElement | Text | String>,
    class?: string,
    id?: string,
    key?: string,
    .
    .
    //... Any valid attribute/event
    .
    .
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
    onConnected?: (parent: HTMLElement) => void
}    
`

export default _Article;