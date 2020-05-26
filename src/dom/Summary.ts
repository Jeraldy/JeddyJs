import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Summary = (args?: args) => {
  return Node(args, 'summary');
}

export default Summary;
