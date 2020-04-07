import Div from "../core/Div"
import rowAlignment from "./RowAlignment"

const style = (align?: string) => {
    return {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: align || rowAlignment.Start
    }
}

type rAlign = rowAlignment.Start | rowAlignment.End | rowAlignment.Center
    | rowAlignment.SpaceBetween | rowAlignment.SpaceEvenly

export default ({ children, align, id }:
    { children: Array<any>, align?: rAlign, id?: any }) => {
    return Div({ children, style: style(align), id })
}
