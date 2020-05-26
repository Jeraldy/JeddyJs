import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const Br = (args?: args) => {
  return Node(args, 'br');
}

export default Br;
