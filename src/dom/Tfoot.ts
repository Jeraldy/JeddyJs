import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Tfoot = (args?: args) => {
  return Node(args, 'tfoot');
}

export default Tfoot;
