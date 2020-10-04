import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
}
declare const P: (args?: args) => HTMLElement | Text;
export default P;
