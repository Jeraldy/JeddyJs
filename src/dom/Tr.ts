import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Tr = (args?: args) => {
  return Node(args, 'tr');
}

export default Tr;
