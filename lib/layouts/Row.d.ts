import RowAlignment from "./RowAlign";
import { NodeArgs } from "../core/CommonArgs";
export interface args extends NodeArgs {
    align?: RowAlignment;
    wrapContent?: true;
}
declare const Row: (args?: args) => HTMLElement | Text;
export default Row;
