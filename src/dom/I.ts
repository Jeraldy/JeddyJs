import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const I = (args?: args) => {
  return Node(args, 'i');
}

export default I;
