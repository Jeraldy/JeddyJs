import RowAlignment from "./RowAlignment";
import * as CSS from "../css/index";
declare const Row: ({ children, align, id, backgroundColor, wrapContent, style }: {
    children: Array<HTMLElement | Text>;
    align?: RowAlignment;
    wrapContent?: boolean;
    id?: string;
    backgroundColor?: string;
    style?: CSS.Properties;
}) => HTMLElement | Text;
export default Row;
