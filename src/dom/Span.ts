import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Span = (args?: args) => {
  return Node(args, 'span');
}

export default Span;
