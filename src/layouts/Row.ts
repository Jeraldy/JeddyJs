import Div from "../dom/Div"
import RowAlignment from "./RowAlignment"
import * as CSS from "../css/index";

const style = (wrapContent: boolean, bgColor: string, align?: string, ): CSS.Properties => {
    return {
        display: 'flex',
        flexWrap: wrapContent ? 'wrap' : 'nowrap',
        justifyContent: align || RowAlignment.Start,
        backgroundColor: bgColor || ''
    }
}

const Row = ({ children, align, id, backgroundColor, wrapContent = true }:
    {
        children: Array<HTMLElement | Text>
        align?: RowAlignment
        wrapContent?: boolean
        id?: string
        backgroundColor?: string
    }) => {
    return Div({ children, style: style(wrapContent, backgroundColor, align), id })
}

export default Row;
