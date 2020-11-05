import Div from "jeddy/dom/Div";
import Size from "jeddy/utils/Size";
import Collapsible from '../../../Collapse/Collapsible';
import CollapsibleGroup from "../../../Collapse/CollapsibleGroup";
import { connect, dispatch } from "jeddy/jredux";
import { actions } from "../../../reducers/layoutReducer";
import Menus from "./Menus";

const { updateMenu, setActivePart } = actions

const Menu = ({ stateKey }) => {
    return Div({
        children: [
            CollapsibleGroup({
                children: createMenu(
                    Menus((n) => dispatch(setActivePart(n))),
                    stateKey,
                    updateMenu,
                )
            })
        ],
        style: { minWidth: Size._200px, }
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

const mapStateToProps = (state) => ({ ...state.layoutReducer })

export default connect(mapStateToProps)(Menu)