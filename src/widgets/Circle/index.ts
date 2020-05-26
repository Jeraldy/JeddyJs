import Div from "../../dom/Div"
import Size from "../../utils/Size"
import * as CSS from "../../css/index";

export default ({ child, radius, style }: {
    child: HTMLElement, radius: Size, style: CSS.Properties
}) => {
    style = {
        borderRadius: "100%",
        height: radius,
        width: radius,
        ...style
    }
    return Div({ children: [child], style })
}