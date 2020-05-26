import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Span = (args?: args) => {
  return Node(args, 'span');
}

export default Span;
