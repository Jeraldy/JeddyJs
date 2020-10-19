import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const B = (args?: args) => {
  return Node(args, 'b');
}

export default B;
