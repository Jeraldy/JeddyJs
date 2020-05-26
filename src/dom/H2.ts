import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const H2 = (args?: args) => {
  return Node(args, 'h2');
}

export default H2;
