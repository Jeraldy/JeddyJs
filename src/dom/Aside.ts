import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const Aside = (args?: args) => {
  return Node(args, 'aside');
}

export default Aside;
