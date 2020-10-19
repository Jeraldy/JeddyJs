import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Sub = (args?: args) => {
  return Node(args, 'sub');
}

export default Sub;
