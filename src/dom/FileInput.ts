import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {
  value?: string,
  accept?: string
}

const FileInput = (args?: args) => {
  return Node({ ...args, type: "file" }, 'input');
}

export default FileInput;
