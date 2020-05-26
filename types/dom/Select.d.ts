import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
}
declare const RadioInput: (args?: args) => HTMLElement;
export default RadioInput;
