import Div from "jeddy/dom/Div";
import Code from "jeddy/dom/Code";
import Pre from "jeddy/dom/Pre";
import P from "jeddy/dom/P";

function _Bdi() {
    return Div({
        children: [
            Div({
                children: ["HTML Element - Abbr"],
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
                    `The HTML <a> element (or anchor element), with its href attribute, 
                     creates a hyperlink to web pages, files, email addresses,
                     locations in the same page, or anything else a URL can address.`
                ]
            }),
            Div({
                children: ["Usage"],
                style: {
                    padding: "2px",
                    fontWeight: "bold"
                }
            }),
            Pre({
                class:"prettyprint",
                children: [
                    Code({
                        children: [CODE],
                        key: "key",
                        class: "language-js"
                    })
                ],
                style: {
                    backgroundColor: "#F8F8F8",
                    padding: "10px",
                    borderRadius: "8px",
                    border:"none"
                }
            }),
            Div({
                children: ["API"],
                style: {
                    padding: "2px",
                    fontWeight: "bold"
                }
            }),
            Pre({
                class:"prettyprint",
                children: [
                    Code({
                        children: [API],
                        style: {
                            borderRadius: "8px"
                        },
                        class: "language-js"
                    })
                ],
                style: {
                    backgroundColor: "#F8F8F8",
                    padding: "10px",
                    borderRadius: "8px",
                    border:"none"
                }
            })
        ],
        style: {
            fontSize: "17px",
        }
    })
}

const CODE = `\
import A from "jeddy/dom/A";

A({
    children:["click me"],
    style: {
        backgroundColor: "red"
    },
    href: "#"
    //... any valid attribute
})

//renders to:
<a style="background-color:red" href="#">click me</a>
`

const API = `\
A(args?: Params);

interface Params {
    href?: string,
    children?: Array<HTMLElement | Text | String>,
    download?: string,
    hrefLang?: string,
    media?: string,
    ping?: string,
    referrerPolicy?: string,
    rel?: string,
    target?: string,
    .
    .
    //... any valid attribute
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

export default _Bdi;