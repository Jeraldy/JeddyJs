import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Ol = (args?: args) => {
  return Node(args, 'ol');
}

export default Ol;
