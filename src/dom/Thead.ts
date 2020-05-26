import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Thead = (args?: args) => {
  return Node(args, 'thead');
}

export default Thead;
