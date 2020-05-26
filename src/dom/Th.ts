import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Th = (args?: args) => {
  return Node(args, 'th');
}

export default Th;
