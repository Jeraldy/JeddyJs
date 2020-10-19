import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    value?: string;
}
declare const DateInput: (args?: args) => HTMLElement | Text;
export default DateInput;
