import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const B = (args?: args) => {
  return Node(args, 'b');
}

export default B;
