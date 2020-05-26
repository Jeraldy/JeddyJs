import Div from "../dom/Div"
import Size from "../utils/Size"
import * as CSS from "../css/index"
const style: CSS.Properties = {
    position: 'relative',
    height: Size._100P,
    width: Size._100P
}

export default ({ children }:
     { children: Array<any> }) => {
    return Div({ children, style })
}

export function Locate({ child, x, y, zIndex }:
     { child: any, x: Size, y: Size, zIndex?: number }) {
    return Div({
        children: [child],
        style: {
            position: 'absolute',
            top: y,
            left: x,
            zIndex: zIndex || 0
        }
    })
}