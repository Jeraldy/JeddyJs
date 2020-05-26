import Div from "../../dom/Div"

const CollapsibleGroup = ({
    children
}: {
    children: Array<HTMLElement>
}) => {
    let mainNodes = children.map(child => child.getAttribute('ref'))
    return Div({
        children: children.map(child => {
            child.setAttribute('mainNodes', mainNodes.toString())
            return child
        })
    })
}

export default CollapsibleGroup;