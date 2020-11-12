import Div from "jeddy/dom/Div";
import { dispatch, connect } from "jeddy/jredux";
import { actions } from "../reducers/domElementsReducer";
const { setActiveMenu } = actions

const Menu = ({ activeMenu }) => {
    return Div({
        children: [
            MenuItem("Getting Started", activeMenu),
            MenuItem("Layouts", activeMenu),
            MenuItem("Widgets", activeMenu),
            MenuItem("Elements", activeMenu),
            // MenuItem("Templates", activeMenu),
            // MenuItem("Redux", activeMenu),
            // MenuItem("Tutorials", activeMenu),
        ],
        style: {
            marginRight: "12px",
            fontWeight: "bold",
            width: "200px",
            position: "fixed",
            top: "80px",
            left: "60px",
        }
    })
}

const props = (isActive) => ({
    style: {
        padding: "8px",
        cursor: "pointer",
        borderLeft: isActive ? "4px solid black" : "4px solid #BA68C8",
        backgroundColor: isActive ? "#F1F8FF" : "",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
    },
    class: "hv-item",
})

function MenuItem(label, activeMenu) {
    return Div({
        children: [label],
        onClick: () => dispatch(setActiveMenu(label)),
        ...props(activeMenu === label),
    })
}

export default connect(state => ({ ...state.domElementsReducer }))(Menu);