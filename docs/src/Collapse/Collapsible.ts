import TextView from "jeddy/dom/TextView";
import RowAlign from "jeddy/layouts/RowAlign";
//@ts-ignore
import Icon from "jeddy/widgets/Icon";
import Icons from "jeddy/utils/Icons";
import Row from "jeddy/layouts/Row";
import Div from "jeddy/dom/Div";
import Size from "jeddy/utils/Size";
import * as CSS from "jeddy/css/index";
import Colors from "jeddy/utils/Colors";
import './index.css';

export default ({
    clickCallBack,
    label,
    key,
    icon,
    children = [],
    stateKey,
    style,
    activeBarColor,
    pending
}: {
    clickCallBack: (stateKey: string) => void,
    label?: string,
    key?: string,
    icon?: {
        icon?: Icons | string,
        style?: CSS.Properties
    },
    children?: Array<HTMLElement>,
    stateKey: string,
    style?: CSS.Properties,
    activeBarColor?: CSS.Color,
    pending?: 0
}) => {
    key = key || label
    const _stateKey = stateKey.split(",")
    const isActive = _stateKey[_stateKey.length - 2] == key;

    const onSelect = () => {
        if (stateKey.includes(`${key},`)) {
            if (children.length) {
                stateKey = stateKey.split(`${key},`).join("");
            } else {
                stateKey = stateKey.split(`${key},`).join("");
                stateKey += `${key},`;
            }
        } else {
            stateKey += `${key},`;
        }
        //@ts-ignore
        const mainMenus = context.getAttribute('mainnodes')

        if (mainMenus) {
            if (mainMenus.includes(`${key}`)) {
                //@ts-ignore
                mainMenus.split(",").forEach(ref => {
                    if (ref !== key) {
                        stateKey = stateKey.split(`${ref},`).join("");
                    }
                })
            }
        }
        clickCallBack(stateKey);
    }

    let context = Div({
        children: [
            Div({
                children: [
                    Row({
                        children: [
                            Div({
                                children: [
                                    Row({
                                        children: [
                                            icon ? Icon({ name: icon.icon, style: icon.style }) : null,
                                            Div({
                                                children: [
                                                    TextView(label || '')
                                                ],
                                                style: {
                                                    marginLeft: Size._8px,
                                                    marginTop: Size._5px,
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                }
                                            })
                                        ],
                                    }),
                                ],
                            }),
                            endItem(children, stateKey, key, pending)
                        ],
                        align: RowAlign.SpaceBetween,
                        //@ts-ignore
                        wrapContent: false
                    })
                ],
                style: {
                    backgroundColor: Colors.grey_lighten4,
                    cursor: 'pointer',
                    padding: Size._8px,
                    paddingTop: Size._5px,
                    borderTop: '1px solid #FFFFFF',
                    fontWeight: isActive ? 'bolder' : 'lighter',
                    ...style
                },
                onClick: () => onSelect()
            }),
            Div({
                style: {
                    height: calcHeight(stateKey, label, children.length),
                    cursor: 'pointer',
                    transition: 'height .3s',
                    overflow: 'hidden',
                    borderLeft: `5px solid ${activeBarColor || Colors.grey}`,
                },
                children: [
                    Div({
                        class: 'scroll-nice',
                        style: {
                            overflowY: "scroll",
                            height: calcHeight(stateKey, key, children.length),
                            backgroundColor: Colors.grey_lighten4,
                        },
                        children
                    })
                ]
            }),
        ],
        attrs: {
            ref: key
        }
    })

    return context;
}

function endItem(children: any, stateKey: string, key: string, pending: number) {
    if (pending > 0) {
        return Div({
            children: [`${pending}`],
            style: {
                borderRadius: "100%",
                paddingTop: "3px",
                paddingRight: "8px",
                paddingLeft: "8px",
                backgroundColor: "red",
                color: "white",
                textAlign: "center",
            }
        })
    }
    return children.length > 0 ? Icon({ name: stateKey.includes(key) ? Icons.keyboard_arrow_down : Icons.keyboard_arrow_right }) : null
}

function calcHeight(stateKey: string, key: string, numChildren: number) {
    let height = '0px'
    if (stateKey.includes(`${key},`)) {
        height = `${38 * numChildren}px`
    }
    return height
}

