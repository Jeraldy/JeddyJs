import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Ol = (args?: args) => {
  return Node(args, 'ol');
}

export default Ol;
