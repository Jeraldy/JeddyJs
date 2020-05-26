import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Tfoot = (args?: args) => {
  return Node(args, 'tfoot');
}

export default Tfoot;
