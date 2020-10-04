import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    value?: string;
    accept?: string;
}
declare const FileInput: (args?: args) => HTMLElement | Text;
export default FileInput;
