import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const Hr = (args?: args) => {
  return Node(args, 'hr');
}

export default Hr;
