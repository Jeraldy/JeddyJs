import Div from "../core/Div"
import ColAlignment from "./ColAlignment"
import Size from "../utils/Size"
import * as CSS from "../css/index";
const style = ({ align }: { align?: string }): CSS.Properties => {
    return {
        display: 'flex',
        flexDirection: 'column',
        width: Size._100P,
        alignItems: align
    }
}


export default ({ children, align }: { children: Array<HTMLElement | Text>, align?: ColAlignment }) => {
    return Div({ children, style: style({ align }) })
}
