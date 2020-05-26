import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Ul = (args?: args) => {
  return Node(args, 'ul');
}

export default Ul;
