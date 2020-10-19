import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    value?: string;
    checked?: boolean;
}
declare const RadioInput: (args?: args) => HTMLElement | Text;
export default RadioInput;
