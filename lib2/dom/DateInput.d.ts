import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
}
declare const DateInput: (args?: args) => HTMLElement;
export default DateInput;
