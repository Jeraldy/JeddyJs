import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const P = (args?: args) => {
  return Node(args, 'p');
}

export default P;
