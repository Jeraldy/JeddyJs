import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    rowspan?: number;
    colspan?: number;
}
declare const Th: (args?: args) => HTMLElement;
export default Th;
