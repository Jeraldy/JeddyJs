import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Strong = (args?: args) => {
  return Node(args, 'strong');
}

export default Strong;
