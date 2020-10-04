import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    rowspan?: number;
    colspan?: number;
}
declare const Td: (args?: args) => HTMLElement | Text;
export default Td;
