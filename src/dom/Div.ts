import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const Div = (args?: args) => {
  return Node(args, 'div');
}

export default Div;
