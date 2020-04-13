import Div from "../../core/Div"
import EdgeInsets from "./EdgeInsets";

export default ({ child, padding }: { child: Node, padding: typeof EdgeInsets }) => {
    return Div({ children: [child || null], style: padding })
}