import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
    placeholder?: string;
    autocomplete?: string;
    ariaLabel?: string;
}
declare const TextInput: (args?: args) => HTMLElement | Text;
export default TextInput;
