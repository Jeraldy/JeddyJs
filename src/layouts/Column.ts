import Div from "../core/Div"
import ColAlignment from "./ColAlignment"

const style = ({ align }: { align?: string }) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: align
    }
}


export default ({ children, align }: { children: Array<any>, align?: ColAlignment }) => {
    return Div({ children, style: style({ align }) })
}
