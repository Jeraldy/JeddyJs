import Div from "../../core/Div"
import * as CSS from "../../css/index";

export default ({ children, style }: { children: Array<Node>, style: CSS.Properties }) => {
    style = {
        background: '#fff',
        borderRadius: "2px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        ...style
    }
    return Div({ children, style })
}