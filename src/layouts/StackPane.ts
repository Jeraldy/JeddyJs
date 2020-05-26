import Div from "../dom/Div"
import * as CSS from "../css/index";

const StatckPane = ({ children, style }: {
    children: Array<HTMLElement>
    style: CSS.Properties
}): HTMLElement => {
    return Div({
        children: children.map(child => {
            child.style.position = 'absolute'
            return child
        }),
        style: {
            ...style,
            position: 'relative',
        }
    })
}

export default StatckPane;