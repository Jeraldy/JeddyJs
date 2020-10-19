import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const H2 = (args?: args) => {
  return Node(args, 'h2');
}

export default H2;
