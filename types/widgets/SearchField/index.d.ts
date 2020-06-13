import { NodeArgs } from '../../core/Args';
export interface args extends NodeArgs {
    value?: string;
    placeholder?: string;
    autocomplete?: string;
    ariaLabel?: string;
}
declare const _default: (args?: args) => HTMLElement;
export default _default;
