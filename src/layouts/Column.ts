import Div from "../core/Div"
import colAlignment from "./ColAlignment"

const style = ({ align }: { align?: string }) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: align
    }
}

type cAlign = colAlignment.Start | colAlignment.End | colAlignment.Center

export default ({ children, align }: { children: Array<any>, align?: cAlign }) => {
    return Div({ children, style: style({ align }) })
}
