import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    value?: string;
}
declare const TextArea: (args?: args) => HTMLElement | Text;
export default TextArea;
