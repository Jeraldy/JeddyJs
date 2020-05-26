import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
}
declare const NumberInput: (args?: args) => HTMLElement;
export default NumberInput;
