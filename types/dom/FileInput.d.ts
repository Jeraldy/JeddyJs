import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    value?: string;
    accept?: string;
}
declare const FileInput: (args?: args) => HTMLElement | Text;
export default FileInput;
