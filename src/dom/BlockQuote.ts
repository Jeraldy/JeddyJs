import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const BlockQuote = (args?: args) => {
  return Node(args, 'blockquote');
}

export default BlockQuote;
