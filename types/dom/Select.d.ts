import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    value?: string;
}
declare const Select: (args?: args) => HTMLElement | Text;
export default Select;
