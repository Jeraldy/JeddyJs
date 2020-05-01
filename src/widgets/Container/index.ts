import Div from "../../core/Div";
import * as CSS from "../../css";

export default ({ items, style }:
    {
        items: Array<HTMLElement | Text>,
        style: CSS.Properties
    }) => {
    return Div({ children: items, style })
}