import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    value?: string;
    placeholder?: string;
    autocomplete?: string;
    ariaLabel?: string;
    type: string;
    checked?: boolean;
}
declare const _default: (args?: args) => HTMLElement | Text;
export default _default;
