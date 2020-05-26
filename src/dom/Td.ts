import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Td = (args?: args) => {
  return Node(args, 'td');
}

export default Td;