import Div from "jeddy/dom/Div";
import Size from "jeddy/utils/Size";
import Collapsible from '../../../Collapse/Collapsible';
import CollapsibleGroup from "../../../Collapse/CollapsibleGroup";
import { connect, dispatch } from "jeddy/jredux";
import { actions } from "../../../reducers/domElementsReducer";
import Menus from "./Menus";
import { actions as _actions } from "../../../reducers/gettingStartedReducer";
const { toggleSmallMenu } = _actions
const { updateMenu, setActivePage } = actions

const Menu = ({ stateKey }) => {
    return Div({
        children: [
            CollapsibleGroup({
                children: createMenu(
                    Menus((el, desc) => dispatch(setActivePage({ el, desc }))),
                    stateKey,
                    updateMenu,
                )
            })
        ],
        style: { width: Size._300px, height: "100vh" }
    })
}

function createMenu(children, stateKey, updateMenu, menu = []) {
    children.forEach(item => {
        let options = {
            label: item.label,
            stateKey: stateKey,
            key: item.key || item.label,
            pending: item.pending || 0,
            clickCallBack: (stateKey) => {
                dispatch(updateMenu(stateKey))
                if (item.onClick) {
                    item.onClick()
                    if (!item.children) {
                        dispatch(toggleSmallMenu())
                    }
                }
            },
        }
        if (item.children && item.children.length > 0) {
            options.style = {
                fontSize: "18px",
                backgroundColor: "#eeeeee"
            }
            options.activeBarColor = '#BA68C8'
            options.children = createMenu(item.children, stateKey, updateMenu)
        }
        menu.push(Collapsible(options))
    });
    return menu
}

const mapStateToProps = (state) => {
    return { ...state.domElementsReducer }
}

export default connect(mapStateToProps)(Menu)