import Div from "../core/Div"
import Size from "../utils/Size"

const style = {
    height: Size._100P,
    width: Size._100P,
    display: 'flex',
    justifyContent: 'center', // Center Horizontal
    alignItems: 'center', // Center Vertical   
}

export default ({ child }: { child: any }) => {
    return Div({ children: [child], style })
}