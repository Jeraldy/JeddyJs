import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const H1 = (args?: args) => {
  return Node(args, 'h1');
}

export default H1;
