import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Small = (args?: args) => {
  return Node(args, 'small');
}

export default Small;
