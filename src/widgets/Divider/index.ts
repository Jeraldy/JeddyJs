import Div from "../../core/Div"
import Size from "../../utils/Size"

const style = {
    backgroundColor: '#ccc',
    height: Size._1px,
    margin: Size._8px,
}

export default (props: any = {}) => {
    props.style = { ...style, ...props.style }
    return Div({ ...props })
}