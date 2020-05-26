import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Small = (args?: args) => {
  return Node(args, 'small');
}

export default Small;
