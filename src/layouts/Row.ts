import Div from "../core/Div"
import RowAlignment from "./RowAlignment"
import * as CSS from "../css/index";

const style = (align?: string): CSS.Properties => {
    return {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: align || RowAlignment.Start
    }
}

const Row = ({ children, align, id }:
    { children: Array<any>, align?: RowAlignment, id?: any }) => {
    return Div({ children, style: style(align), id })
}

export default Row;
