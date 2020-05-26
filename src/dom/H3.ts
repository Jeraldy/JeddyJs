import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const H3 = (args?: args) => {
  return Node(args, 'h3');
}

export default H2;
