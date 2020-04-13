import Div from "../../core/Div"
import Size from "../../utils/Size"

export default ({ child, radius, style }: {
    child: HTMLElement, radius: Size, style: {}
}) => {
    const _style = {
        borderRadius: "100%",
        height: radius,
        width: radius
    }
    style = { ...style, _style }
    return Div({
        children: [child],
        style
    })
}