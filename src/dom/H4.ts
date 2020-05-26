import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const H4 = (args?: args) => {
  return Node(args, 'h4');
}

export default H4;
