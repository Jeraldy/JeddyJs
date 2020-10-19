import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  value?: string,
  placeholder?: string,
  autocomplete?: string,
  ariaLabel?: string
}

const TextInput = (args?: args) => {
  return Node({ ...args, type: "text" }, 'input');
}

export default TextInput;
