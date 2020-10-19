import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Li = (args?: args) => {
  return Node(args, 'li');
}

export default Li;
