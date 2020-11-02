import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const Dd = (args?: args) => {
  return Node(args, 'dd');
}

export default Dd;
