import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
}
declare const NumberInput: (args?: args) => HTMLElement | Text;
export default NumberInput;
