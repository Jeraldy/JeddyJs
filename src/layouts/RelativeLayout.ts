import Div from "../core/Div"
import Size from "../utils/Size"

const style = {
    position: 'relative',
    height: '100%',
    width: '100%'
}

export default ({ children }: { children: Array<any> }) => {
    return Div({ children, style })
}

export function Locate({ child, x, y, zIndex }: { child: any, x: Size, y: Size, zIndex?: number }) {
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