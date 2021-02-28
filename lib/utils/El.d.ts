import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    tag: string;
}
declare const _default: (args?: args) => HTMLElement | Text;
export default _default;
