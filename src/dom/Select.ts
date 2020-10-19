import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  value?: string,
}

const Select = (args?: args) => {
  return Node(args, 'select');
}

export default Select;
