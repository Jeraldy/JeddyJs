import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Ul = (args?: args) => {
  return Node(args, 'ul');
}

export default Ul;
