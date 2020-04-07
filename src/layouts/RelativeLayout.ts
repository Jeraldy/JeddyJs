import Div from "../core/Div"

const style = {
    position: 'relative',
    height: '100%',
    width: '100%'
}

export default ({ children }: { children: Array<any> }) => {
    return Div({ children, style })
}

export function Locate({ child, x, y, zIndex }: { child: any, x: number, y: number, zIndex?: number }) {
    return Div({
        children: [child],
        style: {
            position: 'absolute',
            top: `${y}px`,
            left: `${x}px`,
            zIndex: zIndex || 0
        }
    })
}