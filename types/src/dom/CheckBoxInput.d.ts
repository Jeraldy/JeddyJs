import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    checked?: boolean;
}
declare const CheckBoxInput: (args?: args) => HTMLElement;
export default CheckBoxInput;
