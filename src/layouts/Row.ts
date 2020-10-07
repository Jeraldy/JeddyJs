import Div from "../dom/Div"
import RowAlignment from "./RowAlignment"
import * as CSS from "../css/index";

const _style = (wrapContent: boolean, bgColor: string, align?: string,): CSS.Properties => {
    return {
        display: 'flex',
        flexWrap: wrapContent ? 'wrap' : 'nowrap',
        justifyContent: align || RowAlignment.Start,
        backgroundColor: bgColor || ''
    }
}

const Row = ({ children, align, id, backgroundColor, wrapContent = true, style }:
    {
        children: Array<HTMLElement | Text>
        align?: RowAlignment
        wrapContent?: boolean
        id?: string
        backgroundColor?: string,
        style?: CSS.Properties
    }) => {
    return Div({
        children, style: { ..._style(wrapContent, backgroundColor, align), ...style }, id
    })
}

export default Row;
