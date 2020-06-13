import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
}
declare const Select: (args?: args) => HTMLElement;
export default Select;
