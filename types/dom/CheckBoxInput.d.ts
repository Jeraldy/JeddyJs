import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    checked?: boolean;
}
declare const CheckBoxInput: (args?: args) => HTMLElement | Text;
export default CheckBoxInput;
