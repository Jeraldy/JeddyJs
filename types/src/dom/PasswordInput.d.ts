import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
}
declare const PasswordInput: (args?: args) => HTMLElement;
export default PasswordInput;
