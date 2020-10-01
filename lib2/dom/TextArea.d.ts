import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
}
declare const TextArea: (args?: args) => HTMLElement;
export default TextArea;
