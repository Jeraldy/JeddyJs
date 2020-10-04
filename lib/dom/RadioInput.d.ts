import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
    checked?: boolean;
}
declare const RadioInput: (args?: args) => HTMLElement | Text;
export default RadioInput;
