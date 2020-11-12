import Card from "jeddy/widgets/Card";
import Center from "jeddy/layouts/Center";
import Icons from "jeddy/utils/Icons";
import Icon from "jeddy/widgets/Icon";
import Div from "jeddy/dom/Div";
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from "jeddy/jredux";
import { actions } from "../reducers/domElementsReducer";
import RowAlign from "jeddy/layouts/RowAlign";
const { setActiveMenu } = actions
import Button from "jeddy/dom/Button"

const MenuMobile = ({ activeMenu }) => {
    return Div({
        children: [
            Card({
                children: [
                    Row({
                        children: [
                            MenuItem("Getting Started", activeMenu),
                            MenuItem("Layouts", activeMenu),
                            MenuItem("Widgets", activeMenu),
                            MenuItem("Elements", activeMenu),
                        ],
                        wrapContent: false,
                        align: RowAlign.SpaceBetween
                    })
                ],
                style: {
                  fontSize: "13px",
                  overflowX: "scroll"
                }
            })
        ],
        style: {
            paddingTop: "80px",
            paddingRight: "10px",
            paddingLeft: "8px"
        }
    })
}

const props = (isActive) => ({
    style: {
        border: "none",
        padding: "8px",
        cursor: "pointer",
        borderBottom: isActive ? "4px solid black" : "4px solid #F1F8FF",
        backgroundColor: isActive ? "#F1F8FF" : "",
        width: "calc(100%/4)",
        textAlign: "center",
        outline: "none"
    },
    class: "hv-item",
})

function MenuItem(label, activeMenu) {
    return Button({
        children: [label],
       // role: "button",
        onClick: () => dispatch(setActiveMenu(label)),
        ...props(activeMenu === label),
    })
}

export default connect(state => ({ ...state.domElementsReducer }))(MenuMobile);