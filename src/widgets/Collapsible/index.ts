import Icons from "../../utils/Icons";
import * as CSS from "../../css";
import Div from "../../dom/Div";
import Row from "../../layouts/Row";
import Icon from "../Icon";
import RowAlignment from "../../layouts/RowAlignment";
import Size from "../../utils/Size";
import TextView from "../../dom/TextView";
import Colors from "../../utils/Colors";

const Collapsible = ({
    clickCallBack,
    label,
    icon,
    children = [],
    stateKey,
    style,
    activeBarColor
}: {
    clickCallBack: (stateKey: string) => void,
    label?: string,
    icon?: {
        icon: Icons,
        style: CSS.Properties
    },
    children?: Array<HTMLElement>,
    stateKey: string,
    style?: CSS.Properties,
    activeBarColor?: CSS.Color
}) => {
    const _stateKey = stateKey.split(",")
    const isActive = _stateKey[_stateKey.length - 2] == label;

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
                                                }
                                            })
                                        ],
                                    }),
                                ],
                            }),
                            children.length > 0 ? Icon({ name: stateKey.includes(label) ? Icons.keyboard_arrow_down : Icons.keyboard_arrow_right }) : null,
                        ],
                        align: RowAlignment.SpaceBetween
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
                onClick: () => {
                    if (stateKey.includes(`${label},`)) {
                        stateKey = stateKey.split(`${label},`).join("");
                    }
                    else {
                        stateKey += `${label},`;
                    }
                    const mainMenus = context.getAttribute('mainNodes')
                    if (mainMenus) {
                        if (mainMenus.includes(`${label}`)) {
                            mainMenus.split(",").forEach(ref => {
                                if (ref !== label) {
                                    stateKey = stateKey.split(`${ref},`).join("");
                                }
                            })
                        }
                    }
                    clickCallBack(stateKey);
                }
            }),
            Div({
                style: {
                    height: calcHeight(stateKey, label),
                    cursor: 'pointer',
                    transition: 'height .2s',
                    overflow: 'hidden',
                    borderLeft: `5px solid ${activeBarColor || Colors.grey}`,
                },
                children
            }),
        ],
        attrs: {
            ref: label
        }
    })

    return context;
}

export default Collapsible;

function calcHeight(stateKey: string, label: string) {
    let height = '0px'
    if (stateKey.includes(`${label},`)) {
        height = '100%'
    }
    return height
}

