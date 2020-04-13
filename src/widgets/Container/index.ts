import Div from "../../core/Div";
import * as CSS from "../../css";

export default ({ items, style }: { items: Array<Node>, style: CSS.Properties }) => {
    return Div({ children: items, style })
}