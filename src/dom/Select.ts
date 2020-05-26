import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {
  value?: string,
}

const RadioInput = (args?: args) => {
  return Node(args, 'select');
}

export default RadioInput;
