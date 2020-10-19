import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    value?: string;
}
declare const PasswordInput: (args?: args) => HTMLElement | Text;
export default PasswordInput;
