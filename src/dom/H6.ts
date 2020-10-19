import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const H6 = (args?: args) => {
  return Node(args, 'h6');
}

export default H6;
