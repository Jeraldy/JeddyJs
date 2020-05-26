import Div from "../../dom/Div";
import '../../styles/loader.css';
import Size from "../../utils/Size";

export default ({
    radius = Size._50px,
    thickness = Size._5px,
    color = '#FF6600'
}: {
    radius?: string,
    thickness?: string,
    color?: string
} = {}) => {
    return Div({
        class: 'loader',
        style: {
            height: radius,
            width: radius,
            border: `${thickness} solid #f3f3f3`,
            borderTop: `${thickness} solid ${color}`,
        }
    })
}