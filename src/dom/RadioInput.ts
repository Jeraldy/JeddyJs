import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {
  value?: string,
  checked?: boolean
}

const RadioInput = (args?: args) => {
  return Node({ ...args, type: "radio" }, 'input');
}

export default RadioInput;
