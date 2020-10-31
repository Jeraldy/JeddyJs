import Div from "../dom/Div"
import RowAlignment from "./RowAlignment"
import * as CSS from "../css/index";
import { NodeArgs } from "../core/CommonArgs";

const _style = (wrapContent: boolean, align?: string,): CSS.Properties => {
    return {
        display: 'flex',
        flexWrap: wrapContent ? 'wrap' : 'nowrap',
        justifyContent: align || RowAlignment.Start,
    }
}

export interface args extends NodeArgs {
    align?: RowAlignment
    wrapContent?: true
}

const Row = (args?: args) => {
    const style = args.style || {}
    return Div({
        ...args,
        style: {
            ..._style(args.wrapContent, args.align),
            ...style
        },
    })
}

export default Row;
